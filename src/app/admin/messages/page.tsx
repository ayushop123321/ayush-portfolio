'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, getDocs, doc, updateDoc, deleteDoc, orderBy, Timestamp } from 'firebase/firestore';
import { FaCheck, FaEye, FaTrash, FaSearch } from 'react-icons/fa';

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  service: string;
  createdAt: Timestamp;
  read: boolean;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'read' | 'unread'>('all');

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    setLoading(true);
    try {
      const messagesRef = collection(db, 'messages');
      const q = query(messagesRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const messagesData: Message[] = [];
      querySnapshot.forEach((doc) => {
        messagesData.push({
          id: doc.id,
          ...doc.data() as Omit<Message, 'id'>
        });
      });
      
      setMessages(messagesData);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  }

  async function markAsRead(messageId: string) {
    try {
      const messageRef = doc(db, 'messages', messageId);
      await updateDoc(messageRef, {
        read: true
      });
      
      // Update local state
      setMessages(prevMessages => 
        prevMessages.map(msg => 
          msg.id === messageId ? { ...msg, read: true } : msg
        )
      );
      
      if (selectedMessage?.id === messageId) {
        setSelectedMessage(prev => prev ? { ...prev, read: true } : null);
      }
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  }

  async function deleteMessage(messageId: string) {
    if (!window.confirm('Are you sure you want to delete this message?')) {
      return;
    }
    
    try {
      const messageRef = doc(db, 'messages', messageId);
      await deleteDoc(messageRef);
      
      // Update local state
      setMessages(prevMessages => prevMessages.filter(msg => msg.id !== messageId));
      
      if (selectedMessage?.id === messageId) {
        setSelectedMessage(null);
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  }

  function formatDate(timestamp: Timestamp) {
    const date = timestamp?.toDate();
    if (!date) return 'N/A';
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  // Filter messages by search term and read status
  const filteredMessages = messages.filter(message => {
    const matchesSearch = searchTerm === '' || 
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesFilter = 
      filterStatus === 'all' ||
      (filterStatus === 'read' && message.read) ||
      (filterStatus === 'unread' && !message.read);
      
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Messages</h1>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="bg-gray-900/70 pl-10 pr-4 py-2 border border-gray-700 rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full text-white"
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-lg transition-colors ${
              filterStatus === 'all' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
            onClick={() => setFilterStatus('all')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition-colors ${
              filterStatus === 'unread' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
            onClick={() => setFilterStatus('unread')}
          >
            Unread
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition-colors ${
              filterStatus === 'read' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
            onClick={() => setFilterStatus('read')}
          >
            Read
          </button>
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-1 bg-gray-900/70 rounded-xl border border-purple-500/10 overflow-hidden">
            <div className="p-4 border-b border-gray-800">
              <h2 className="text-xl font-semibold text-white">
                {filteredMessages.length} {filteredMessages.length === 1 ? 'Message' : 'Messages'}
              </h2>
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              {filteredMessages.length > 0 ? (
                <div className="divide-y divide-gray-800">
                  {filteredMessages.map((message) => (
                    <div 
                      key={message.id}
                      className={`p-4 cursor-pointer transition-colors ${
                        selectedMessage?.id === message.id 
                          ? 'bg-purple-900/30' 
                          : 'hover:bg-gray-800/50'
                      } ${!message.read ? 'border-l-4 border-purple-500' : ''}`}
                      onClick={() => setSelectedMessage(message)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-medium truncate">
                          {message.name}
                        </h3>
                        <span className="text-xs text-gray-400">
                          {formatDate(message.createdAt)}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm truncate mb-1">
                        {message.subject || 'No subject'}
                      </p>
                      <p className="text-gray-500 text-xs truncate">
                        {message.message.substring(0, 60)}...
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-400">
                  No messages found
                </div>
              )}
            </div>
          </div>
          
          {/* Message Detail */}
          <div className="lg:col-span-2 bg-gray-900/70 rounded-xl border border-purple-500/10 overflow-hidden">
            {selectedMessage ? (
              <div className="h-full flex flex-col">
                <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-white">
                    {selectedMessage.subject || 'No subject'}
                  </h2>
                  <div className="flex gap-2">
                    {!selectedMessage.read && (
                      <button
                        onClick={() => markAsRead(selectedMessage.id)}
                        className="p-2 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-colors"
                        title="Mark as Read"
                      >
                        <FaCheck className="h-4 w-4" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteMessage(selectedMessage.id)}
                      className="p-2 bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white rounded-lg transition-colors"
                      title="Delete Message"
                    >
                      <FaTrash className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="p-6 flex-grow overflow-y-auto">
                  <div className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-gray-400 text-sm">From:</p>
                        <p className="text-white">{selectedMessage.name}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email:</p>
                        <p className="text-white">{selectedMessage.email}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Date:</p>
                        <p className="text-white">{formatDate(selectedMessage.createdAt)}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Service:</p>
                        <p className="text-white capitalize">{selectedMessage.service?.replace('-', ' ') || 'Not specified'}</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-800 pt-6">
                      <p className="text-gray-400 text-sm mb-2">Message:</p>
                      <div className="text-white bg-black/20 p-4 rounded-lg whitespace-pre-wrap">
                        {selectedMessage.message}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-white font-medium">Quick Reply</h3>
                    </div>
                    <div className="bg-black/20 p-4 rounded-lg text-center">
                      <p className="text-gray-400">
                        To reply to this message, please use your email client:
                      </p>
                      <a 
                        href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject || 'Your inquiry'}`}
                        className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                      >
                        Reply via Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-gray-400">
                <FaEye className="h-12 w-12 mb-4 opacity-20" />
                <p>Select a message to view details</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, getDocs, where, orderBy, limit, Timestamp } from 'firebase/firestore';
import { FaComments, FaEnvelope, FaChartLine, FaCalendarAlt } from 'react-icons/fa';

interface DashboardStat {
  title: string;
  value: number | string;
  icon: JSX.Element;
  color: string;
}

interface RecentMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Timestamp;
  read: boolean;
}

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStat[]>([]);
  const [recentMessages, setRecentMessages] = useState<RecentMessage[]>([]);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        // Fetch messages collection
        const messagesRef = collection(db, 'messages');
        const messagesQuery = query(
          messagesRef,
          orderBy('createdAt', 'desc'),
          limit(5)
        );
        
        const messagesSnapshot = await getDocs(messagesQuery);
        const totalMessages = messagesSnapshot.size;

        // Get recent messages
        const recentMessagesData: RecentMessage[] = [];
        messagesSnapshot.forEach(doc => {
          recentMessagesData.push({
            id: doc.id,
            ...doc.data() as Omit<RecentMessage, 'id'>
          });
        });
        
        // Get unread messages count
        const unreadQuery = query(messagesRef, where('read', '==', false));
        const unreadSnapshot = await getDocs(unreadQuery);
        const unreadCount = unreadSnapshot.size;

        // Get today's messages
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const todayTimestamp = Timestamp.fromDate(today);
        const todayQuery = query(messagesRef, where('createdAt', '>=', todayTimestamp));
        const todaySnapshot = await getDocs(todayQuery);
        const todayCount = todaySnapshot.size;

        // Set dashboard stats
        setStats([
          {
            title: 'Total Messages',
            value: totalMessages,
            icon: <FaComments />,
            color: 'bg-purple-500'
          },
          {
            title: 'Unread Messages',
            value: unreadCount,
            icon: <FaEnvelope />,
            color: 'bg-blue-500'
          },
          {
            title: 'Today\'s Messages',
            value: todayCount,
            icon: <FaCalendarAlt />,
            color: 'bg-green-500'
          },
          {
            title: 'Response Rate',
            value: totalMessages ? `${Math.round(((totalMessages - unreadCount) / totalMessages) * 100)}%` : '0%',
            icon: <FaChartLine />,
            color: 'bg-amber-500'
          }
        ]);

        // Set recent messages
        setRecentMessages(recentMessagesData);

      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

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

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <>
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gray-900/70 rounded-xl p-6 border border-purple-500/10 flex items-center"
              >
                <div className={`${stat.color} rounded-full h-12 w-12 flex items-center justify-center text-white text-lg`}>
                  {stat.icon}
                </div>
                <div className="ml-4">
                  <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                  <p className="text-white text-xl font-bold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Messages */}
          <div className="bg-gray-900/70 rounded-xl border border-purple-500/10 overflow-hidden">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold text-white">Recent Messages</h2>
            </div>
            <div className="p-0">
              {recentMessages.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-black/30">
                      <tr>
                        <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider p-4">Name</th>
                        <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider p-4">Subject</th>
                        <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider p-4">Date</th>
                        <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider p-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {recentMessages.map((message) => (
                        <tr key={message.id} className="hover:bg-gray-800/30 transition-colors">
                          <td className="p-4">
                            <div>
                              <p className="text-sm font-medium text-white">{message.name}</p>
                              <p className="text-xs text-gray-400">{message.email}</p>
                            </div>
                          </td>
                          <td className="p-4 text-sm text-gray-300">
                            {message.subject || 'No subject'}
                          </td>
                          <td className="p-4 text-sm text-gray-400">
                            {formatDate(message.createdAt)}
                          </td>
                          <td className="p-4">
                            <span 
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                message.read ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'
                              }`}
                            >
                              {message.read ? 'Read' : 'Unread'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  No messages found
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
} 
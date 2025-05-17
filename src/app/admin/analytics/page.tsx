'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, getDocs, where, Timestamp } from 'firebase/firestore';

type ServiceCounts = {
  'web-development': number;
  'discord-bot': number;
  'minecraft-plugin': number;
  'other': number;
  [key: string]: number; // Index signature for dynamic keys
};

type DaysCounts = {
  Sunday: number;
  Monday: number;
  Tuesday: number;
  Wednesday: number;
  Thursday: number;
  Friday: number;
  Saturday: number;
  [key: string]: number; // Index signature for dynamic keys
};

interface AnalyticsDataType {
  totalMessages: number;
  messagesLastWeek: number;
  messagesByService: ServiceCounts;
  messagesByDay: DaysCounts;
}

export default function AnalyticsPage() {
  const [loading, setLoading] = useState(true);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsDataType>({
    totalMessages: 0,
    messagesLastWeek: 0,
    messagesByService: {
      'web-development': 0,
      'discord-bot': 0,
      'minecraft-plugin': 0,
      'other': 0,
    },
    messagesByDay: {
      Sunday: 0,
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0,
    }
  });

  useEffect(() => {
    async function fetchAnalyticsData() {
      try {
        // Fetch all messages
        const messagesRef = collection(db, 'messages');
        const messagesSnapshot = await getDocs(messagesRef);
        const totalMessages = messagesSnapshot.size;
        
        // Process message data for analytics
        const messagesByService: ServiceCounts = {
          'web-development': 0,
          'discord-bot': 0,
          'minecraft-plugin': 0,
          'other': 0,
        };
        
        const messagesByDay: DaysCounts = {
          Sunday: 0,
          Monday: 0,
          Tuesday: 0,
          Wednesday: 0,
          Thursday: 0,
          Friday: 0,
          Saturday: 0,
        };
        
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        // Get date for one week ago
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        let messagesLastWeek = 0;
        
        // Process each message
        messagesSnapshot.forEach((doc) => {
          const data = doc.data();
          
          // Count by service
          const service = data.service || 'other';
          messagesByService[service] = (messagesByService[service] || 0) + 1;
          
          // Count by day of week
          if (data.createdAt) {
            const date = data.createdAt.toDate();
            const dayOfWeek = dayNames[date.getDay()];
            messagesByDay[dayOfWeek] = (messagesByDay[dayOfWeek] || 0) + 1;
            
            // Count messages in the last week
            if (date >= oneWeekAgo) {
              messagesLastWeek++;
            }
          }
        });
        
        setAnalyticsData({
          totalMessages,
          messagesLastWeek,
          messagesByService,
          messagesByDay
        });
        
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchAnalyticsData();
  }, []);

  // Helper function to get highest value for scaling
  const getMaxValue = (obj: Record<string, number>) => {
    return Math.max(...Object.values(obj), 1);
  };

  const maxServiceValue = getMaxValue(analyticsData.messagesByService);
  const maxDayValue = getMaxValue(analyticsData.messagesByDay);

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Analytics</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/70 rounded-xl border border-purple-500/10 p-6">
              <h2 className="text-xl font-semibold text-white mb-2">Total Messages</h2>
              <p className="text-4xl font-bold text-purple-500">{analyticsData.totalMessages}</p>
              <p className="text-gray-400 mt-2">All-time message count</p>
            </div>
            <div className="bg-gray-900/70 rounded-xl border border-purple-500/10 p-6">
              <h2 className="text-xl font-semibold text-white mb-2">Last 7 Days</h2>
              <p className="text-4xl font-bold text-blue-500">{analyticsData.messagesLastWeek}</p>
              <p className="text-gray-400 mt-2">Messages received in the past week</p>
            </div>
          </div>
          
          {/* Messages by Service */}
          <div className="bg-gray-900/70 rounded-xl border border-purple-500/10 p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Messages by Service</h2>
            <div className="space-y-4">
              {Object.entries(analyticsData.messagesByService).map(([service, count]) => (
                <div key={service} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-white capitalize">{service.replace('-', ' ')}</span>
                    <span className="text-gray-400">{count}</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        service === 'web-development' ? 'bg-purple-500' :
                        service === 'discord-bot' ? 'bg-blue-500' :
                        service === 'minecraft-plugin' ? 'bg-green-500' :
                        'bg-amber-500'
                      }`}
                      style={{ width: `${(count / maxServiceValue) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Messages by Day of Week */}
          <div className="bg-gray-900/70 rounded-xl border border-purple-500/10 p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Messages by Day</h2>
            <div className="flex items-end justify-between h-64 gap-2">
              {Object.entries(analyticsData.messagesByDay).map(([day, count]) => (
                <div key={day} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full bg-gradient-to-t from-purple-600 to-blue-600 rounded-t-lg"
                    style={{ 
                      height: `${Math.max((count / maxDayValue) * 100, 4)}%`,
                    }}
                  ></div>
                  <div className="text-xs text-gray-400 mt-2 text-center">
                    {day.substring(0, 3)}
                  </div>
                  <div className="text-white font-medium mt-1">
                    {count}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="bg-gray-900/70 rounded-xl border border-purple-500/10 p-6 text-center text-gray-400 text-sm">
            <p>This page shows real-time data based on actual message submissions.</p>
            <p className="mt-2">For more detailed analytics, consider integrating with a dedicated analytics service.</p>
          </div>
        </div>
      )}
    </>
  );
} 
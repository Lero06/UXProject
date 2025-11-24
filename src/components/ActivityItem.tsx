import React from 'react';
import { ActivityItem as AI } from '../types';

export default function ActivityItem({ item }: { item: AI }) {
  const statusColor = item.status === 'completed' ? 'text-green-600' : item.status === 'upcoming' ? 'text-orange-500' : 'text-gray-500';

  return (
    <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-3">
      <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden">
        <img src={item.imageUrl} alt={item.tourTitle} className="object-cover w-full h-full" />
      </div>
      <div className="flex-1">
        <div className="font-medium">{item.tourTitle}</div>
        <div className="text-xs text-gray-500">{item.date}</div>
      </div>
      <div className={`text-xs font-semibold ${statusColor}`}>{item.status}</div>
    </div>
  );
}

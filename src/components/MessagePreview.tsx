import React from 'react';
import { Message } from '../types';
import { useNavigate } from 'react-router-dom';

export default function MessagePreview({ message }: { message: Message }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/messages')}
      className="w-full flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm cursor-pointer"
    >
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
        {message.avatarUrl ? <img src={message.avatarUrl} alt={message.guideName} /> : <span>👤</span>}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div className="font-medium">{message.guideName}</div>
          <div className="text-xs text-gray-400">{message.timeAgo}</div>
        </div>
        <div className="text-sm text-gray-600 mt-1 flex items-center gap-2">
          <span className="truncate">{message.lastMessage}</span>
          {message.unreadCount ? (
            <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{message.unreadCount}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

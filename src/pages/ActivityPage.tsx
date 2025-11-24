import React from 'react';
import Header from '../components/Header';
import ActivityItem from '../components/ActivityItem';
import { ActivityItem as AI } from '../types';

const mockActivity: AI[] = [
  { id: 'a1', tourTitle: 'Aventura en Monteverde', status: 'completed', date: '2025-10-10', imageUrl: 'https://via.placeholder.com/200x150?text=Monteverde' },
  { id: 'a2', tourTitle: 'Relax en Manuel Antonio', status: 'upcoming', date: '2025-12-05', imageUrl: 'https://via.placeholder.com/200x150?text=Manuel+Antonio' },
];

export default function ActivityPage() {
  return (
    <div className="p-4 pb-24">
      <Header title="Mi actividad" showBack />

      <div className="mt-4 space-y-3">
        {mockActivity.map((a) => (
          <ActivityItem key={a.id} item={a} />
        ))}
      </div>
    </div>
  );
}

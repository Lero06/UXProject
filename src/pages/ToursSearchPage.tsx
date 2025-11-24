import React, { useState } from 'react';
import Header from '../components/Header';
import TourCard from '../components/TourCard';
import { Tour } from '../types';

const mockTours: Tour[] = [
  {
    id: '1',
    title: 'Aventura en Monteverde',
    location: 'Monteverde, Costa Rica',
    rating: 4.8,
    reviewsCount: 124,
    pricePerPerson: 85,
    durationHours: 6,
    imageUrl: 'https://via.placeholder.com/400x300?text=Monteverde',
  },
  {
    id: '2',
    title: 'Relax en Playa Manuel Antonio',
    location: 'Manuel Antonio',
    rating: 4.7,
    reviewsCount: 98,
    pricePerPerson: 120,
    durationHours: 8,
    imageUrl: 'https://via.placeholder.com/400x300?text=Manuel+Antonio',
  },
  {
    id: '3',
    title: 'Cataratas y Aventura',
    location: 'La Fortuna',
    rating: 4.9,
    reviewsCount: 210,
    pricePerPerson: 99,
    durationHours: 7,
    imageUrl: 'https://via.placeholder.com/400x300?text=La+Fortuna',
  },
];

export default function ToursSearchPage() {
  const [query, setQuery] = useState('');

  const filtered = mockTours.filter((t) =>
    `${t.title} ${t.location}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="p-4 pb-24">
      <Header title="Buscar tours" />

      <div className="mt-4">
        <div className="flex items-center gap-2">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar por destino o actividad" className="flex-1 p-2 rounded border" />
        </div>

        <div className="mt-4 space-y-3">
          {filtered.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

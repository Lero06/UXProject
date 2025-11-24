import React from 'react';
import Header from '../components/Header';
import CategoryChip from '../components/CategoryChip';
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
    tags: ['Aventura', 'Bosque'],
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
    tags: ['Playa', 'Naturaleza'],
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
    tags: ['Aventura', 'Cascadas'],
  },
];

export default function HomePage() {
  return (
    <div className="p-4 pb-24">
      <Header title="Pura Guía" />

      <div className="mt-4">
        <div className="flex items-center gap-2">
          <input placeholder="Buscar tours" className="flex-1 p-2 rounded border" />
          <button className="ml-2 px-3 py-2 bg-teal-600 text-white rounded">Buscar</button>
        </div>

        <div className="mt-4 overflow-x-auto pb-2">
          <div className="flex gap-2">
            {['Playa', 'Aventura', 'Montaña', 'Cultura'].map((c) => (
              <CategoryChip key={c} label={c} />
            ))}
          </div>
        </div>

        <h2 className="mt-6 text-sm font-semibold">Ofertas para vos</h2>
        <div className="mt-2 grid grid-cols-1 gap-3">
          {mockTours.slice(0, 2).map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>

        <h2 className="mt-6 text-sm font-semibold">Tours populares en Costa Rica</h2>
        <div className="mt-2 space-y-3">
          {mockTours.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

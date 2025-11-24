import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
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
    imageUrl: 'https://via.placeholder.com/800x400?text=Monteverde',
  },
  {
    id: '2',
    title: 'Relax en Playa Manuel Antonio',
    location: 'Manuel Antonio',
    rating: 4.7,
    reviewsCount: 98,
    pricePerPerson: 120,
    durationHours: 8,
    imageUrl: 'https://via.placeholder.com/800x400?text=Manuel+Antonio',
  },
];

export default function TourDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const tour = mockTours.find((t) => t.id === id);

  if (!tour) {
    return (
      <div className="p-4">
        <Header title="Tour" showBack />
        <div className="mt-6 text-center">Tour no encontrado</div>
      </div>
    );
  }

  return (
    <div className="p-0 pb-24">
      <Header title={tour.title} showBack />

      <div className="p-4">
        <div className="w-full h-56 bg-gray-200 rounded overflow-hidden mb-4">
          <img src={tour.imageUrl} alt={tour.title} className="object-cover w-full h-full" />
        </div>

        <h2 className="text-lg font-semibold">{tour.title}</h2>
        <p className="text-sm text-gray-500">{tour.location} • ⭐ {tour.rating} ({tour.reviewsCount})</p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Precio por persona</div>
            <div className="text-xl font-semibold text-teal-600">${tour.pricePerPerson}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Duración</div>
            <div className="text-sm font-medium">{tour.durationHours} horas</div>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-700">Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <div className="mt-6">
          <button onClick={() => alert('Reservar ahora (mock)')} className="w-full py-3 bg-orange-500 text-white rounded">Reservar ahora</button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tour } from '../types';

export default function TourCard({ tour }: { tour: Tour }) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/tour/${tour.id}`)}
      className="w-full bg-white rounded-lg shadow p-3 cursor-pointer"
    >
      <div className="w-full h-40 bg-gray-200 rounded overflow-hidden mb-2">
        <img src={tour.imageUrl} alt={tour.title} className="object-cover w-full h-full" />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold">{tour.title}</h3>
          <p className="text-xs text-gray-500">{tour.location}</p>
          <div className="flex items-center gap-2 text-xs mt-1">
            <span>⭐ {tour.rating.toFixed(1)}</span>
            <span className="text-muted">({tour.reviewsCount})</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-teal-600">${tour.pricePerPerson}</div>
          <div className="text-xs text-gray-500">{tour.durationHours}h</div>
        </div>
      </div>
    </article>
  );
}

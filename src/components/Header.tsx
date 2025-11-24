import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header({ title, showBack = false }: { title: string; showBack?: boolean }) {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white border-b py-3 px-4 flex items-center justify-center relative">
      {showBack && (
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-xl"
          aria-label="back"
        >
          ←
        </button>
      )}
      <h1 className="text-lg font-semibold">{title}</h1>
    </header>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  const navClass = (isActive: boolean) =>
    `flex flex-col items-center justify-center gap-1 py-2 px-3 ${isActive ? 'text-teal-600' : 'text-gray-500'}`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner z-40">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          <NavLink to="/" className={({ isActive }: { isActive: boolean }) => navClass(isActive)}>
            <span className="text-2xl">🏠</span>
            <span className="text-xs">Inicio</span>
          </NavLink>

          <NavLink to="/tours" className={({ isActive }: { isActive: boolean }) => navClass(isActive)}>
            <span className="text-2xl">🔍</span>
            <span className="text-xs">Tours</span>
          </NavLink>

          <NavLink to="/messages" className={({ isActive }: { isActive: boolean }) => navClass(isActive)}>
            <span className="text-2xl">💬</span>
            <span className="text-xs">Mensajes</span>
          </NavLink>

          <NavLink to="/profile" className={({ isActive }: { isActive: boolean }) => navClass(isActive)}>
            <span className="text-2xl">👤</span>
            <span className="text-xs">Perfil</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

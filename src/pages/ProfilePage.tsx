import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="p-4 pb-24">
      <Header title="Perfil" />

      <div className="mt-4">
        <div className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">👤</div>
          <div>
            <div className="font-semibold">Leandro Sánchez</div>
            <div className="text-xs text-gray-500">leandro@example.com</div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <button onClick={() => navigate('/activity')} className="w-full text-left p-3 bg-white rounded shadow-sm">Mi actividad</button>
          <button className="w-full text-left p-3 bg-white rounded shadow-sm">Métodos de pago</button>
          <button className="w-full text-left p-3 bg-white rounded shadow-sm">Configuración</button>
          <button className="w-full text-left p-3 bg-white rounded shadow-sm text-red-600">Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
}

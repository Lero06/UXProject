import { useState } from 'react';

interface ProfileProps {
  onNavigate?: (page: 'payment-methods' | 'favorites' | 'settings' | 'recent-activity') => void;
}

export function Profile({ onNavigate }: ProfileProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const user = {
    name: 'Leandro Sanchez Rojas',
    email: 'lleandrosanch@gmail.com',
    memberSince: 'Enero 2024',
    bookings: 5,
    reviews: 3,
  };

  const bookingHistory = [
    {
      id: 1,
      title: 'Tour Volcán Arenal',
      date: '15 Nov 2025',
      status: 'Completado',
      price: 85,
    },
    {
      id: 2,
      title: 'Canopy Monteverde',
      date: '28 Nov 2025',
      status: 'Próximo',
      price: 75,
    },
  ];

  const menuItems = [
    {
      id: 'pago',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path
            fillRule="evenodd"
            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      label: 'Pago',
      description: 'Métodos de pago',
    },
    {
      id: 'favoritos',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      label: 'Favoritos',
      description: 'Tours guardados',
    },
    {
      id: 'configuracion',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      label: 'Configuración',
      description: 'Ajustes de la cuenta',
    },
    {
      id: 'recientes',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      label: 'Recientes',
      description: 'Acciones recientes',
    },
  ];

  return (
    <div className="pg-page">
      {/* Header */}
      <header className="pg-header" style={{ background: '#0f766e' }}>
        <div className="pg-container">
          <h1 className="pg-section-title" style={{ color: '#fff' }}>Perfil</h1>
        </div>
      </header>

      <div className="pg-container">
        {/* User Card placed outside header */}
        <div style={{ background: '#fff', borderRadius: 14, padding: 14, marginTop: 12, marginBottom: 20, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 8px 30px rgba(2,6,23,0.06)' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <div className="pg-avatar-circle" style={{ width: 64, height: 64, fontSize: 20, background: 'linear-gradient(135deg,#0f766e,#06b6d4)', color: '#fff' }}>{user.name.charAt(0)}</div>
            <div style={{ flex: 1 }}>
              <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{user.name}</h2>
              <p style={{ color: '#6b7280', margin: '6px 0 0 0' }}>{user.email}</p>
              <p style={{ color: '#9ca3af', margin: '6px 0 0 0', fontSize: 12 }}>Miembro desde {user.memberSince}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 18, justifyContent: 'center' }}>
          <div className="pg-stat-card" style={{ width: 160, textAlign: 'center' }}>
            <div style={{ color: 'var(--pg-teal)', fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{user.bookings}</div>
            <div style={{ color: '#6b7280', fontSize: 12 }}>Reservas</div>
          </div>
          <div className="pg-stat-card" style={{ width: 160, textAlign: 'center' }}>
            <div style={{ color: '#06b6d4', fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{user.reviews}</div>
            <div style={{ color: '#6b7280', fontSize: 12 }}>Reseñas</div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="pg-card" style={{ padding: 0, overflow: 'hidden', marginBottom: 18, maxWidth: 420, marginLeft: 'auto', marginRight: 'auto', border: 'none', boxShadow: '0 8px 30px rgba(2,6,23,0.04)' }}>
          {menuItems.map((item, i) => (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (item.id === 'pago') {
                    onNavigate?.('payment-methods');
                  } else if (item.id === 'favoritos') {
                    onNavigate?.('favorites');
                  } else if (item.id === 'configuracion') {
                    onNavigate?.('settings');
                  } else if (item.id === 'recientes') {
                    onNavigate?.('recent-activity');
                  } else {
                    setActiveMenu(activeMenu === item.id ? null : item.id);
                  }
                }}
                style={{ width: '100%', padding: 16, textAlign: 'left', border: 'none', background: 'transparent', display: 'block' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 52, height: 52, background: 'linear-gradient(90deg,rgba(15,118,110,0.06),rgba(6,182,212,0.06))', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pg-teal)' }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: 0, color: '#111827', fontSize: 15 }}>{item.label}</h3>
                    <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>{item.description}</p>
                  </div>
                  <svg
                    className={`pg-icon-sm`} 
                    style={{ color: '#9ca3af', transform: activeMenu === item.id ? 'rotate(90deg)' : 'none', transition: 'transform .18s ease' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                {activeMenu === item.id && (
                  <div style={{ marginTop: 12, paddingLeft: 68, paddingRight: 16, fontSize: 13, color: '#6b7280' }}>
                    <p>Contenido de {item.label}</p>
                  </div>
                )}
              </button>
              {/* subtle separator (very light) */}
              {i < menuItems.length - 1 && <div style={{ height: 1, background: 'rgba(15,118,110,0.03)' }} />}
            </div>
          ))}
        </div>

        {/* Booking History */}
        <div className="pg-card" style={{ padding: 16, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
          <h3 style={{ color: '#111827', marginBottom: 12 }}>Historial de Reservas</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {bookingHistory.map((booking) => (
              <div
                key={booking.id}
                style={{ padding: 12, borderRadius: 12, border: '1px solid rgba(15,118,110,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff' }}
              >
                <div>
                  <h4 style={{ margin: 0, color: '#111827' }}>{booking.title}</h4>
                  <div style={{ color: '#6b7280', fontSize: 13 }}>{booking.date}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: booking.status === 'Completado' ? '#059669' : 'var(--pg-teal)', background: booking.status === 'Completado' ? 'rgba(5,150,105,0.08)' : 'rgba(15,118,110,0.06)', padding: '6px 10px', borderRadius: 999 }}>{booking.status}</span>
                  </div>
                  <div style={{ color: 'var(--pg-teal)', fontWeight: 700 }}>${booking.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
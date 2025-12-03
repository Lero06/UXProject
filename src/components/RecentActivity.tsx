interface RecentActivityProps {
  onBack: () => void;
}

export function RecentActivity({ onBack }: RecentActivityProps) {
  const activities = [
    {
      id: 1,
      type: 'booking',
      title: 'Reserva confirmada',
      description: 'Canopy Tour Monteverde',
      date: '19 Nov 2025, 2:30 PM',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      color: 'green',
    },
    {
      id: 2,
      type: 'favorite',
      title: 'Tour agregado a favoritos',
      description: 'Tour Volcán Arenal',
      date: '18 Nov 2025, 5:15 PM',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      ),
      color: 'red',
    },
    {
      id: 3,
      type: 'review',
      title: 'Reseña publicada',
      description: 'Valoraste "Playas del Caribe" con 5 estrellas',
      date: '17 Nov 2025, 10:20 AM',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      color: 'amber',
    },
    {
      id: 4,
      type: 'search',
      title: 'Búsqueda realizada',
      description: 'Tours en Guanacaste, 2-4 horas',
      date: '16 Nov 2025, 3:45 PM',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      ),
      color: 'cyan',
    },
    {
      id: 5,
      type: 'payment',
      title: 'Método de pago agregado',
      description: 'Tarjeta •••• 4242',
      date: '15 Nov 2025, 11:00 AM',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
        </svg>
      ),
      color: 'purple',
    },
    {
      id: 6,
      type: 'login',
      title: 'Inicio de sesión',
      description: 'Dispositivo: iPhone 14 Pro',
      date: '14 Nov 2025, 8:30 AM',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
        </svg>
      ),
      color: 'teal',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; icon: string; border: string }> = {
      green: { bg: 'bg-green-100', icon: 'text-green-600', border: 'border-green-200' },
      red: { bg: 'bg-red-100', icon: 'text-red-600', border: 'border-red-200' },
      amber: { bg: 'bg-amber-100', icon: 'text-amber-600', border: 'border-amber-200' },
      teal: { bg: 'bg-teal-100', icon: 'text-teal-600', border: 'border-teal-200' },
      purple: { bg: 'bg-purple-100', icon: 'text-purple-600', border: 'border-purple-200' },
      cyan: { bg: 'bg-cyan-100', icon: 'text-cyan-600', border: 'border-cyan-200' },
    };
    return colors[color] || colors.teal;
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#E0F2F1' }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#0f766e',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <button onClick={onBack} style={{ padding: '8px', background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div style={{ flex: 1, textAlign: 'center', marginRight: '40px' }}>
          <h1 style={{ color: 'white', fontSize: '20px', fontWeight: '600', margin: 0 }}>Actividad Reciente</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', margin: 0 }}>Últimas acciones en tu cuenta</p>
        </div>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', overflowX: 'auto', paddingBottom: '8px' }}>
          <button style={{
            padding: '10px 20px',
            backgroundColor: '#0f766e',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Todo
          </button>
          <button style={{
            padding: '10px 20px',
            backgroundColor: 'white',
            color: '#6B7280',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}>
            Reservas
          </button>
          <button style={{
            padding: '10px 20px',
            backgroundColor: 'white',
            color: '#6B7280',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}>
            Favoritos
          </button>
          <button style={{
            padding: '10px 20px',
            backgroundColor: 'white',
            color: '#6B7280',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}>
            Reseñas
          </button>
        </div>

        {/* Activity Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {activities.map((activity, index) => {
            const colors = getColorClasses(activity.color);
            return (
              <div key={activity.id} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '16px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: activity.color === 'green' ? '#D1FAE5' :
                                    activity.color === 'red' ? '#FEE2E2' :
                                    activity.color === 'amber' ? '#FEF3C7' :
                                    activity.color === 'cyan' ? '#CFFAFE' :
                                    activity.color === 'purple' ? '#F3E8FF' :
                                    '#CCFBF1',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <div style={{
                      color: activity.color === 'green' ? '#059669' :
                             activity.color === 'red' ? '#DC2626' :
                             activity.color === 'amber' ? '#D97706' :
                             activity.color === 'cyan' ? '#0891B2' :
                             activity.color === 'purple' ? '#9333EA' :
                             '#0f766e'
                    }}>
                      {activity.icon}
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600', margin: 0, marginBottom: '4px' }}>
                      {activity.title}
                    </h3>
                    <p style={{ color: '#6B7280', fontSize: '14px', margin: 0, marginBottom: '8px' }}>
                      {activity.description}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#9CA3AF', fontSize: '12px' }}>
                      <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{activity.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More */}
        <button style={{
          width: '100%',
          marginTop: '16px',
          padding: '14px',
          backgroundColor: 'white',
          color: '#6B7280',
          border: '1px solid #E5E7EB',
          borderRadius: '10px',
          fontSize: '15px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}>
          Cargar más actividad
        </button>
      </div>
    </div>
  );
}
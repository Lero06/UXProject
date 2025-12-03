interface FavoritesProps {
  onBack: () => void;
  onTourSelect?: (tourId: number) => void;
}

export function Favorites({ onBack, onTourSelect }: FavoritesProps) {
  const favoriteTours = [
    {
      id: 1,
      title: 'Tour Volcán Arenal',
      location: 'La Fortuna, Alajuela',
      price: 75,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1664532869454-53ac5942d959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjB2b2xjYW5vfGVufDF8fHx8MTc2MzUxNzYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      savedDate: 'Hace 2 días',
    },
    {
      id: 4,
      title: 'Canopy Tour Monteverde',
      location: 'Monteverde',
      price: 65,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1728572322143-bb19895b4678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6aXBsaW5lJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc2MzQ4MDU2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      savedDate: 'Hace 1 semana',
    },
    {
      id: 7,
      title: 'Parque Nacional Manuel Antonio',
      location: 'Quepos, Puntarenas',
      price: 35,
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1626060451577-8b90a394e355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjBiZWFjaHxlbnwxfHx8fDE3NjM1MTc1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      savedDate: 'Hace 2 semanas',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#E0F2F1' }}>
      <header style={{ background: '#0f766e', padding: '16px 20px', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', maxWidth: '600px', margin: '0 auto' }}>
          <button
            onClick={onBack}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              padding: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Favoritos</h1>
            <p style={{ margin: 0, fontSize: '13px', opacity: 0.9 }}>{favoriteTours.length} {favoriteTours.length === 1 ? 'tour guardado' : 'tours guardados'}</p>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '24px 20px' }}>
        {favoriteTours.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {favoriteTours.map((tour) => (
              <div
                key={tour.id}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'relative', height: '180px' }}>
                  <img src={tour.image} alt={tour.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <button style={{ position: 'absolute', top: '12px', right: '12px', width: '40px', height: '40px', background: 'rgba(255,255,255,0.95)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <svg style={{ width: '24px', height: '24px', color: '#EF4444' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </button>
                </div>
                <div style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ margin: '0 0 4px 0', color: '#1F2937', fontSize: '16px', fontWeight: '600' }}>{tour.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6B7280', fontSize: '13px', marginBottom: '8px' }}>
                        <svg style={{ width: '16px', height: '16px', color: '#0f766e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{tour.location}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#FEF3C7', padding: '4px 8px', borderRadius: '6px' }}>
                      <svg style={{ width: '16px', height: '16px', color: '#F59E0B' }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span style={{ color: '#374151', fontSize: '14px', fontWeight: '500' }}>{tour.rating}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #E5E7EB', marginTop: '8px' }}>
                    <div>
                      <span style={{ color: '#0f766e', fontSize: '20px', fontWeight: '700' }}>${tour.price}</span>
                      <span style={{ color: '#6B7280', fontSize: '13px' }}> /persona</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#9CA3AF', fontSize: '12px' }}>{tour.savedDate}</span>
                      <button
                        onClick={() => onTourSelect && onTourSelect(tour.id)}
                        style={{
                          padding: '8px 16px',
                          background: '#0f766e',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}
                      >
                        Ver
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-gray-800 mb-2">No tienes favoritos</h3>
            <p className="text-gray-500 text-sm text-center">
              Guarda tus tours favoritos para acceder a ellos fácilmente
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

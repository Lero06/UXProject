import { TourCarousel } from './TourCarousel';
import { CostaRicaIcon } from './CostaRicaIcon';

interface HomeProps {
  onTourSelect: (tourId: number) => void;
  onShowLogin?: () => void;
  isLoggedIn?: boolean;
  onLogin?: () => void;
  onRegister?: () => void;
}

const offers = [
  {
    id: 1,
    title: 'Tour Volcán Arenal',
    location: 'La Fortuna, Alajuela',
    price: 75,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1664532869454-53ac5942d959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjB2b2xjYW5vfGVufDF8fHx8MTc2MzUxNzYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
  },
  {
    id: 2,
    title: 'Aventura en Monteverde',
    location: 'Monteverde, Puntarenas',
    price: 95,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1698871741610-11e817f934e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjByYWluZm9yZXN0fGVufDF8fHx8MTc2MzUxNzYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
  },
  {
    id: 3,
    title: 'Playas del Caribe',
    location: 'Puerto Viejo, Limón',
    price: 55,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1626060451577-8b90a394e355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjBiZWFjaHxlbnwxfHx8fDE3NjM1MTc1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
  },
];

const popularByBookings = [
  {
    id: 4,
    title: 'Canopy Tour Monteverde',
    location: 'Monteverde',
    bookings: 1250,
    image: 'https://images.unsplash.com/photo-1728572322143-bb19895b4678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6aXBsaW5lJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc2MzQ4MDU2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    price: 65,
    rating: 4.9,
  },
  {
    id: 5,
    title: 'Safari Wildlife',
    location: 'Tortuguero',
    bookings: 980,
    image: 'https://images.unsplash.com/photo-1673008981368-b307e728e8cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjB3aWxkbGlmZXxlbnwxfHx8fDE3NjM1MTc2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 85,
    rating: 4.8,
  },
  {
    id: 6,
    title: 'Surf en Tamarindo',
    location: 'Tamarindo, Guanacaste',
    bookings: 875,
    image: 'https://images.unsplash.com/photo-1719009481087-2440d1e317d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJmaW5nJTIwY29zdGElMjByaWNhfGVufDF8fHx8MTc2MzUxNzYwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    price: 45,
    rating: 4.7,
  },
];

const popularByReviews = [
  {
    id: 7,
    title: 'Parque Nacional Manuel Antonio',
    location: 'Quepos, Puntarenas',
    reviews: 2340,
    image: 'https://images.unsplash.com/photo-1626060451577-8b90a394e355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjBiZWFjaHxlbnwxfHx8fDE3NjM1MTc1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 35,
    rating: 5.0,
  },
  {
    id: 8,
    title: 'Tour Nocturno Selvático',
    location: 'La Fortuna',
    reviews: 1890,
    image: 'https://images.unsplash.com/photo-1698871741610-11e817f934e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjByYWluZm9yZXN0fGVufDF8fHx8MTc2MzUxNzYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    price: 55,
    rating: 4.9,
  },
  {
    id: 9,
    title: 'Buceo en Isla del Coco',
    location: 'Isla del Coco',
    reviews: 1654,
    image: 'https://images.unsplash.com/photo-1673008981368-b307e728e8cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjB3aWxkbGlmZXxlbnwxfHx8fDE3NjM1MTc2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 195,
    rating: 4.9,
  },
];

export function Home({ onTourSelect, onShowLogin, isLoggedIn }: HomeProps) {

  return (
    <div className="pg-page">
      {/* Header */}
      <header className="pg-header">
        <div className="pg-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 44, height: 44 }}>
              <div style={{ width: '100%', height: '100%', background: 'rgba(255,255,255,0.12)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CostaRicaIcon className="pg-icon" />
              </div>
            </div>
            <div>
              <h1 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>Pura Guía</h1>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 12, margin: 0 }}>Descubre Costa Rica</p>
            </div>
          </div>
          {!isLoggedIn && onShowLogin && (
            <button onClick={() => onShowLogin && onShowLogin()} className="pg-button">
              Ingresar
            </button>
          )}
        </div>
      </header>

      <div className="pg-container" style={{ paddingTop: 8, paddingBottom: 24 }}>
        {/* Ofertas y Descuentos */}
        <section>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <h2 className="pg-section-title">Ofertas y Descuentos</h2>
            <button className="pg-link-button">Ver todo →</button>
          </div>
          <TourCarousel tours={offers} onTourSelect={onTourSelect} showDiscount />
        </section>

        {/* Tours Populares - Por Reservas */}
        <section>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div>
              <h2 className="pg-section-title">Tours Populares</h2>
              <p style={{ color: '#6b7280', fontSize: 13, marginTop: 4 }}>Más reservados</p>
            </div>
            <button className="pg-link-button">Ver todo →</button>
          </div>
          <TourCarousel tours={popularByBookings} onTourSelect={onTourSelect} showBookings />
        </section>

        {/* Tours Populares - Por Reseñas */}
        <section>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div>
              <h2 className="pg-section-title">Mejor Valorados</h2>
              <p style={{ color: '#6b7280', fontSize: 13, marginTop: 4 }}>Según las reseñas</p>
            </div>
            <button className="pg-link-button">Ver todo →</button>
          </div>
          <TourCarousel tours={popularByReviews} onTourSelect={onTourSelect} showReviews />
        </section>
      </div>
      
    </div>
  );
}
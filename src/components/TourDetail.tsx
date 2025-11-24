import { useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TourDetailProps {
  tourId: number | null;
  onBack: () => void;
  onBooking: () => void;
}

const tourData: Record<number, any> = {
  1: {
    title: 'Tour Volcán Arenal & Aguas Termales',
    location: 'La Fortuna, Alajuela',
    price: 75,
    rating: 4.9,
    reviews: 342,
    guide: {
      name: 'Carlos Rodríguez',
      languages: ['Español', 'Inglés', 'Francés'],
      avatar: 'CR',
    },
    images: [
      'https://images.unsplash.com/photo-1664532869454-53ac5942d959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjB2b2xjYW5vfGVufDF8fHx8MTc2MzUxNzYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1612452816734-05a1ea3da9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjB3YXRlcmZhbGx8ZW58MXx8fHwxNzYzNTIwOTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1562030757-ba49fec50e2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzYzNTIwOTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    duration: '8 horas',
    details: {
      lugar: 'La Fortuna de San Carlos, Alajuela',
      idiomas: 'Español, Inglés, Francés',
      duracion: '8 horas (9:00 AM - 5:00 PM)',
      cuidados: 'Llevar ropa cómoda, protector solar, repelente de insectos',
    },
    description:
      'Descubre la majestuosidad del Volcán Arenal, uno de los volcanes más activos de Costa Rica. Incluye visita a aguas termales naturales, almuerzo típico y transporte.',
    included: [
      'Transporte ida y vuelta',
      'Almuerzo típico costarricense',
      'Entrada a aguas termales',
      'Guía bilingüe certificado',
    ],
    userReviews: [
      {
        id: 1,
        name: 'María González',
        rating: 5,
        date: '15 Nov 2025',
        comment: '¡Experiencia inolvidable! El volcán es impresionante y las aguas termales muy relajantes.',
        avatar: 'MG',
      },
      {
        id: 2,
        name: 'John Smith',
        rating: 5,
        date: '10 Nov 2025',
        comment: 'Amazing tour! Carlos was very knowledgeable and the hot springs were perfect.',
        avatar: 'JS',
      },
      {
        id: 3,
        name: 'Ana Pérez',
        rating: 4,
        date: '5 Nov 2025',
        comment: 'Muy buen tour, solo que el almuerzo podría mejorar. El resto excelente.',
        avatar: 'AP',
      },
    ],
  },
  // Puedes agregar más tours aquí
};

export function TourDetail({ tourId, onBack, onBooking }: TourDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const tour = tourId ? tourData[tourId] || tourData[1] : tourData[1];

  const scrollImages = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const newIndex =
        direction === 'left'
          ? Math.max(0, currentImageIndex - 1)
          : Math.min(tour.images.length - 1, currentImageIndex + 1);
      setCurrentImageIndex(newIndex);
      scrollRef.current.scrollTo({
        left: newIndex * scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#14B8A6' }}>
      {/* Header with Back Button */}
      <div style={{ background: '#14B8A6', padding: '20px', position: 'relative' }}>
        <button
          onClick={onBack}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            padding: '8px 0'
          }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>{tour.title}</span>
        </button>
      </div>

      <div style={{ background: 'white', borderRadius: '0', minHeight: 'calc(100vh - 64px)' }}>
        {/* Image Carousel */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          <div
            ref={scrollRef}
            style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tour.images.map((image: string, index: number) => (
              <div key={index} style={{ width: '100%', flexShrink: 0, scrollSnapAlign: 'start' }}>
                <ImageWithFallback
                  src={image}
                  alt={`${tour.title} - Imagen ${index + 1}`}
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>

          {/* Image Navigation */}
          {tour.images.length > 1 && (
            <>
              <button
                onClick={() => scrollImages('left')}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: currentImageIndex === 0 ? 'not-allowed' : 'pointer',
                  opacity: currentImageIndex === 0 ? 0.5 : 1
                }}
                disabled={currentImageIndex === 0}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollImages('right')}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: currentImageIndex === tour.images.length - 1 ? 'not-allowed' : 'pointer',
                  opacity: currentImageIndex === tour.images.length - 1 ? 0.5 : 1
                }}
                disabled={currentImageIndex === tour.images.length - 1}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
                {tour.images.map((_: any, index: number) => (
                  <div
                    key={index}
                    style={{
                      width: index === currentImageIndex ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: index === currentImageIndex ? 'white' : 'rgba(255,255,255,0.5)',
                      transition: 'all 0.3s'
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Guide Info */}
        <div style={{ padding: '24px', borderBottom: '1px solid #E5E7EB', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '600' }}>
                {tour.guide.avatar}
              </div>
              <div>
                <h3 style={{ color: '#1F2937', margin: 0, fontSize: '16px', fontWeight: '600' }}>{tour.guide.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                  <svg style={{ color: '#FCD34D' }} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span style={{ color: '#374151', fontSize: '14px' }}>{tour.rating}</span>
                  <span style={{ color: '#6B7280', fontSize: '13px' }}>({tour.reviews} reseñas)</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#14B8A6', fontSize: '28px', fontWeight: '700' }}>${tour.price}</div>
              <div style={{ color: '#6B7280', fontSize: '13px' }}>/persona</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {tour.guide.languages.map((lang: string) => (
              <span
                key={lang}
                style={{ padding: '6px 12px', background: '#CFFAFE', color: '#0891B2', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Tour Info */}
        <div style={{ padding: '24px', borderBottom: '1px solid #E5E7EB', maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ color: '#1F2937', marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Info del Tour</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <svg style={{ color: '#14B8A6', flexShrink: 0 }} width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div>
                <div style={{ color: '#6B7280', fontSize: '13px', marginBottom: '4px' }}>Lugar</div>
                <div style={{ color: '#1F2937', fontSize: '14px' }}>{tour.details.lugar}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <svg style={{ color: '#14B8A6', flexShrink: 0 }} width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
              </svg>
              <div>
                <div style={{ color: '#6B7280', fontSize: '13px', marginBottom: '4px' }}>Idiomas</div>
                <div style={{ color: '#1F2937', fontSize: '14px' }}>{tour.details.idiomas}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <svg style={{ color: '#14B8A6', flexShrink: 0 }} width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <div>
                <div style={{ color: '#6B7280', fontSize: '13px', marginBottom: '4px' }}>Duración</div>
                <div style={{ color: '#1F2937', fontSize: '14px' }}>{tour.details.duracion}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <svg style={{ color: '#14B8A6', flexShrink: 0 }} width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <div style={{ color: '#6B7280', fontSize: '13px', marginBottom: '4px' }}>Cuidados</div>
                <div style={{ color: '#1F2937', fontSize: '14px' }}>{tour.details.cuidados}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div style={{ padding: '24px 24px 120px', maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ color: '#1F2937', marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Reseñas ({tour.userReviews.length})</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {tour.userReviews.map((review: any) => (
              <div key={review.id} style={{ padding: '16px', background: '#F9FAFB', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '600', flexShrink: 0 }}>
                    {review.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                      <h4 style={{ color: '#1F2937', fontSize: '15px', fontWeight: '600', margin: 0 }}>{review.name}</h4>
                      <div style={{ display: 'flex', gap: '2px' }}>
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} style={{ color: '#FCD34D' }} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p style={{ color: '#6B7280', fontSize: '12px', margin: 0 }}>{review.date}</p>
                  </div>
                </div>
                <p style={{ color: '#374151', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'white', borderTop: '1px solid #E5E7EB', padding: '16px 20px', zIndex: 10 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <button
            onClick={onBooking}
            style={{
              width: '100%',
              padding: '14px 24px',
              background: '#14B8A6',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(20,184,166,0.3)'
            }}
          >
            Reservar ahora
          </button>
        </div>
      </div>
    </div>
  );
}
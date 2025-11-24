import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Tour {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  discount?: number;
  reviews?: number;
  bookings?: number;
}

interface TourCarouselProps {
  tours: Tour[];
  onTourSelect: (tourId: number) => void;
  showDiscount?: boolean;
  showBookings?: boolean;
  showReviews?: boolean;
}

export function TourCarousel({
  tours,
  onTourSelect,
  showDiscount,
  showBookings,
  showReviews,
}: TourCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const clamped = Math.max(0, Math.min(index, tours.length - 1));
    const children = Array.from(el.children) as HTMLElement[];
    const child = children[clamped];
    if (!child) return;
    // center the child inside the scroll container
    const targetLeft = child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2;
    el.scrollTo({ left: targetLeft, behavior: 'smooth' });
    setCurrentIndex(clamped);
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < tours.length - 1;

  const scroll = (direction: 'left' | 'right') => {
    scrollToIndex(direction === 'left' ? currentIndex - 1 : currentIndex + 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (!el) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const center = el.scrollLeft + el.clientWidth / 2;
          const children = Array.from(el.children) as HTMLElement[];
          let nearest = 0;
          let minDist = Infinity;
          children.forEach((c, i) => {
            const cCenter = c.offsetLeft + c.offsetWidth / 2;
            const dist = Math.abs(cCenter - center);
            if (dist < minDist) {
              minDist = dist;
              nearest = i;
            }
          });
          setCurrentIndex(Math.max(0, Math.min(nearest, tours.length - 1)));
          ticking = false;
        });
        ticking = true;
      }
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [tours.length]);

  // Ensure the carousel starts centered on the first item and stays centered on resize
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // center after layout (images may affect sizes)
    const id = window.setTimeout(() => scrollToIndex(0), 60);
    const onResize = () => scrollToIndex(currentIndex);
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(id);
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tours.length]);

  return (
    <div>
      {/* Carousel */}
      <div className="pg-carousel">
        {/* Scroll Buttons - placed inside the carousel so they sit over the tours */}
        {tours.length > 1 && (
          <>
            <button
              onClick={() => scroll('left')}
              className={`pg-scroll-btn left ${!canScrollLeft ? 'disabled' : ''}`}
              aria-label="Anterior"
            >
              <svg className="pg-icon" width="22" height="22" fill="none" stroke="var(--pg-teal-dark)" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => scroll('right')}
              className={`pg-scroll-btn right ${!canScrollRight ? 'disabled' : ''}`}
              aria-label="Siguiente"
            >
              <svg className="pg-icon" width="22" height="22" fill="none" stroke="var(--pg-teal-dark)" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        <div
          ref={scrollRef}
          className="pg-carousel-track"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tours.map((tour) => (
            <div
              key={tour.id}
              onClick={() => onTourSelect(tour.id)}
              className="pg-card"
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <ImageWithFallback
                  src={tour.image}
                  alt={tour.title}
                  className="pg-card-img"
                />
                {showDiscount && tour.discount && (
                  <div className="pg-badge">-{tour.discount}%</div>
                )}
                <div className="pg-rating-badge">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" style={{ color: '#f59e0b' }}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span style={{ marginLeft: 6 }}>{tour.rating}</span>
                </div>
                {showBookings && tour.bookings && (
                  <div style={{ position: 'absolute', bottom: 12, left: 12, background: 'var(--pg-teal)', color: '#fff', padding: '6px 10px', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                    <span>{tour.bookings}</span>
                  </div>
                )}
                {showReviews && tour.reviews && (
                  <div style={{ position: 'absolute', bottom: 12, left: 12, background: '#06b6d4', color: '#fff', padding: '6px 10px', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" /></svg>
                    <span>{tour.reviews}</span>
                  </div>
                )}
              </div>
              <div className="pg-card-body">
                <h3 style={{ color: '#111827', marginBottom: 6, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tour.title}</h3>
                <p style={{ color: '#6b7280', fontSize: 13, marginBottom: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tour.location}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    {showDiscount && tour.discount ? (
                      <>
                        <span style={{ color: '#9ca3af', textDecoration: 'line-through', fontSize: 13, marginRight: 8 }}>${tour.price}</span>
                        <span style={{ color: 'var(--pg-teal)', fontSize: 20, fontWeight: 600 }}>${Math.round(tour.price * (1 - tour.discount / 100))}</span>
                      </>
                    ) : (
                      <span style={{ color: 'var(--pg-teal)', fontSize: 20, fontWeight: 600 }}>${tour.price}</span>
                    )}
                    <span style={{ color: '#6b7280', fontSize: 13 }}> /persona</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators centered below the track */}
        {tours.length > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12 }}>
            {tours.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir a ${i + 1}`}
                style={{
                  width: i === currentIndex ? 28 : 8,
                  height: 8,
                  borderRadius: 8,
                  background: i === currentIndex ? 'var(--pg-teal)' : 'rgba(15,118,110,0.12)',
                  border: 'none',
                  transition: 'width .18s ease, background .18s ease',
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
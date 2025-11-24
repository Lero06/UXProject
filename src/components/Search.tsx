import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SearchProps {
  onTourSelect: (tourId: number) => void;
}

const provinces = [
  'Todas las provincias',
  'San José',
  'Alajuela',
  'Cartago',
  'Heredia',
  'Guanacaste',
  'Puntarenas',
  'Limón',
];

const categories = [
  { id: 'cerca', label: 'Cerca', icon: '' },
  { id: 'avistamiento', label: 'Avistamiento', icon: '' },
  { id: 'familiar', label: 'Familiar', icon: '' },
  { id: 'aventura', label: 'Aventura', icon: '' },
];

const durations = [
  { id: 'paseo', label: 'Paseo', time: '2-3h' },
  { id: 'recreo', label: 'Recreo', time: '4-5h' },
  { id: 'corto', label: 'Corto', time: '6-7h' },
  { id: 'largo', label: 'Largo', time: '8-10h' },
  { id: 'multiple', label: 'Múltiple', time: '+1 día' },
];

const searchResults = [
  {
    id: 1,
    title: 'Tour Volcán Arenal & Aguas Termales',
    location: 'La Fortuna, Alajuela',
    category: 'aventura',
    duration: 'largo',
    price: 85,
    rating: 4.9,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1664532869454-53ac5942d959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjB2b2xjYW5vfGVufDF8fHx8MTc2MzUxNzYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Safari Wildlife Tortuguero',
    location: 'Tortuguero, Limón',
    category: 'avistamiento',
    duration: 'multiple',
    price: 195,
    rating: 4.8,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1673008981368-b307e728e8cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjB3aWxkbGlmZXxlbnwxfHx8fDE3NjM1MTc2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Playa Manuel Antonio & Snorkeling',
    location: 'Manuel Antonio, Puntarenas',
    category: 'familiar',
    duration: 'corto',
    price: 65,
    rating: 4.9,
    reviews: 521,
    image: 'https://images.unsplash.com/photo-1626060451577-8b90a394e355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjBiZWFjaHxlbnwxfHx8fDE3NjM1MTc1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Canopy Tour Monteverde',
    location: 'Monteverde, Puntarenas',
    category: 'aventura',
    duration: 'recreo',
    price: 75,
    rating: 5.0,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1728572322143-bb19895b4678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6aXBsaW5lJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc2MzQ4MDU2MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    title: 'Tour del Café & Plantaciones',
    location: 'Naranjo, Alajuela',
    category: 'familiar',
    duration: 'paseo',
    price: 35,
    rating: 4.7,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1698871741610-11e817f934e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3N0YSUyMHJpY2ElMjByYWluZm9yZXN0fGVufDF8fHx8MTc2MzUxNzYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    title: 'Clases de Surf en Tamarindo',
    location: 'Tamarindo, Guanacaste',
    category: 'aventura',
    duration: 'recreo',
    price: 55,
    rating: 4.8,
    reviews: 298,
    image: 'https://images.unsplash.com/photo-1719009481087-2440d1e317d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJmaW5nJTIwY29zdGElMjByaWNhfGVufDF8fHx8MTc2MzUxNzYwMXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Search({ onTourSelect }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('Todas las provincias');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleDuration = (durationId: string) => {
    setSelectedDurations((prev) =>
      prev.includes(durationId)
        ? prev.filter((id) => id !== durationId)
        : [...prev, durationId]
    );
  };

  const filteredResults = searchResults.filter((result) => {
    const matchesSearch =
      searchQuery === '' ||
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(result.category);

    const matchesDuration =
      selectedDurations.length === 0 || selectedDurations.includes(result.duration);

    return matchesSearch && matchesCategory && matchesDuration;
  });

  return (
    <div className="pg-page">
      {/* Header */}
      <header className="pg-header">
        <div className="pg-container">
          <div className="pg-header-row">
            <h1 className="pg-header-title">Buscar Tours</h1>
          </div>
        </div>
      </header>

      {/* Search pill placed above the header bar visually */}
      <div className="pg-search-overlap">
        <div className="pg-container">
          <div className="pg-search-card">
            <div style={{ position: 'relative' }}>
              <input
                className="pg-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar tours, actividades, destinos..."
              />
              <svg className="pg-icon pg-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="pg-container">
        {/* Province Selector */}
          <div style={{ marginBottom: 10 }}>
          <label style={{ color: '#374151', marginBottom: 8, display: 'block' }}>Seleccionar provincia</label>
          <select
            className="pg-select"
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
          >
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filters */}
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <label style={{ color: '#374151', marginBottom: 8, display: 'block' }}>Categorías</label>
          <div className="pg-filter-grid">
            {categories.map((filter) => {
              const active = selectedCategories.includes(filter.id);
              return (
                <button
                  key={filter.id}
                  onClick={() => toggleCategory(filter.id)}
                  className={`pg-chip ${active ? 'active' : ''}`}
                >
                  <span className="pg-chip-icon">{filter.icon}</span>
                  <span className="pg-chip-label">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Duration Filters */}
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <label style={{ color: '#374151', marginBottom: 8, display: 'block' }}>Duración</label>
          <div className="pg-duration-grid">
            {durations.map((filter) => {
              const active = selectedDurations.includes(filter.id);
              return (
                <button
                  key={filter.id}
                  onClick={() => toggleDuration(filter.id)}
                  className={`pg-chip duration ${active ? 'active' : ''}`}
                >
                  <div className="pg-chip-label">{filter.time}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filters Summary */}
        {(selectedCategories.length > 0 || selectedDurations.length > 0) && (
          <div className="pg-active-filters">
            <span className="pg-active-filters-label">Filtros activos:</span>
            <div className="pg-active-filters-list">
              {selectedCategories.map((catId) => {
                const cat = categories.find((f) => f.id === catId);
                return (
                  <span key={catId} className="pg-active-chip">{cat?.label} <button onClick={() => toggleCategory(catId)}>✕</button></span>
                );
              })}
              {selectedDurations.map((durId) => {
                const dur = durations.find((f) => f.id === durId);
                return (
                  <span key={durId} className="pg-active-chip">{dur?.time} <button onClick={() => toggleDuration(durId)}>✕</button></span>
                );
              })}
            </div>
            <button onClick={() => { setSelectedCategories([]); setSelectedDurations([]); }} className="pg-clear-btn">Limpiar todo</button>
          </div>
        )}

        {/* Results Count */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
          <p style={{ color: '#6b7280' }}>
            {filteredResults.length} {filteredResults.length === 1 ? 'resultado' : 'resultados'}
          </p>
          <select style={{ padding: '8px 12px', borderRadius: 10, border: '1px solid rgba(107,114,128,0.2)', outline: 'none' }}>
            <option>Más relevante</option>
            <option>Precio: menor a mayor</option>
            <option>Precio: mayor a menor</option>
            <option>Mejor valorados</option>
          </select>
        </div>

        {/* Search Results */}
        <div className="pg-result-list">
          {filteredResults.map((result) => (
            <div key={result.id} onClick={() => onTourSelect(result.id)} className="pg-result-card">
              <div className="pg-result-thumb">
                <ImageWithFallback src={result.image} alt={result.title} className="pg-card-img" />
                <div className="pg-result-rating"><svg className="pg-icon-sm" width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span>{result.rating}</span>
                </div>
              </div>
              <div className="pg-result-body">
                <h3 className="pg-result-title">{result.title}</h3>
                <p className="pg-result-location">{result.location}</p>
                <div className="pg-result-meta">
                  <div className="pg-result-reviews">{result.reviews} reseñas</div>
                  <div className="pg-result-price"><span>${result.price}</span> <span className="pg-result-per">/p</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredResults.length === 0 && (
          <div className="text-center py-16">
            <svg
              className="w-24 h-24 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-gray-600 text-xl mb-2">No se encontraron resultados</h3>
            <p className="text-gray-500">
              Intenta ajustar los filtros o buscar algo diferente
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
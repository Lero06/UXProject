import { useState } from 'react';
import { CostaRicaIcon } from './CostaRicaIcon';

interface TouristRegisterProps {
  onBack: () => void;
  onSuccess: () => void;
}

export function TouristRegister({ onBack, onSuccess }: TouristRegisterProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    country: '',
    interests: [] as string[],
  });

  const interests = [
    'Aventura',
    'Naturaleza',
    'Playa',
    'Cultura',
    'Gastronomía',
    'Fotografía',
  ];

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de registro
    onSuccess();
  };

  return (
    <div className="pg-login-hero">
      {/* Back Button */}
      <button
        onClick={onBack}
        style={{
          position: 'absolute',
          top: '24px',
          left: '24px',
          background: 'rgba(255,255,255,0.3)',
          border: 'none',
          borderRadius: '12px',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'white',
          fontSize: '20px',
          fontWeight: 'bold',
          backdropFilter: 'blur(10px)'
        }}
      >
        ←
      </button>

      <div style={{ maxWidth: '480px', width: '100%', margin: '0 auto', padding: '20px' }}>
        {/* Logo and Title */}
        <div className="pg-login-brand">
          <div className="pg-login-brand-icon">
            <CostaRicaIcon className="pg-icon" />
          </div>
          <h1 className="pg-login-brand-title">Registro de Turista</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', margin: '8px 0 0 0' }}>Crea tu cuenta y comienza a explorar</p>
        </div>

        {/* Registration Form Card */}
        <div className="pg-login-card">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Name */}
            <div>
              <label htmlFor="name" style={{ display: 'block', color: '#374151', marginBottom: '8px', fontSize: '14px' }}>
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="pg-login-input"
                placeholder="Leandro Sanchez Rojas"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" style={{ display: 'block', color: '#374151', marginBottom: '8px', fontSize: '14px' }}>
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pg-login-input"
                placeholder="lleandrosanch@gmail.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" style={{ display: 'block', color: '#374151', marginBottom: '8px', fontSize: '14px' }}>
                Teléfono
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="pg-login-input"
                placeholder="+506 1234-5678"
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" style={{ display: 'block', color: '#374151', marginBottom: '8px', fontSize: '14px' }}>
                País
              </label>
              <select
                id="country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="pg-login-input"
                style={{ cursor: 'pointer' }}
              >
                <option value="">Selecciona tu país</option>
                <option value="CR">Costa Rica</option>
                <option value="US">Estados Unidos</option>
                <option value="CA">Canadá</option>
                <option value="MX">México</option>
                <option value="ES">España</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="other">Otro</option>
              </select>
            </div>

            {/* Interests */}
            <div>
              <label style={{ display: 'block', color: '#374151', marginBottom: '8px', fontSize: '14px' }}>
                Intereses (selecciona al menos uno)
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: formData.interests.includes(interest) ? '2px solid #14B8A6' : '2px solid #D1D5DB',
                      background: formData.interests.includes(interest) ? '#14B8A6' : 'white',
                      color: formData.interests.includes(interest) ? 'white' : '#374151',
                      fontSize: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      fontWeight: '500'
                    }}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" style={{ display: 'block', color: '#374151', marginBottom: '8px', fontSize: '14px' }}>
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="pg-login-input"
                placeholder="••••••••"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" style={{ display: 'block', color: '#374151', marginBottom: '8px', fontSize: '14px' }}>
                Confirmar contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="pg-login-input"
                placeholder="••••••••"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="pg-login-primary">
              Crear cuenta
            </button>

            {/* Back Link */}
            <button type="button" onClick={onBack} className="pg-login-outline">
              Volver
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { CostaRicaIcon } from './CostaRicaIcon';

interface GuideRegisterProps {
  onBack: () => void;
  onSuccess: () => void;
}

const languages = ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugués', 'Mandarín'];
const locations = ['San José', 'Alajuela', 'Cartago', 'Heredia', 'Guanacaste', 'Puntarenas', 'Limón'];

export function GuideRegister({ onBack, onSuccess }: GuideRegisterProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    selectedLanguages: [] as string[],
    selectedLocations: [] as string[],
    profileImage: null as File | null,
  });

  const [certificates, setCertificates] = useState<File[]>([]);

  const toggleLanguage = (language: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedLanguages: prev.selectedLanguages.includes(language)
        ? prev.selectedLanguages.filter((l) => l !== language)
        : [...prev.selectedLanguages, language],
    }));
  };

  const toggleLocation = (location: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedLocations: prev.selectedLocations.includes(location)
        ? prev.selectedLocations.filter((l) => l !== location)
        : [...prev.selectedLocations, location],
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCertificates([...certificates, ...Array.from(e.target.files)]);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, profileImage: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
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

      <div style={{ maxWidth: '600px', width: '100%', margin: '0 auto', padding: '20px' }}>
        {/* Logo and Title */}
        <div className="pg-login-brand">
          <div className="pg-login-brand-icon">
            <CostaRicaIcon className="pg-icon" />
          </div>
          <h1 className="pg-login-brand-title">Registro de Guía</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', margin: '8px 0 0 0' }}>Completa tu perfil para comenzar a ofrecer tours</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Profile Image */}
          <div className="pg-login-card">
            <label style={{ display: 'block', color: '#374151', marginBottom: '16px', textAlign: 'center', fontSize: '16px', fontWeight: '600' }}>Foto de Perfil</label>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #A5F3FC 0%, #14B8A6 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                {formData.profileImage ? (
                  <img
                    src={URL.createObjectURL(formData.profileImage)}
                    alt="Profile"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <svg style={{ width: '64px', height: '64px', color: '#22D3EE' }} fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <label style={{ padding: '10px 24px', background: '#0891B2', color: 'white', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 2px 8px rgba(8,145,178,0.3)', fontSize: '14px', fontWeight: '500', transition: 'all 0.2s' }}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
                {formData.profileImage ? 'Cambiar foto' : 'Subir foto'}
              </label>
            </div>
          </div>

          {/* Basic Info */}
          <div className="pg-login-card">
            <h3 style={{ color: '#1F2937', marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Información Básica</h3>
            
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="name" style={{ display: 'block', color: '#374151', marginBottom: '8px', fontSize: '14px' }}>
                Nombre Completo
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="pg-login-input"
                placeholder="Leandro Sanchez Rojas"
                required
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="email" style={{ display: 'block', color: '#374151', marginBottom: '8px', fontSize: '14px' }}>
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pg-login-input"
                placeholder="juan@email.com"
                required
              />
            </div>

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
                placeholder="+506 8888-8888"
                required
              />
            </div>

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
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" style={{ display: 'block', color: '#374151', marginBottom: '8px', fontSize: '14px' }}>
                Confirmar contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="pg-login-input"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Languages */}
          <div className="pg-login-card">
            <h3 style={{ color: '#1F2937', marginBottom: '8px', fontSize: '16px', fontWeight: '600' }}>Idiomas</h3>
            <p style={{ color: '#6B7280', fontSize: '13px', marginBottom: '16px' }}>Seleccione múltiple</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {languages.map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() => toggleLanguage(language)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: formData.selectedLanguages.includes(language) ? '2px solid #0891B2' : '2px solid #D1D5DB',
                    background: formData.selectedLanguages.includes(language) ? '#0891B2' : 'white',
                    color: formData.selectedLanguages.includes(language) ? 'white' : '#374151',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontWeight: '500'
                  }}
                >
                  {language}
                </button>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="pg-login-card">
            <h3 style={{ color: '#1F2937', marginBottom: '8px', fontSize: '16px', fontWeight: '600' }}>Ubicaciones</h3>
            <p style={{ color: '#6B7280', fontSize: '13px', marginBottom: '16px' }}>Seleccione múltiple</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {locations.map((location) => (
                <button
                  key={location}
                  type="button"
                  onClick={() => toggleLocation(location)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: formData.selectedLocations.includes(location) ? '2px solid #14B8A6' : '2px solid #D1D5DB',
                    background: formData.selectedLocations.includes(location) ? '#14B8A6' : 'white',
                    color: formData.selectedLocations.includes(location) ? 'white' : '#374151',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontWeight: '500'
                  }}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="pg-login-card">
            <h3 style={{ color: '#1F2937', marginBottom: '8px', fontSize: '16px', fontWeight: '600' }}>Certificaciones</h3>
            <p style={{ color: '#6B7280', fontSize: '13px', marginBottom: '16px' }}>
              Sube tus certificados y credenciales
            </p>
            
            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '16px 24px', border: '2px dashed #D1D5DB', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.2s' }}>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                multiple
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
              <svg style={{ width: '24px', height: '24px', color: '#0891B2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span style={{ color: '#374151', fontSize: '14px', fontWeight: '500' }}>Upload File</span>
            </label>

            {certificates.length > 0 && (
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {certificates.map((file, index) => (
                  <div
                    key={index}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: '#ECFEFF', borderRadius: '10px' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg style={{ width: '20px', height: '20px', color: '#0891B2' }} fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span style={{ fontSize: '14px', color: '#374151', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCertificates(certificates.filter((_, i) => i !== index))}
                      style={{ color: '#DC2626', cursor: 'pointer', background: 'none', border: 'none' }}
                    >
                      <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            <button
              type="button"
              onClick={onBack}
              className="pg-login-outline"
              style={{ flex: 1 }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="pg-login-primary"
              style={{ flex: 1, background: 'linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)' }}
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
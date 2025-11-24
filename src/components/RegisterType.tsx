import { CostaRicaIcon } from './CostaRicaIcon';

interface RegisterTypeProps {
  onSelectType: (type: 'tourist' | 'guide') => void;
  onBack: () => void;
}

export function RegisterType({ onSelectType, onBack }: RegisterTypeProps) {
  return (
    <div className="pg-page pg-login-hero">
      <div className="pg-container" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
        {/* Logo and title above the options */}
        <div className="pg-login-brand" style={{ marginBottom: 32 }}>
          <div className="pg-login-brand-icon">
            <CostaRicaIcon className="pg-icon" />
          </div>
          <div className="pg-login-title">
            <h1>Pura Guía</h1>
            <p>¿Cómo deseas registrarte?</p>
          </div>
        </div>

        {/* Registration Type Cards */}
        <div style={{ width: '100%', maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Tourist Registration */}
          <button
            onClick={() => onSelectType('tourist')}
            style={{
              width: '100%',
              background: '#fff',
              borderRadius: 16,
              padding: 20,
              border: 'none',
              boxShadow: '0 10px 30px rgba(2,6,23,0.08)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 14px 40px rgba(2,6,23,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(2,6,23,0.08)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: 'linear-gradient(135deg,#0f766e,#06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg width="24" height="24" fill="none" stroke="#fff" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: '#374151' }}>Turista</h2>
            </div>
            <svg width="20" height="20" fill="none" stroke="var(--pg-teal)" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Guide Registration */}
          <button
            onClick={() => onSelectType('guide')}
            style={{
              width: '100%',
              background: '#fff',
              borderRadius: 16,
              padding: 20,
              border: 'none',
              boxShadow: '0 10px 30px rgba(2,6,23,0.08)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 14px 40px rgba(2,6,23,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(2,6,23,0.08)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: 'linear-gradient(135deg,#0f766e,#06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg width="24" height="24" fill="none" stroke="#fff" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: '#374151' }}>Guía</h2>
            </div>
            <svg width="20" height="20" fill="none" stroke="var(--pg-teal)" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          style={{
            marginTop: 24,
            background: 'transparent',
            border: 'none',
            color: '#6b7280',
            fontSize: 14,
            cursor: 'pointer',
            padding: '12px 0'
          }}
        >
          ← Volver al inicio de sesión
        </button>
      </div>
    </div>
  );
}
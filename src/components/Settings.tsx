import { useState } from 'react';

interface SettingsProps {
  onBack: () => void;
}

export function Settings({ onBack }: SettingsProps) {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    offers: false,
  });

  const [language, setLanguage] = useState('es');
  const [currency, setCurrency] = useState('USD');

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
        <h1 style={{ color: 'white', fontSize: '20px', fontWeight: '600', flex: 1, margin: 0, textAlign: 'center', marginRight: '40px' }}>Configuración</h1>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Account Settings */}
        <section style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <div style={{ backgroundColor: '#0f766e', padding: '12px 16px' }}>
            <h2 style={{ color: 'white', fontSize: '16px', fontWeight: '600', margin: 0 }}>Cuenta</h2>
          </div>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button style={{
              width: '100%',
              padding: '14px 16px',
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <span style={{ color: '#1F2937', fontSize: '15px' }}>Editar Perfil</span>
              <div style={{ backgroundColor: '#0f766e', borderRadius: '8px', padding: '8px', display: 'flex' }}>
                <svg style={{ width: '20px', height: '20px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </button>
            <button style={{
              width: '100%',
              padding: '14px 16px',
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <span style={{ color: '#1F2937', fontSize: '15px' }}>Cambiar Contraseña</span>
              <div style={{ backgroundColor: '#0f766e', borderRadius: '8px', padding: '8px', display: 'flex' }}>
                <svg style={{ width: '20px', height: '20px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1721 9z" />
                </svg>
              </div>
            </button>
          </div>
        </section>

        {/* Notifications */}
        <section style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <div style={{ backgroundColor: '#0f766e', padding: '12px 16px' }}>
            <h2 style={{ color: 'white', fontSize: '16px', fontWeight: '600', margin: 0 }}>Notificaciones</h2>
          </div>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: '#1F2937', fontSize: '15px', margin: 0 }}>Email</p>
                <p style={{ color: '#6B7280', fontSize: '13px', margin: 0 }}>Recibir notificaciones por correo</p>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, email: !notifications.email })}
                style={{
                  width: '56px',
                  height: '32px',
                  borderRadius: '16px',
                  backgroundColor: notifications.email ? '#0f766e' : '#D1D5DB',
                  position: 'relative',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    position: 'absolute',
                    top: '4px',
                    left: notifications.email ? '28px' : '4px',
                    transition: 'all 0.2s'
                  }}
                />
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: '#1F2937', fontSize: '15px', margin: 0 }}>Push</p>
                <p style={{ color: '#6B7280', fontSize: '13px', margin: 0 }}>Notificaciones push en tu dispositivo</p>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, push: !notifications.push })}
                style={{
                  width: '56px',
                  height: '32px',
                  borderRadius: '16px',
                  backgroundColor: notifications.push ? '#0f766e' : '#D1D5DB',
                  position: 'relative',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    position: 'absolute',
                    top: '4px',
                    left: notifications.push ? '28px' : '4px',
                    transition: 'all 0.2s'
                  }}
                />
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: '#1F2937', fontSize: '15px', margin: 0 }}>Ofertas</p>
                <p style={{ color: '#6B7280', fontSize: '13px', margin: 0 }}>Ofertas y promociones especiales</p>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, offers: !notifications.offers })}
                style={{
                  width: '56px',
                  height: '32px',
                  borderRadius: '16px',
                  backgroundColor: notifications.offers ? '#0f766e' : '#D1D5DB',
                  position: 'relative',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    position: 'absolute',
                    top: '4px',
                    left: notifications.offers ? '28px' : '4px',
                    transition: 'all 0.2s'
                  }}
                />
              </button>
            </div>
          </div>
        </section>

        {/* Preferences */}
        <section style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <div style={{ backgroundColor: '#0f766e', padding: '12px 16px' }}>
            <h2 style={{ color: 'white', fontSize: '16px', fontWeight: '600' }}>Preferencias</h2>
          </div>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', color: '#1F2937', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Idioma</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="pg-login-input"
                style={{ cursor: 'pointer' }}
              >
                <option value="es">Español</option>
                <option value="en">English</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', color: '#1F2937', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Moneda</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="pg-login-input"
                style={{ cursor: 'pointer' }}
              >
                <option value="USD">USD ($)</option>
                <option value="CRC">CRC (₡)</option>
                <option value="EUR">EUR (€)</option>
              </select>
            </div>
          </div>
        </section>

        {/* Privacy & Security */}
        <section style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <div style={{ backgroundColor: '#0f766e', padding: '12px 16px' }}>
            <h2 style={{ color: 'white', fontSize: '16px', fontWeight: '600' }}>Privacidad y Seguridad</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button style={{
              width: '100%',
              padding: '16px',
              backgroundColor: 'white',
              border: 'none',
              borderBottom: '1px solid #F3F4F6',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <span style={{ color: '#1F2937', fontSize: '15px' }}>Política de Privacidad</span>
              <svg style={{ width: '20px', height: '20px', color: '#9CA3AF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button style={{
              width: '100%',
              padding: '16px',
              backgroundColor: 'white',
              border: 'none',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <span style={{ color: '#1F2937', fontSize: '15px' }}>Términos y Condiciones</span>
              <svg style={{ width: '20px', height: '20px', color: '#9CA3AF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Danger Zone */}
        <section style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden', border: '2px solid #FEE2E2' }}>
          <div style={{ backgroundColor: '#FEF2F2', padding: '12px 16px', borderBottom: '1px solid #FEE2E2' }}>
            <h2 style={{ color: '#991B1B', fontSize: '16px', fontWeight: '600' }}>Zona de Peligro</h2>
          </div>
          <div style={{ padding: '16px' }}>
            <button style={{
              width: '100%',
              padding: '14px 16px',
              backgroundColor: '#DC2626',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}>
              Eliminar Cuenta
            </button>
            <p style={{ color: '#6B7280', fontSize: '12px', marginTop: '8px', textAlign: 'center' }}>
              Esta acción es permanente y no se puede deshacer
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
import { useState } from 'react';

interface PaymentMethodsProps {
  onBack: () => void;
}

export function PaymentMethods({ onBack }: PaymentMethodsProps) {
  const [cards] = useState([
    {
      id: 1,
      type: 'visa',
      lastFour: '4242',
      expiry: '12/25',
      isDefault: true,
    },
    {
      id: 2,
      type: 'mastercard',
      lastFour: '8888',
      expiry: '08/26',
      isDefault: false,
    },
  ]);

  const [showAddCard, setShowAddCard] = useState(false);

  const getCardIcon = (type: string) => {
    if (type === 'visa') {
      return (
        <div style={{ width: '48px', height: '32px', background: '#1E40AF', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '600' }}>
          VISA
        </div>
      );
    }
    return (
      <div style={{ width: '48px', height: '32px', background: '#DC2626', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '600' }}>
        MC
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: '#E0F2F1' }}>
      <header style={{ background: '#14B8A6', padding: '16px 20px', color: 'white' }}>
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
          <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Métodos de Pago</h1>
        </div>
      </header>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '24px 20px' }}>
        {/* Saved Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                {getCardIcon(card.type)}
                {card.isDefault && (
                  <span style={{ padding: '4px 12px', background: '#D1FAE5', color: '#065F46', borderRadius: '20px', fontSize: '12px', fontWeight: '500' }}>
                    Predeterminada
                  </span>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ margin: 0, color: '#1F2937', fontSize: '15px', marginBottom: '4px' }}>•••• •••• •••• {card.lastFour}</p>
                  <p style={{ margin: 0, color: '#6B7280', fontSize: '13px' }}>Vence {card.expiry}</p>
                </div>
                <button style={{ padding: '8px', color: '#9CA3AF', background: 'transparent', border: 'none', cursor: 'pointer' }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Card Button */}
        {!showAddCard ? (
          <button
            onClick={() => setShowAddCard(true)}
            style={{
              width: '100%',
              background: '#14B8A6',
              color: 'white',
              padding: '14px 24px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '15px',
              fontWeight: '600',
              boxShadow: '0 2px 8px rgba(20,184,166,0.3)'
            }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Agregar Nueva Tarjeta
          </button>
        ) : (
          <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <h3 style={{ margin: '0 0 20px 0', color: '#1F2937', fontSize: '16px', fontWeight: '600' }}>Nueva Tarjeta</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', color: '#374151', marginBottom: '8px', fontSize: '13px' }}>Número de Tarjeta</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="pg-login-input"
                  style={{ fontSize: '14px' }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', color: '#374151', marginBottom: '8px', fontSize: '13px', whiteSpace: 'nowrap' }}>Vencimiento</label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="pg-login-input"
                    style={{ fontSize: '14px' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#374151', marginBottom: '8px', fontSize: '13px' }}>CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="pg-login-input"
                    style={{ fontSize: '14px' }}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', color: '#374151', marginBottom: '8px', fontSize: '13px' }}>Nombre en la Tarjeta</label>
                <input
                  type="text"
                  placeholder="NOMBRE APELLIDO"
                  className="pg-login-input"
                  style={{ fontSize: '14px' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <button
                  type="button"
                  onClick={() => setShowAddCard(false)}
                  className="pg-login-outline"
                  style={{ flex: 1 }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="pg-login-primary"
                  style={{ flex: 1 }}
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Info */}
        <div style={{ marginTop: '24px', background: '#E0F2F1', border: '1px solid #99F6E4', borderRadius: '10px', padding: '16px' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <svg style={{ width: '20px', height: '20px', color: '#14B8A6', flexShrink: 0, marginTop: '2px' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <p style={{ margin: 0, color: '#047857', fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>Seguridad de Pago</p>
              <p style={{ margin: 0, color: '#059669', fontSize: '13px', lineHeight: '1.4' }}>
                Tus datos están protegidos con encriptación de nivel bancario. No almacenamos tu CVV.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
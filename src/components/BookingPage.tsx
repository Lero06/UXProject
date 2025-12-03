import { useState } from 'react';

interface BookingPageProps {
  tourId: number | null;
  onBack: () => void;
  onConfirm: () => void;
}

const tourData: Record<number, any> = {
  1: {
    title: 'Tour Volcán Arenal & Aguas Termales',
    location: 'La Fortuna, Alajuela',
    price: 75,
    duration: '8 horas',
    guide: 'Carlos Rodríguez',
  },
};

const paymentMethods = [
  { id: 'sinpe', name: 'Sinpe', icon: '💳' },
  { id: 'tarjeta', name: 'Tarjeta', icon: '💳' },
  { id: 'paypal', name: 'PayPal', icon: '🅿️' },
];

export function BookingPage({ tourId, onBack, onConfirm }: BookingPageProps) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedPeriod, setSelectedPeriod] = useState<'AM' | 'PM'>('AM');
  const [selectedPayment, setSelectedPayment] = useState<string>('');

  const tour = tourId ? tourData[tourId] || tourData[1] : tourData[1];

  // Generate calendar days (simplified)
  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        date: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        fullDate: date.toISOString().split('T')[0],
        dayName: date.toLocaleDateString('es-ES', { weekday: 'short' }),
      });
    }
    return days;
  };

  const calendarDays = generateCalendarDays();

  const handleConfirm = () => {
    if (selectedDate && selectedTime && selectedPayment) {
      onConfirm();
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#E0F2F1', paddingBottom: '100px' }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#0f766e',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 0,
        zIndex: 10,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <button
          onClick={onBack}
          style={{ padding: '8px', background: 'transparent', border: 'none', cursor: 'pointer', position: 'absolute', left: '16px' }}
        >
          <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '20px', fontWeight: '600', margin: 0 }}>Reservar Tour</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', margin: 0 }}>{tour.title}</p>
        </div>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        {/* Date Selection */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: '#1F2937', fontSize: '16px', fontWeight: '600', marginBottom: '12px', marginTop: 0 }}>Seleccionar día</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
            {calendarDays.slice(0, 28).map((day) => (
              <button
                key={day.fullDate}
                onClick={() => setSelectedDate(day.fullDate)}
                style={{
                  aspectRatio: '1',
                  borderRadius: '8px',
                  border: selectedDate === day.fullDate ? '2px solid #0f766e' : '1px solid #E5E7EB',
                  backgroundColor: selectedDate === day.fullDate ? '#0f766e' : 'white',
                  color: selectedDate === day.fullDate ? 'white' : '#374151',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontSize: '13px',
                  padding: '4px'
                }}
              >
                <div style={{ fontSize: '10px', marginBottom: '2px' }}>{day.dayName}</div>
                <div style={{ fontSize: '14px', fontWeight: '600' }}>{day.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: '#1F2937', fontSize: '16px', fontWeight: '600', marginBottom: '12px', marginTop: 0 }}>Seleccionar hora</h3>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="pg-login-input"
                style={{ cursor: 'pointer', backgroundColor: 'white' }}
              >
                <option value="">Hora</option>
                <option value="07:00">07:00</option>
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="01:00">01:00</option>
                <option value="02:00">02:00</option>
                <option value="03:00">03:00</option>
                <option value="04:00">04:00</option>
                <option value="05:00">05:00</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setSelectedPeriod('AM')}
                style={{
                  padding: '11px 24px',
                  borderRadius: '10px',
                  border: selectedPeriod === 'AM' ? 'none' : '1px solid #E5E7EB',
                  backgroundColor: selectedPeriod === 'AM' ? '#0EA5E9' : 'white',
                  color: selectedPeriod === 'AM' ? 'white' : '#6B7280',
                  fontSize: '15px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  height: '44px'
                }}
              >
                AM
              </button>
              <button
                onClick={() => setSelectedPeriod('PM')}
                style={{
                  padding: '11px 24px',
                  borderRadius: '10px',
                  border: selectedPeriod === 'PM' ? 'none' : '1px solid #E5E7EB',
                  backgroundColor: selectedPeriod === 'PM' ? '#0EA5E9' : 'white',
                  color: selectedPeriod === 'PM' ? 'white' : '#6B7280',
                  fontSize: '15px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  height: '44px'
                }}
              >
                PM
              </button>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: '#1F2937', fontSize: '16px', fontWeight: '600', marginBottom: '12px', marginTop: 0 }}>Método de pago</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            {paymentMethods.slice(0, 2).map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedPayment(method.id)}
                style={{
                  padding: '20px',
                  borderRadius: '12px',
                  border: selectedPayment === method.id ? '2px solid #0f766e' : '1px solid #E5E7EB',
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  minHeight: '100px'
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{method.icon}</div>
                <div style={{ color: '#374151', fontSize: '14px', fontWeight: '500' }}>{method.name}</div>
              </button>
            ))}
          </div>
          <div style={{ marginTop: '12px' }}>
            <button
              onClick={() => setSelectedPayment('paypal')}
              style={{
                width: '100%',
                padding: '20px',
                borderRadius: '12px',
                border: selectedPayment === 'paypal' ? '2px solid #0f766e' : '1px solid #E5E7EB',
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                minHeight: '100px'
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>🅿️</div>
              <div style={{ color: '#374151', fontSize: '14px', fontWeight: '500' }}>PayPal</div>
            </button>
          </div>
        </div>

        {/* Booking Summary */}
        <div style={{
          backgroundColor: '#D1FAE5',
          borderRadius: '12px',
          padding: '20px',
          border: '1px solid #A7F3D0'
        }}>
          <h3 style={{ color: '#065F46', fontSize: '16px', fontWeight: '600', marginTop: 0, marginBottom: '16px' }}>Confirmar</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#047857', fontSize: '14px' }}>Día</span>
              <span style={{ color: '#065F46', fontSize: '14px', fontWeight: '500', textAlign: 'right' }}>
                {selectedDate
                  ? new Date(selectedDate).toLocaleDateString('es-ES', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })
                  : 'No seleccionado'}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#047857', fontSize: '14px' }}>Hora</span>
              <span style={{ color: '#065F46', fontSize: '14px', fontWeight: '500' }}>
                {selectedTime ? `${selectedTime} ${selectedPeriod}` : 'No seleccionada'}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#047857', fontSize: '14px' }}>Duración</span>
              <span style={{ color: '#065F46', fontSize: '14px', fontWeight: '500' }}>{tour.duration}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#047857', fontSize: '14px' }}>Guía</span>
              <span style={{ color: '#065F46', fontSize: '14px', fontWeight: '500' }}>{tour.guide}</span>
            </div>
            <div style={{
              borderTop: '1px solid #6EE7B7',
              paddingTop: '12px',
              marginTop: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ color: '#065F46', fontSize: '15px', fontWeight: '600' }}>Costo total</span>
              <span style={{ color: '#0f766e', fontSize: '24px', fontWeight: '700' }}>${tour.price}</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: '16px',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
        zIndex: 10
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <button
            onClick={handleConfirm}
            disabled={!selectedDate || !selectedTime || !selectedPayment}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#0f766e',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: (!selectedDate || !selectedTime || !selectedPayment) ? 'not-allowed' : 'pointer',
              opacity: (!selectedDate || !selectedTime || !selectedPayment) ? 0.5 : 1,
              transition: 'all 0.2s'
            }}
          >
            Confirmar Reserva
          </button>
        </div>
      </div>
    </div>
  );
}
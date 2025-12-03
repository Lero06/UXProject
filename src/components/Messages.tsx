import { useState } from 'react';

const conversations = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    avatar: 'CR',
    lastMessage: 'Perfecto! ¿A qué hora nos vemos?',
    time: 'Hace 5 min',
    unread: true,
    online: true,
  },
  {
    id: 2,
    name: 'Ana García - Guía',
    avatar: 'AG',
    lastMessage: 'El tour incluye transporte y almuerzo',
    time: 'Hace 1 hora',
    unread: true,
    online: true,
  },
  {
    id: 3,
    name: 'Tour Monteverde',
    avatar: 'TM',
    lastMessage: 'Gracias por tu reserva!',
    time: 'Ayer',
    unread: false,
    online: false,
  },
  {
    id: 4,
    name: 'María López',
    avatar: 'ML',
    lastMessage: '¿Tienen descuentos para grupos?',
    time: '2 días',
    unread: false,
    online: false,
  },
  {
    id: 5,
    name: 'Pura Vida Tours',
    avatar: 'PV',
    lastMessage: 'Tu experiencia fue confirmada ✓',
    time: '3 días',
    unread: false,
    online: false,
  },
];

export function Messages() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedConversation) {
    const conversation = conversations.find((c) => c.id === selectedConversation);
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {/* Chat Header */}
          <header style={{ background: '#0f766e', padding: '16px 20px', color: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
              <button
                onClick={() => setSelectedConversation(null)}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '600' }}>
                    {conversation?.avatar}
                  </div>
                  {conversation?.online && (
                    <div style={{ position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', background: '#10B981', border: '2px solid #0f766e', borderRadius: '50%' }}></div>
                  )}
                </div>
                <div>
                  <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>{conversation?.name}</h2>
                  <p style={{ margin: 0, fontSize: '13px', opacity: 0.9 }}>
                    {conversation?.online ? 'En línea' : 'Desconectado'}
                  </p>
                </div>
              </div>
            </div>
          </header>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', background: '#F3F4F6' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ textAlign: 'center', color: '#6B7280', fontSize: '13px', margin: '12px 0' }}>Hoy</div>
            
            {/* Received message */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <div style={{ width: '32px', height: '32px', background: '#0f766e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '13px', flexShrink: 0 }}>
                {conversation?.avatar}
              </div>
              <div style={{ flex: 1, maxWidth: '70%' }}>
                <div style={{ background: 'white', borderRadius: '16px', borderTopLeftRadius: '4px', padding: '12px 16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                  <p style={{ margin: 0, color: '#1F2937', fontSize: '14px', lineHeight: '1.5' }}>
                    Hola! Tengo una consulta sobre el tour al volcán Arenal
                  </p>
                </div>
                <p style={{ margin: '4px 0 0 12px', fontSize: '11px', color: '#6B7280' }}>10:30 AM</p>
              </div>
            </div>

            {/* Sent message */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <div style={{ maxWidth: '70%' }}>
                <div style={{ background: '#0f766e', color: 'white', borderRadius: '16px', borderTopRightRadius: '4px', padding: '12px 16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>¡Claro! ¿En qué te puedo ayudar?</p>
                </div>
                <p style={{ margin: '4px 12px 0 0', fontSize: '11px', color: '#6B7280', textAlign: 'right' }}>10:31 AM</p>
              </div>
            </div>

            {/* Received message */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <div style={{ width: '32px', height: '32px', background: '#0f766e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '13px', flexShrink: 0 }}>
                {conversation?.avatar}
              </div>
              <div style={{ flex: 1, maxWidth: '70%' }}>
                <div style={{ background: 'white', borderRadius: '16px', borderTopLeftRadius: '4px', padding: '12px 16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                  <p style={{ margin: 0, color: '#1F2937', fontSize: '14px', lineHeight: '1.5' }}>{conversation?.lastMessage}</p>
                </div>
                <p style={{ margin: '4px 0 0 12px', fontSize: '11px', color: '#6B7280' }}>10:35 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div style={{ background: 'white', borderTop: '1px solid #E5E7EB', padding: '12px 16px', paddingBottom: '100px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <button style={{ padding: '8px', color: '#0f766e', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              style={{
                flex: 1,
                padding: '10px 16px',
                borderRadius: '20px',
                border: '1px solid #D1D5DB',
                outline: 'none',
                fontSize: '14px'
              }}
            />
            <button style={{ padding: '8px', background: '#0f766e', color: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', width: '40px', height: '40px', justifyContent: 'center' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pg-page">
      {/* Header */}
      <header className="pg-header">
        <div className="pg-container">
          <h1 style={{ fontSize: 20, margin: 0 }}>Mensajes</h1>
        </div>
      </header>

      {/* Search pill outside header, centered like other pages */}
      <div className="pg-search-overlap">
        <div className="pg-container pg-centered-content">
          <div className="pg-search-card">
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar conversaciones..."
                className="pg-search-input"
              />
              <svg className="pg-icon pg-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div style={{ background: 'linear-gradient(90deg, #ffedd5, #fff7ed)', borderLeft: '4px solid #f59e0b', padding: '12px' }}>
        <div className="pg-container pg-centered-content" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg style={{ width: 16, height: 16, color: '#b45309' }} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p style={{ color: '#92400e', fontSize: 13, margin: 0 }}><strong>Recordatorio:</strong> Confirma tu reserva 24h antes del tour</p>
        </div>
      </div>

      {/* Conversations List - Full Height */}
      <div style={{ background: 'linear-gradient(180deg, rgba(6,182,212,0.08), rgba(236,249,255,0.08))' }}>
        <div className="pg-container">
          {filteredConversations.length === 0 ? (
            <div className="flex items-center justify-center h-full px-4">
              <div className="text-center">
                <svg
                  className="w-20 h-20 mx-auto text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <h3 className="text-gray-600 mb-1">No hay conversaciones</h3>
                <p className="text-gray-500 text-sm">
                  Tus mensajes aparecerán aquí
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Desktop: tile/grid view */}
              <div className="pg-messages-tiles">
                {filteredConversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className="pg-message-card"
                  >
                    <div className="pg-message-card-avatar">
                      <div className="pg-avatar-small">{conversation.avatar}</div>
                      {conversation.online && <div className="pg-avatar-online"></div>}
                    </div>
                    <div className="pg-message-card-body">
                      <div className="pg-message-card-header">
                        <h4 className="pg-message-name">{conversation.name}</h4>
                        <span className="pg-message-time">{conversation.time}</span>
                      </div>
                      <p className="pg-message-preview">{conversation.lastMessage}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Mobile: stacked list view (existing) */}
              <div className="pg-messages-list bg-white">
                {filteredConversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className="pg-message-list-item"
                  >
                    <div className="pg-message-avatar">
                      <div className="pg-avatar-circle">{conversation.avatar}</div>
                      {conversation.online && <span className="pg-avatar-online-dot" />}
                    </div>

                    <div className="pg-message-content">
                      <div className="pg-message-top">
                        <h3 className="pg-message-name">{conversation.name}</h3>
                        <span className="pg-message-time">{conversation.time}</span>
                      </div>
                      <p className="pg-message-preview">{conversation.lastMessage}</p>
                    </div>

                    <div className="pg-message-right">
                      {conversation.unread && <span className="pg-unread-dot" />}
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom Navigation Spacer */}
      <div className="h-20 flex-shrink-0 bg-white"></div>
    </div>
  );
}
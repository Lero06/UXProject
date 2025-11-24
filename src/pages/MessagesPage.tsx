import React from 'react';
import Header from '../components/Header';
import MessagePreview from '../components/MessagePreview';
import { Message } from '../types';

const mockMessages: Message[] = [
  { id: 'm1', guideName: 'Carlos', lastMessage: 'Hola! Todavía hay disponibilidad?', timeAgo: '2h', unreadCount: 1 },
  { id: 'm2', guideName: 'Ana', lastMessage: 'Perfecto, nos vemos mañana.', timeAgo: '1d' },
];

export default function MessagesPage() {
  return (
    <div className="p-4 pb-24">
      <Header title="Mensajes" />

      <div className="mt-4 space-y-3">
        {mockMessages.length === 0 ? (
          <div className="text-center text-gray-500">Aún no tienes mensajes con guías.</div>
        ) : (
          mockMessages.map((m) => <MessagePreview key={m.id} message={m} />)
        )}
      </div>
    </div>
  );
}

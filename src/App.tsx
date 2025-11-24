import { useState } from 'react';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Search } from './components/Search';
import { Profile } from './components/Profile';
import { Messages } from './components/Messages';
import { RegisterType } from './components/RegisterType';
import { TouristRegister } from './components/TouristRegister';
import { GuideRegister } from './components/GuideRegister';
import { TourDetail } from './components/TourDetail';
import { BookingPage } from './components/BookingPage';
import { PaymentMethods } from './components/PaymentMethods';
import { Favorites } from './components/Favorites';
import { Settings } from './components/Settings';
import { RecentActivity } from './components/RecentActivity';

type Page = 'login' | 'home' | 'search' | 'profile' | 'messages' | 'register-type' | 'register-tourist' | 'register-guide' | 'tour-detail' | 'booking' | 'payment-methods' | 'favorites' | 'settings' | 'recent-activity';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<number | null>(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleRegisterType = () => {
    setCurrentPage('register-type');
  };

  const handleShowLogin = () => {
    setCurrentPage('login');
  };

  const handleTourSelect = (tourId: number) => {
    setSelectedTourId(tourId);
    setCurrentPage('tour-detail');
  };

  const handleBooking = () => {
    setCurrentPage('booking');
  };

  const renderPage = () => {
    if (currentPage === 'login') {
      return <Login onLogin={handleLogin} onRegister={handleRegisterType} onBack={() => setCurrentPage('home')} />;
    }

    if (currentPage === 'register-type') {
      return (
        <RegisterType
          onSelectType={(type) => {
            if (type === 'tourist') {
              setCurrentPage('register-tourist');
            } else {
              setCurrentPage('register-guide');
            }
          }}
          onBack={() => setCurrentPage('login')}
        />
      );
    }

    if (currentPage === 'register-tourist') {
      return <TouristRegister onBack={() => setCurrentPage('register-type')} onSuccess={handleLogin} />;
    }

    if (currentPage === 'register-guide') {
      return <GuideRegister onBack={() => setCurrentPage('register-type')} onSuccess={handleLogin} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home onTourSelect={handleTourSelect} onShowLogin={handleShowLogin} isLoggedIn={isLoggedIn} onLogin={handleLogin} onRegister={handleRegisterType} />;
      case 'search':
        return <Search onTourSelect={handleTourSelect} />;
      case 'messages':
        return <Messages />;
      case 'profile':
        return <Profile onNavigate={(page) => setCurrentPage(page)} />;
      case 'tour-detail':
        return (
          <TourDetail
            tourId={selectedTourId}
            onBack={() => setCurrentPage('home')}
            onBooking={handleBooking}
          />
        );
      case 'booking':
        return (
          <BookingPage
            tourId={selectedTourId}
            onBack={() => setCurrentPage('tour-detail')}
            onConfirm={() => {
              setCurrentPage('home');
              // Aquí podrías mostrar un mensaje de confirmación
            }}
          />
        );
      case 'payment-methods':
        return <PaymentMethods onBack={() => setCurrentPage('profile')} />;
      case 'favorites':
        return <Favorites onBack={() => setCurrentPage('profile')} onTourSelect={handleTourSelect} />;
      case 'settings':
        return <Settings onBack={() => setCurrentPage('profile')} />;
      case 'recent-activity':
        return <RecentActivity onBack={() => setCurrentPage('profile')} />;
      default:
        return <Home onTourSelect={handleTourSelect} onShowLogin={handleShowLogin} isLoggedIn={isLoggedIn} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50">
      {renderPage()}
      
      {currentPage !== 'login' && currentPage !== 'register-type' && currentPage !== 'register-tourist' && currentPage !== 'register-guide' && currentPage !== 'tour-detail' && currentPage !== 'booking' && currentPage !== 'payment-methods' && currentPage !== 'favorites' && currentPage !== 'settings' && currentPage !== 'recent-activity' && (
        <div className="pg-bottom-nav">
          <div className="pg-bottom-nav-inner">
            <button onClick={() => setCurrentPage('home')} className={`pg-bottom-nav-btn ${currentPage === 'home' ? 'active' : ''}`}>
              <svg className="pg-icon" width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Inicio</span>
            </button>

            <button onClick={() => setCurrentPage('search')} className={`pg-bottom-nav-btn ${currentPage === 'search' ? 'active' : ''}`}>
              <svg className="pg-icon" width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Buscar</span>
            </button>

            <button onClick={() => setCurrentPage('messages')} className={`pg-bottom-nav-btn ${currentPage === 'messages' ? 'active' : ''}`}>
              <div style={{ position: 'relative' }}>
                <svg className="pg-icon" width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <div style={{ position: 'absolute', top: -6, right: -6, width: 10, height: 10, background: '#ef4444', borderRadius: 999 }} />
              </div>
              <span>Mensajes</span>
            </button>

            <button onClick={() => setCurrentPage('profile')} className={`pg-bottom-nav-btn ${currentPage === 'profile' ? 'active' : ''}`}>
              <svg className="pg-icon" width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Perfil</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
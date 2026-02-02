
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Dashboard from './components/Dashboard';
import CalendarView from './components/Calendar';
import MessagesView from './components/Messages';
import HomeworkView from './components/Homework';
import AssignmentView from './components/AssignmentView';
import SettingsView from './components/Settings';
import DesignSystem from './components/DesignSystem';
import WhatsAppDemo from './components/WhatsAppDemo';
import ActivityView from './components/ActivityView';
import LessonsView from './components/Lessons';
import AITutor from './components/AITutor';
import RecitalsView from './components/Recitals';
import FinancialView from './components/Financial';
import CommunityView from './components/Community';
import DiscoverView from './components/Discover';
import LiveSession from './components/LiveSession';
import LoginScreen from './components/LoginScreen';
import StudioView from './components/Studio';
import ShowcaseView from './components/Showcase';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState<Page>('dashboard');
  const [activeStudent, setActiveStudent] = useState('Enzo');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePageChange = (page: Page) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePage(page);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const navItems: { id: Page; label: string; icon: string; highlight?: boolean }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-table-columns' },
    { id: 'lessons', label: 'Aulas', icon: 'fa-person-chalkboard' },
    { id: 'homework', label: 'Treino', icon: 'fa-music' },
    { id: 'assignment', label: 'Tarefas', icon: 'fa-list-check' },
    { id: 'messages', label: 'Mensagens', icon: 'fa-comment-dots' },
    { id: 'activity', label: 'Atividade', icon: 'fa-chart-line' },
    { id: 'studio', label: 'Estúdio', icon: 'fa-clapperboard' },
    { id: 'showcase', label: 'Projeto', icon: 'fa-presentation-screen', highlight: true },
  ];

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard': return <Dashboard student={activeStudent} onNavigate={handlePageChange} onStudentChange={setActiveStudent} />;
      case 'live-session': return <LiveSession student={activeStudent} />;
      case 'studio': return <StudioView student={activeStudent} />;
      case 'lessons': return <LessonsView student={activeStudent} />;
      case 'calendar': return <CalendarView />;
      case 'messages': return <MessagesView />;
      case 'homework': return <HomeworkView student={activeStudent} />;
      case 'assignment': return <AssignmentView student={activeStudent} />;
      case 'activity': return <ActivityView student={activeStudent} />;
      case 'recitals': return <RecitalsView student={activeStudent} />;
      case 'ai-tutor': return <AITutor student={activeStudent} />;
      case 'discover': return <DiscoverView />;
      case 'financial': return <FinancialView student={activeStudent} />;
      case 'community': return <CommunityView />;
      case 'showcase': return <ShowcaseView />;
      case 'settings': return <SettingsView />;
      case 'design-system': return <DesignSystem />;
      case 'whatsapp': return <WhatsAppDemo />;
      default: return <Dashboard student={activeStudent} onNavigate={handlePageChange} onStudentChange={setActiveStudent} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] relative overflow-x-hidden pb-32 md:pb-40">
      <div className="absolute top-[-50px] md:top-[-100px] right-[-50px] md:right-[-100px] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FFB800]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
      
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2 md:gap-3">
          <div 
            className="w-8 h-8 md:w-10 md:h-10 bg-[#FFB800] rounded-lg flex items-center justify-center text-white shadow-lg shadow-[#FFB800]/20 transition-all hover:rotate-12 cursor-pointer active:scale-90" 
            onClick={() => handlePageChange('dashboard')}
          >
            <i className="fa-solid fa-infinity text-lg md:text-xl"></i>
          </div>
          <div className="block">
            <h1 className="text-base md:text-xl font-extrabold text-[#1A1A1A] tracking-tight leading-none">Tambor & Corda</h1>
            <p className="text-[7px] md:text-[9px] text-gray-400 font-bold tracking-widest uppercase mt-0.5">Portal da Família</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handlePageChange(item.id)}
              className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all px-4 py-2.5 rounded-2xl ${
                activePage === item.id 
                  ? 'bg-gray-900 text-white shadow-xl' 
                  : item.highlight ? 'text-[#FFB800] bg-orange-50 hover:bg-orange-100' : 'text-gray-400 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <i className={`fa-solid ${item.icon}`}></i>
              <span className="hidden xl:block">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden sm:flex flex-col items-end mr-1 md:mr-2">
            <span className="text-[8px] md:text-[9px] font-black text-gray-300 uppercase tracking-widest leading-none mb-1">Responsável</span>
            <span className="text-[10px] md:text-xs font-bold text-gray-700">Juliana Lima</span>
          </div>
          
          <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-full border border-gray-100">
            <button onClick={() => setActiveStudent('Enzo')} className={`w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden transition-all border-2 ${activeStudent === 'Enzo' ? 'border-[#FFB800] scale-110 shadow-md' : 'border-transparent grayscale'}`}><img src="https://picsum.photos/seed/enzo/100/100" alt="Enzo" /></button>
            <button onClick={() => setActiveStudent('Sophia')} className={`w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden transition-all border-2 ${activeStudent === 'Sophia' ? 'border-[#FFB800] scale-110 shadow-md' : 'border-transparent grayscale'}`}><img src="https://picsum.photos/seed/sophia/100/100" alt="Sophia" /></button>
          </div>

          <button onClick={() => handlePageChange('settings')} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-100 overflow-hidden hover:scale-110 transition-transform active:scale-95 ml-1">
            <img src="https://picsum.photos/seed/parent/100/100" alt="Usuário" />
          </button>
        </div>
      </header>

      <main className={`flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 py-6 md:py-8 relative z-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        {renderPage()}
      </main>

      <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
        <div className="bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_15px_50px_rgba(0,0,0,0.1)] md:shadow-[0_25px_80px_rgba(0,0,0,0.15)] rounded-[24px] md:rounded-[32px] p-1.5 md:p-2 flex items-center justify-between overflow-x-auto no-scrollbar gap-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handlePageChange(item.id)}
              className={`flex-shrink-0 px-3 md:px-5 py-3 md:py-4 rounded-[18px] md:rounded-[24px] text-[9px] md:text-[10px] font-black transition-all duration-300 flex items-center gap-2 ${
                activePage === item.id 
                  ? 'bg-gray-900 text-white shadow-xl scale-105' 
                  : item.highlight 
                    ? 'text-[#FFB800] bg-orange-50/50 hover:bg-orange-50' 
                    : 'text-gray-400 hover:bg-gray-100 hover:text-gray-700'
              }`}
            >
              <i className={`fa-solid ${item.icon} ${activePage === item.id ? 'text-sm md:text-base' : 'text-base'}`}></i>
              <span className={activePage === item.id ? 'block' : 'hidden lg:block'}>{item.label}</span>
            </button>
          ))}
          <div className="h-6 md:h-8 w-px bg-gray-100 mx-1 flex-shrink-0"></div>
          <button onClick={() => handlePageChange('design-system')} className={`flex-shrink-0 p-3 md:p-4 rounded-full transition-all ${activePage === 'design-system' ? 'text-[#FFB800] bg-[#FFB800]/10' : 'text-gray-300 hover:text-gray-600 hover:bg-gray-50'}`} title="Sistema de Design"><i className="fa-solid fa-swatchbook"></i></button>
          <button onClick={() => handlePageChange('whatsapp')} className={`flex-shrink-0 p-3 md:p-4 rounded-full transition-all ${activePage === 'whatsapp' ? 'text-green-500 bg-green-50' : 'text-gray-300 hover:text-gray-600 hover:bg-gray-50'}`} title="Demonstração WhatsApp"><i className="fa-brands fa-whatsapp"></i></button>
        </div>
      </div>
    </div>
  );
};

export default App;

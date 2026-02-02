
import React from 'react';
import { Page } from '../types';

interface DashboardProps {
  student: string;
  onNavigate: (page: Page) => void;
  onStudentChange: (name: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ student, onNavigate, onStudentChange }) => {
  const isEnzo = student === 'Enzo';
  
  const badges = [
    { name: '7 Dias Seguidos', icon: 'fa-fire', color: 'text-orange-500' },
    { name: 'Ouvido Absoluto', icon: 'fa-ear-listen', color: 'text-blue-500' },
    { name: 'Mestre do Ritmo', icon: 'fa-drum', color: 'text-purple-500' },
  ];

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 overflow-x-hidden max-w-6xl mx-auto">
      {/* Welcome Hero & Student Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-6">
        <div className="text-left">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-gray-900 tracking-tighter leading-tight break-words">
            Olá, Juliana! <span className="text-[#FFB800]">Música</span> é vida. 🎸
          </h2>
          <p className="text-gray-500 font-bold mt-1 md:mt-2 flex items-center gap-2 text-[10px] md:text-sm">
            <div className="w-5 h-5 md:w-8 md:h-8 rounded-lg bg-[#FFFCEB] flex items-center justify-center text-[#FFB800] shadow-inner flex-shrink-0">
              <i className="fa-solid fa-sparkles text-[8px] md:text-xs"></i>
            </div>
            Prática de hoje para {student}: {isEnzo ? 'Bateria' : 'Violão'}.
          </p>
        </div>
        
        <div className="flex bg-white p-1 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm self-start lg:self-center">
          <button 
            onClick={() => onStudentChange('Enzo')}
            className={`flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1.5 md:py-2.5 rounded-lg md:rounded-xl font-black text-[9px] md:text-xs transition-all duration-300 ${
              student === 'Enzo' ? 'bg-[#FFB800] text-white shadow-md shadow-[#FFB800]/20' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`}
          >
            <img src="https://picsum.photos/seed/enzo/100/100" className={`w-4 h-4 md:w-6 md:h-6 rounded-full ring-1 ring-white ${student !== 'Enzo' && 'grayscale opacity-50'}`} alt="Enzo" />
            Enzo
          </button>
          <button 
            onClick={() => onStudentChange('Sophia')}
            className={`flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1.5 md:py-2.5 rounded-lg md:rounded-xl font-black text-[9px] md:text-xs transition-all duration-300 ${
              student === 'Sophia' ? 'bg-[#FFB800] text-white shadow-md shadow-[#FFB800]/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`}
          >
            <img src="https://picsum.photos/seed/sophia/100/100" className={`w-4 h-4 md:w-6 md:h-6 rounded-full ring-1 ring-white ${student !== 'Sophia' && 'grayscale opacity-50'}`} alt="Sophia" />
            Sophia
          </button>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Live Session Promo Card */}
          <div className="bg-gray-900 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden group shadow-md flex flex-col justify-between min-h-[180px] md:min-h-[240px]">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-1000 pointer-events-none">
              <i className="fa-solid fa-microphone-lines text-[80px] md:text-[140px] text-[#FFB800]"></i>
            </div>
            <div className="relative z-10 space-y-3 md:space-y-4">
              <span className="px-3 py-1 bg-[#FFB800] text-white text-[7px] md:text-[9px] font-black rounded-full uppercase tracking-widest shadow-lg">LIVE</span>
              <h3 className="text-lg md:text-2xl font-black tracking-tight leading-none max-w-[200px] md:max-w-xs">Prática Assistida</h3>
              <p className="text-gray-400 text-[10px] md:text-xs font-medium leading-relaxed max-w-sm hidden sm:block">Feedback imediato do Mestre Tambor.</p>
              <button 
                onClick={() => onNavigate('live-session')}
                className="px-4 md:px-6 py-2 md:py-3 bg-white text-gray-900 rounded-lg md:rounded-xl font-black text-[8px] md:text-[10px] uppercase tracking-widest hover:bg-[#FFB800] hover:text-white transition-all flex items-center gap-2 self-start"
              >
                <i className="fa-solid fa-play"></i> INICIAR
              </button>
            </div>
          </div>

          {/* Veo Studio Promo Card */}
          <div className="bg-[#FFB800] rounded-3xl p-6 md:p-8 text-white relative overflow-hidden group shadow-md flex flex-col justify-between min-h-[180px] md:min-h-[240px]">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-1000 pointer-events-none">
              <i className="fa-solid fa-clapperboard text-[80px] md:text-[140px] text-white"></i>
            </div>
            <div className="relative z-10 space-y-3 md:space-y-4">
              <span className="px-3 py-1 bg-black/10 text-white text-[7px] md:text-[9px] font-black rounded-full uppercase tracking-widest">VEO 3.1</span>
              <h3 className="text-lg md:text-2xl font-black tracking-tight leading-none text-gray-900 max-w-[200px] md:max-w-xs">Estúdio de Vídeo</h3>
              <p className="text-gray-900/60 text-[10px] md:text-xs font-medium leading-relaxed max-w-sm hidden sm:block">Gere teasers cinematográficos.</p>
              <button 
                onClick={() => onNavigate('studio')}
                className="px-4 md:px-6 py-2 md:py-3 bg-gray-900 text-white rounded-lg md:rounded-xl font-black text-[8px] md:text-[10px] uppercase tracking-widest shadow-lg hover:scale-105 transition-all flex items-center gap-2 self-start"
              >
                <i className="fa-solid fa-wand-magic-sparkles"></i> CRIAR
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Quick Actions */}
        <div className="flex flex-col gap-4">
          <div 
            onClick={() => onNavigate('assignment')}
            className="bg-white rounded-3xl p-4 md:p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:border-[#FFB800]/40 transition-all cursor-pointer group active:scale-95 min-h-[110px] md:min-h-[135px]"
          >
             <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[7px] md:text-[8px] font-black rounded-full uppercase tracking-widest">URGENTE</span>
                <i className="fa-solid fa-clock-rotate-left text-orange-400 text-[10px] md:text-sm"></i>
             </div>
             <div>
               <h4 className="text-xs md:text-base font-black text-gray-900 leading-tight">Escalas Maiores</h4>
               <p className="text-[9px] md:text-[10px] font-bold text-gray-400">Entrega em 2 dias</p>
             </div>
          </div>

          <div 
            onClick={() => onNavigate('lessons')}
            className="bg-white rounded-3xl p-4 md:p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:border-[#FFB800]/40 transition-all cursor-pointer group active:scale-95 min-h-[110px] md:min-h-[135px]"
          >
            <div className="flex items-center justify-between mb-2">
               <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[7px] md:text-[8px] font-black rounded-full uppercase tracking-widest">AMANHÃ</span>
               <i className="fa-solid fa-bell text-[#FFB800] text-[10px] md:text-sm"></i>
            </div>
            <div>
              <h4 className="text-xs md:text-base font-black text-gray-900 leading-tight">Próxima Aula</h4>
              <p className="text-[9px] md:text-[10px] font-bold text-gray-400">16:30 • Prof. Ricardo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bento Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="lg:col-span-3 grid grid-cols-3 gap-3 md:gap-6">
          <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-gray-100 shadow-sm text-center md:text-left">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-orange-50 text-[#FFB800] flex items-center justify-center text-sm md:text-xl mb-2 md:mb-4 mx-auto md:mx-0">
              <i className="fa-solid fa-fire"></i>
            </div>
            <h4 className="text-[7px] md:text-[9px] font-black text-gray-300 uppercase tracking-widest mb-0.5">STREAK</h4>
            <p className="text-lg md:text-3xl font-black text-gray-900 tracking-tighter">14 <span className="text-[8px] md:text-xs text-gray-400 uppercase">Dias</span></p>
          </div>

          <div className="bg-[#1A1A1A] rounded-2xl md:rounded-3xl p-4 md:p-6 text-white shadow-sm text-center md:text-left overflow-hidden relative group">
             <i className={`fa-solid ${isEnzo ? 'fa-drum' : 'fa-guitar'} absolute -right-2 -top-2 text-4xl md:text-7xl opacity-5`}></i>
             <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-white/10 text-[#FFB800] flex items-center justify-center text-sm md:text-xl mb-2 md:mb-4 mx-auto md:mx-0">
               <i className="fa-solid fa-star"></i>
             </div>
             <h4 className="text-[7px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest mb-0.5">NÍVEL</h4>
             <p className="text-sm md:text-2xl font-black text-white tracking-tighter">Gold II</p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-gray-100 shadow-sm text-center md:text-left">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center text-sm md:text-xl mb-2 md:mb-4 mx-auto md:mx-0">
              <i className="fa-solid fa-trophy"></i>
            </div>
            <h4 className="text-[7px] md:text-[9px] font-black text-gray-300 uppercase tracking-widest mb-0.5">SCORE</h4>
            <p className="text-lg md:text-3xl font-black text-gray-900 tracking-tighter">2.4k <span className="text-[8px] md:text-xs text-gray-400 uppercase">Pts</span></p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs md:text-sm font-black text-gray-900 uppercase tracking-widest">Emblemas</h3>
            <i className="fa-solid fa-medal text-[#FFB800] text-xs"></i>
          </div>
          <div className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar">
            {badges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 p-2 bg-gray-50/50 rounded-xl flex-shrink-0 min-w-[100px] lg:min-w-0">
                <i className={`fa-solid ${badge.icon} ${badge.color} text-xs md:text-sm flex-shrink-0`}></i>
                <span className="text-[7px] md:text-[9px] font-bold text-gray-700 uppercase truncate">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

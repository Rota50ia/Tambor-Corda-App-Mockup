
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
    <div className="space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* Welcome Hero & Student Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-10">
        <div className="text-left">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
            Olá, Juliana! <span className="text-[#FFB800]">Música</span> é vida. 🎸
          </h2>
          <p className="text-gray-500 font-bold mt-2 md:mt-4 flex items-center gap-2 md:gap-3 text-sm md:text-lg">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-[#FFFCEB] flex items-center justify-center text-[#FFB800] shadow-inner">
              <i className="fa-solid fa-sparkles text-xs md:text-base"></i>
            </div>
            Hoje é um ótimo dia para o {student} praticar {isEnzo ? 'Bateria' : 'Violão'}.
          </p>
        </div>
        
        <div className="flex bg-white p-1.5 md:p-2.5 rounded-2xl md:rounded-[32px] border border-gray-100 shadow-xl self-start lg:self-center">
          <button 
            onClick={() => onStudentChange('Enzo')}
            className={`flex items-center gap-2 md:gap-4 px-4 md:px-8 py-2 md:py-4 rounded-xl md:rounded-[24px] font-black text-xs md:text-sm transition-all duration-300 ${
              student === 'Enzo' ? 'bg-[#FFB800] text-white shadow-2xl shadow-[#FFB800]/20' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`}
          >
            <img src="https://picsum.photos/seed/enzo/100/100" className={`w-6 h-6 md:w-8 md:h-8 rounded-full ring-2 ring-white transition-all ${student !== 'Enzo' && 'grayscale opacity-50'}`} alt="Enzo" />
            Enzo
          </button>
          <button 
            onClick={() => onStudentChange('Sophia')}
            className={`flex items-center gap-2 md:gap-4 px-4 md:px-8 py-2 md:py-4 rounded-xl md:rounded-[24px] font-black text-xs md:text-sm transition-all duration-300 ${
              student === 'Sophia' ? 'bg-[#FFB800] text-white shadow-2xl shadow-[#FFB800]/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`}
          >
            <img src="https://picsum.photos/seed/sophia/100/100" className={`w-6 h-6 md:w-8 md:h-8 rounded-full ring-2 ring-white transition-all ${student !== 'Sophia' && 'grayscale opacity-50'}`} alt="Sophia" />
            Sophia
          </button>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-10">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Live Session Promo Card */}
          <div className="bg-gray-900 rounded-[32px] md:rounded-[56px] p-8 md:p-14 text-white relative overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.2)] flex flex-col justify-between h-auto md:h-full min-h-[300px] md:min-h-[360px]">
            <div className="absolute top-0 right-0 p-8 md:p-10 opacity-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-1000 pointer-events-none">
              <i className="fa-solid fa-microphone-lines text-[150px] md:text-[280px] text-[#FFB800]"></i>
            </div>
            <div className="relative z-10 space-y-6 md:space-y-8">
              <div className="flex items-center gap-3">
                <span className="px-3 md:px-5 py-1.5 md:py-2 bg-[#FFB800] text-white text-[8px] md:text-[10px] font-black rounded-full uppercase tracking-[0.2em] shadow-lg shadow-[#FFB800]/20">NOVIDADE LIVE</span>
                <div className="w-2 h-2 bg-[#FFB800] rounded-full animate-ping"></div>
              </div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-none max-w-sm">Prática Inteligente em Tempo Real</h3>
              <p className="text-gray-400 text-sm md:text-lg font-medium leading-relaxed max-w-md">
                Ajuste sua técnica com o feedback instantâneo do Mestre Tambor. Nossa IA ouve e orienta cada nota.
              </p>
              <button 
                onClick={() => onNavigate('live-session')}
                className="px-6 md:px-10 py-3 md:py-5 bg-white text-gray-900 rounded-xl md:rounded-[24px] font-black text-[10px] md:text-xs uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 md:gap-4 self-start"
              >
                <i className="fa-solid fa-play text-[#FFB800]"></i>
                INICIAR SESSÃO AO VIVO
              </button>
            </div>
          </div>

          {/* Veo Studio Promo Card */}
          <div className="bg-[#FFB800] rounded-[32px] md:rounded-[56px] p-8 md:p-14 text-white relative overflow-hidden group shadow-[0_30px_60px_rgba(255,184,0,0.25)] flex flex-col justify-between h-auto md:h-full min-h-[300px] md:min-h-[360px]">
            <div className="absolute top-0 right-0 p-8 md:p-10 opacity-20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-1000 pointer-events-none">
              <i className="fa-solid fa-clapperboard text-[150px] md:text-[280px] text-white"></i>
            </div>
            <div className="relative z-10 space-y-6 md:space-y-8">
              <span className="px-3 md:px-5 py-1.5 md:py-2 bg-black/10 text-white text-[8px] md:text-[10px] font-black rounded-full uppercase tracking-[0.2em]">ESTÚDIO VEO 3.1</span>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-none text-gray-900 max-w-sm">Crie Vídeos Cinematográficos</h3>
              <p className="text-gray-900/60 text-sm md:text-lg font-medium leading-relaxed max-w-md">
                Transforme suas melhores performances em teasers épicos usando a tecnologia de geração de vídeo mais avançada.
              </p>
              <button 
                onClick={() => onNavigate('studio')}
                className="px-6 md:px-10 py-3 md:py-5 bg-gray-900 text-white rounded-xl md:rounded-[24px] font-black text-[10px] md:text-xs uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 md:gap-4 self-start"
              >
                <i className="fa-solid fa-wand-magic-sparkles text-[#FFB800]"></i>
                GERAR TEASER AGORA
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Quick Actions */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Assignment Widget */}
          <div 
            onClick={() => onNavigate('assignment')}
            className="bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-10 border border-gray-100 shadow-xl flex flex-col justify-between hover:border-[#FFB800]/40 transition-all duration-500 cursor-pointer group active:scale-95 h-auto min-h-[180px]"
          >
             <div>
               <div className="flex items-center justify-between mb-6 md:mb-8">
                  <span className="px-4 py-1.5 bg-orange-50 text-orange-600 text-[8px] md:text-[10px] font-black rounded-full uppercase tracking-[0.2em]">URGENTE</span>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500">
                    <i className="fa-solid fa-clock-rotate-left text-xs md:text-base"></i>
                  </div>
               </div>
               <h4 className="text-xl md:text-2xl font-black text-gray-900 leading-tight mb-2">Próxima Entrega</h4>
               <p className="text-xs md:text-sm font-bold text-gray-400">Escalas Maiores - Teoria</p>
             </div>
             <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[8px] md:text-[10px] font-black text-gray-300 uppercase tracking-widest">Faltam 2 dias</span>
                <i className="fa-solid fa-arrow-right text-[#FFB800] group-hover:translate-x-2 transition-transform"></i>
             </div>
          </div>

          {/* Next Lesson Sidebar Card */}
          <div className="bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-10 border border-gray-100 shadow-xl flex flex-col justify-between hover:border-[#FFB800]/40 transition-all duration-500 cursor-pointer group active:scale-95 h-auto min-h-[180px]" onClick={() => onNavigate('lessons')}>
            <div>
              <div className="flex items-center justify-between mb-6 md:mb-8">
                 <span className="px-4 py-1.5 bg-green-50 text-green-600 text-[8px] md:text-[10px] font-black rounded-full uppercase tracking-[0.2em]">AMANHÃ</span>
                 <i className="fa-solid fa-bell text-gray-200 group-hover:text-[#FFB800] transition-colors group-hover:animate-swing"></i>
              </div>
              <h4 className="text-xl md:text-3xl font-black text-gray-900 leading-tight mb-4">Próxima Aula</h4>
              <div className="flex items-center gap-2 md:gap-3 text-gray-400 font-bold text-sm md:text-base">
                <i className="fa-solid fa-clock text-[#FFB800]"></i>
                <span>16:30 - 17:30</span>
              </div>
            </div>
            <div className="mt-6 md:mt-8 flex items-center gap-3 md:gap-4 border-t border-gray-50 pt-6 md:pt-8">
               <img src="https://picsum.photos/seed/ricardo/100/100" className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-[18px] border-2 border-white shadow-lg" alt="Prof" />
               <div className="flex flex-col">
                 <span className="text-[8px] md:text-[10px] font-black text-gray-900 uppercase tracking-[0.2em] leading-none mb-1 md:mb-1.5">Mestre</span>
                 <span className="text-xs md:text-sm font-bold text-gray-400">Ricardo Mendes</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bento Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-10">
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          <div className="bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-10 border border-gray-100 shadow-xl group hover:-translate-y-2 transition-all duration-500">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[24px] bg-orange-50 text-[#FFB800] flex items-center justify-center text-2xl md:text-3xl mb-8 md:mb-12 transition-transform group-hover:rotate-12 group-hover:scale-110">
              <i className="fa-solid fa-fire-flame-curved"></i>
            </div>
            <h4 className="text-[8px] md:text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-1 md:mb-2">STREAK DE PRÁTICA</h4>
            <div className="flex items-baseline gap-2 md:gap-3">
              <span className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">14</span>
              <span className="text-base md:text-xl font-black text-gray-400 tracking-tighter uppercase">DIAS</span>
            </div>
          </div>

          <div className="bg-[#1A1A1A] rounded-[32px] md:rounded-[48px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
             <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 group-hover:rotate-12 transition-transform duration-1000 pointer-events-none">
               <i className={`fa-solid ${isEnzo ? 'fa-drum' : 'fa-guitar'} text-[120px] md:text-[180px]`}></i>
             </div>
             <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[24px] bg-white/10 flex items-center justify-center text-2xl md:text-3xl mb-8 md:mb-12 group-hover:scale-110 group-hover:bg-[#FFB800]/20 transition-all">
               <i className="fa-solid fa-star text-[#FFB800]"></i>
             </div>
             <h4 className="text-[8px] md:text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1 md:mb-2">NÍVEL ATUAL</h4>
             <div className="flex items-baseline gap-2 md:gap-3">
               <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">Gold II</span>
             </div>
          </div>

          <div className="bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-10 border border-gray-100 shadow-xl group hover:-translate-y-2 transition-all duration-500">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[24px] bg-blue-50 text-blue-500 flex items-center justify-center text-2xl md:text-3xl mb-8 md:mb-12 transition-transform group-hover:-rotate-12 group-hover:scale-110">
              <i className="fa-solid fa-trophy"></i>
            </div>
            <h4 className="text-[8px] md:text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-1 md:mb-2">SCORE ACUMULADO</h4>
            <div className="flex items-baseline gap-2 md:gap-3">
              <span className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">2.450</span>
              <span className="text-base md:text-xl font-black text-gray-400 tracking-tighter uppercase">PTS</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[32px] md:rounded-[56px] border border-gray-100 shadow-xl space-y-6 md:space-y-8 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-black text-gray-900">Emblemas</h3>
            <i className="fa-solid fa-medal text-[#FFB800]"></i>
          </div>
          <div className="space-y-4 md:space-y-6">
            {badges.map((badge, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-6 group cursor-help p-2 md:p-3 hover:bg-gray-50 rounded-xl md:rounded-[28px] transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-[20px] bg-gray-50 flex items-center justify-center text-xl md:text-2xl shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <i className={`fa-solid ${badge.icon} ${badge.color}`}></i>
                </div>
                <span className="text-[10px] md:text-xs font-black text-gray-700 uppercase tracking-[0.2em]">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

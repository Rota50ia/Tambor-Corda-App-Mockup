
import React, { useState } from 'react';

const CalendarView: React.FC = () => {
  const [view, setView] = useState<'month' | 'agenda'>('month');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-gray-900">Calendário Escolar</h2>
          <p className="text-gray-500 font-bold mt-1">Acompanhe as datas importantes do Enzo.</p>
        </div>
        <div className="flex bg-white p-1 rounded-full border border-gray-100 shadow-sm">
          <button 
            onClick={() => setView('month')}
            className={`px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-all ${
              view === 'month' ? 'bg-[#FFB800] text-white shadow-md shadow-[#FFB800]/20' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <i className="fa-solid fa-calendar-grid-5"></i> Mês
          </button>
          <button 
            onClick={() => setView('agenda')}
            className={`px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-all ${
              view === 'agenda' ? 'bg-[#FFB800] text-white shadow-md shadow-[#FFB800]/20' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <i className="fa-solid fa-list-check"></i> Agenda
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[40px] border border-gray-100 p-10 shadow-xl overflow-hidden relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-gray-900">Maio 2025</h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-50 rounded-xl text-gray-400 hover:text-gray-800 transition-all"><i className="fa-solid fa-chevron-left"></i></button>
              <button className="p-2 hover:bg-gray-50 rounded-xl text-gray-400 hover:text-gray-800 transition-all"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-4">
            {['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'].map(day => (
              <div key={day} className="text-center text-[10px] font-black text-gray-300 tracking-widest pb-4">{day}</div>
            ))}
            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              const hasEvent = [5, 12, 18, 25].includes(day);
              return (
                <div key={i} className={`h-24 rounded-2xl border border-gray-50 p-2 flex flex-col items-end transition-all cursor-pointer hover:border-[#FFB800]/30 hover:bg-[#FFFCEB]/30 ${
                  day === 15 ? 'bg-[#FFFCEB] border-[#FFB800]' : 'bg-white'
                }`}>
                  <span className={`text-xs font-bold ${day === 15 ? 'text-[#FFB800]' : 'text-gray-400'}`}>{day}</span>
                  {hasEvent && (
                    <div className="w-full mt-2 space-y-1">
                      <div className="w-full h-1.5 bg-blue-100 rounded-full"></div>
                      <div className="hidden md:block w-full h-1.5 bg-orange-100 rounded-full"></div>
                    </div>
                  )}
                  {day === 15 && (
                    <div className="w-full mt-2">
                      <div className="w-full h-4 bg-[#FFB800]/10 rounded-lg flex items-center justify-center text-[8px] font-black text-[#FFB800] uppercase tracking-tighter">PRÁTICA</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
            <h4 className="text-lg font-black text-gray-900 flex items-center gap-2">
              <i className="fa-solid fa-filter text-[#FFB800]"></i> Filtrar
            </h4>
            <div className="space-y-4">
              {[
                { label: 'Aulas de Instrumento', color: '#FFB800' },
                { label: 'Teoria Musical', color: '#3B82F6' },
                { label: 'Apresentações', color: '#EF4444' },
                { label: 'Eventos Escolares', color: '#10B981' },
              ].map(filter => (
                <label key={filter.label} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-200 group-hover:border-[#FFB800] transition-all flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: filter.color }}></div>
                  </div>
                  <span className="text-sm font-bold text-gray-500 group-hover:text-gray-800 transition-all">{filter.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-[#1A1A1A] rounded-3xl p-8 text-white shadow-xl shadow-gray-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-all duration-500">
              <i className="fa-solid fa-guitar text-8xl"></i>
            </div>
            <h4 className="text-lg font-black mb-4 flex items-center gap-2">
              <i className="fa-solid fa-bullhorn text-[#FFB800]"></i> Recital de Junho
            </h4>
            <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6">
              As inscrições para o recital de inverno estão abertas! Fale com seu professor para escolher a música.
            </p>
            <button className="w-full py-3 bg-[#FFB800] text-white rounded-2xl font-black text-sm shadow-lg shadow-[#FFB800]/20 hover:scale-[1.02] transition-all">
              Garantir Minha Vaga
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;


import React from 'react';

interface LessonsProps {
  student: string;
}

const LessonsView: React.FC<LessonsProps> = ({ student }) => {
  const schedule = [
    { day: 'Segunda', time: '16:00', instrument: 'Bateria', teacher: 'Prof. Ricardo', room: 'Sala 04 (Acústica)', status: 'Confirmada', color: 'orange' },
    { day: 'Quarta', time: '14:30', instrument: 'Teoria Musical', teacher: 'Prof. Ana', room: 'Auditório Principal', status: 'Confirmada', color: 'blue' },
    { day: 'Quinta', time: '17:00', instrument: 'Guitarra Elétrica', teacher: 'Prof. Pedro', room: 'Sala 12 (Solo)', status: 'Revisar', color: 'purple' },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-5xl font-black text-gray-900 tracking-tighter">Agenda Semanal</h2>
          <p className="text-gray-500 font-bold mt-2 text-lg italic">"A consistência é a alma da virtuosidade."</p>
        </div>
        <div className="flex bg-white p-2 rounded-[28px] border border-gray-100 shadow-xl">
          <button className="px-8 py-3.5 bg-[#FFB800] text-white rounded-[20px] font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#FFB800]/20">Cronograma</button>
          <button className="px-8 py-3.5 text-gray-400 font-black text-xs uppercase tracking-[0.2em] hover:text-gray-600 transition-all">Relatórios</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Visual Timeline */}
        <div className="lg:col-span-3 space-y-10 relative">
          <div className="absolute left-[64px] top-0 bottom-0 w-1 bg-gray-50 rounded-full hidden md:block"></div>
          
          {schedule.map((lesson, i) => (
            <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-10 group relative">
              <div className="w-32 flex flex-col items-center justify-center bg-white p-6 rounded-[32px] border border-gray-100 shadow-xl group-hover:scale-105 transition-all duration-500 z-10">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">{lesson.day}</span>
                <span className="text-3xl font-black text-gray-900 tracking-tighter">{lesson.time}</span>
              </div>
              
              <div className={`flex-1 w-full bg-white rounded-[48px] p-10 border border-gray-50 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-8 hover:shadow-2xl hover:border-[#FFB800]/40 transition-all duration-700 cursor-pointer`}>
                <div className="flex items-center gap-8">
                  <div className={`w-24 h-24 rounded-[32px] flex items-center justify-center text-4xl shadow-inner transition-all group-hover:rotate-6 ${
                    lesson.color === 'orange' ? 'bg-orange-50 text-orange-500' :
                    lesson.color === 'blue' ? 'bg-blue-50 text-blue-500' : 'bg-purple-50 text-purple-500'
                  }`}>
                    <i className={`fa-solid ${lesson.instrument === 'Bateria' ? 'fa-drum' : lesson.instrument === 'Teoria Musical' ? 'fa-music' : 'fa-guitar'}`}></i>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${lesson.status === 'Confirmada' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                        {lesson.status}
                      </span>
                      <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{lesson.instrument}</span>
                    </div>
                    <h4 className="text-3xl font-black text-gray-900 tracking-tight group-hover:text-[#FFB800] transition-colors leading-none">{lesson.teacher}</h4>
                    <p className="text-base font-bold text-gray-400 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-300">
                        <i className="fa-solid fa-door-open text-xs"></i>
                      </div>
                      {lesson.room}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-gray-50 pt-8 md:pt-0 md:pl-10">
                   <div className="text-right hidden sm:block">
                     <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Duração</p>
                     <p className="text-lg font-black text-gray-900">60 min</p>
                   </div>
                   <button className="w-16 h-16 rounded-[24px] bg-gray-900 text-white flex items-center justify-center text-xl hover:bg-[#FFB800] hover:scale-110 transition-all shadow-xl shadow-gray-200">
                     <i className="fa-solid fa-chevron-right"></i>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Sidebar */}
        <div className="space-y-10">
          <div className="bg-gray-900 p-10 rounded-[56px] text-white space-y-8 relative overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.15)]">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-all duration-[2000ms]">
              <i className="fa-solid fa-compass text-[180px] text-[#FFB800]"></i>
            </div>
            <h3 className="text-2xl font-black flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#FFB800]">
                <i className="fa-solid fa-map-pin"></i>
              </div>
              Unidade Central
            </h3>
            <div className="space-y-2 relative z-10">
              <p className="text-gray-400 font-medium leading-relaxed">
                Rua das Notas, 123 - Bairro Harmonia.<br/>
                Próximo ao Metrô Estação Jazz.
              </p>
            </div>
            <button className="w-full py-5 bg-white text-gray-900 rounded-[24px] font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-[#FFB800] hover:text-white transition-all relative z-10">ABRIR ROTA NO MAPA</button>
          </div>

          <div className="bg-white p-10 rounded-[56px] border border-gray-100 shadow-xl space-y-8">
            <h3 className="text-2xl font-black text-gray-900 tracking-tight">Checklist</h3>
            <div className="space-y-6">
              {[
                { icon: 'fa-drumstick-bite', text: 'Baquetas Afinadas', done: true },
                { icon: 'fa-book-open', text: 'Caderno de Partitura', done: true },
                { icon: 'fa-battery-full', text: 'Energia 100%', done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm transition-all ${item.done ? 'bg-green-50 text-green-500' : 'bg-gray-50 text-gray-300'}`}>
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <span className={`text-sm font-bold ${item.done ? 'text-gray-900' : 'text-gray-400'}`}>{item.text}</span>
                  </div>
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${item.done ? 'bg-[#FFB800] border-[#FFB800] text-white' : 'border-gray-100'}`}>
                    {item.done && <i className="fa-solid fa-check text-[10px]"></i>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonsView;

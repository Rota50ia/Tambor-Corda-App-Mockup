
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
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 space-y-8 md:space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter">Classes</h2>
          <p className="text-gray-500 font-bold mt-1 md:mt-2 text-sm md:text-lg italic leading-tight">"A consistência é a alma da virtuosidade."</p>
        </div>
        <div className="flex bg-white p-1.5 rounded-2xl md:rounded-[28px] border border-gray-100 shadow-xl self-start">
          <button className="px-4 md:px-8 py-2 md:py-3.5 bg-[#FFB800] text-white rounded-xl md:rounded-[20px] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#FFB800]/20">Cronograma</button>
          <button className="px-4 md:px-8 py-2 md:py-3.5 text-gray-400 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:text-gray-600 transition-all">Relatórios</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Visual Timeline */}
        <div className="lg:col-span-3 space-y-8 md:space-y-10 relative">
          <div className="absolute left-[36px] md:left-[64px] top-0 bottom-0 w-1 bg-gray-50 rounded-full"></div>
          
          {schedule.map((lesson, i) => (
            <div key={i} className="flex flex-row items-start md:items-center gap-4 md:gap-10 group relative">
              <div className="w-20 md:w-32 flex flex-col items-center justify-center bg-white p-3 md:p-6 rounded-2xl md:rounded-[32px] border border-gray-100 shadow-xl group-hover:scale-105 transition-all duration-500 z-10 flex-shrink-0">
                <span className="text-[7px] md:text-[10px] font-black text-gray-300 uppercase tracking-widest mb-0.5 md:mb-1">{lesson.day}</span>
                <span className="text-lg md:text-3xl font-black text-gray-900 tracking-tighter">{lesson.time}</span>
              </div>
              
              <div className="flex-1 w-full bg-white rounded-[24px] md:rounded-[48px] p-6 md:p-10 border border-gray-50 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 hover:shadow-2xl hover:border-[#FFB800]/40 transition-all duration-700 cursor-pointer">
                <div className="flex items-center gap-4 md:gap-8">
                  <div className={`w-14 h-14 md:w-24 md:h-24 rounded-[18px] md:rounded-[32px] flex items-center justify-center text-xl md:text-4xl shadow-inner transition-all group-hover:rotate-6 flex-shrink-0 ${
                    lesson.color === 'orange' ? 'bg-orange-50 text-orange-500' :
                    lesson.color === 'blue' ? 'bg-blue-50 text-blue-500' : 'bg-purple-50 text-purple-500'
                  }`}>
                    <i className={`fa-solid ${lesson.instrument === 'Bateria' ? 'fa-drum' : lesson.instrument === 'Teoria Musical' ? 'fa-music' : 'fa-guitar'}`}></i>
                  </div>
                  <div className="space-y-1 md:space-y-2 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-full text-[7px] md:text-[9px] font-black uppercase tracking-widest ${lesson.status === 'Confirmada' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                        {lesson.status}
                      </span>
                      <span className="text-[8px] md:text-[10px] font-black text-gray-300 uppercase tracking-widest truncate">{lesson.instrument}</span>
                    </div>
                    <h4 className="text-lg md:text-3xl font-black text-gray-900 tracking-tight group-hover:text-[#FFB800] transition-colors leading-none truncate">{lesson.teacher}</h4>
                    <p className="text-xs md:text-base font-bold text-gray-400 flex items-center gap-2 md:gap-3 truncate">
                      <i className="fa-solid fa-door-open text-[10px] md:text-xs"></i>
                      {lesson.room}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t md:border-t-0 md:border-l border-gray-50 pt-4 md:pt-0 md:pl-10">
                   <div className="text-left md:text-right">
                     <p className="text-[7px] md:text-[10px] font-black text-gray-300 uppercase tracking-widest">Duração</p>
                     <p className="text-sm md:text-lg font-black text-gray-900">60 min</p>
                   </div>
                   <button className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-[24px] bg-gray-900 text-white flex items-center justify-center text-base md:text-xl hover:bg-[#FFB800] hover:scale-110 transition-all shadow-xl shadow-gray-200">
                     <i className="fa-solid fa-chevron-right"></i>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6 md:space-y-10">
          <div className="bg-gray-900 p-8 md:p-10 rounded-[32px] md:rounded-[56px] text-white space-y-6 md:space-y-8 relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-all duration-[2000ms] pointer-events-none">
              <i className="fa-solid fa-compass text-[120px] md:text-[180px] text-[#FFB800]"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-black flex items-center gap-3 md:gap-4 relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center text-[#FFB800]">
                <i className="fa-solid fa-map-pin"></i>
              </div>
              Unidade Central
            </h3>
            <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed relative z-10">
              Rua das Notas, 123 - Bairro Harmonia.<br className="hidden sm:block"/> Próximo ao Metrô Estação Jazz.
            </p>
            <button className="w-full py-4 md:py-5 bg-white text-gray-900 rounded-xl md:rounded-[24px] font-black text-[10px] md:text-xs uppercase tracking-widest shadow-2xl hover:bg-[#FFB800] hover:text-white transition-all relative z-10">ABRIR MAPA</button>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[56px] border border-gray-100 shadow-xl space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">Checklist</h3>
            <div className="space-y-4 md:space-y-6">
              {[
                { icon: 'fa-drumstick-bite', text: 'Baquetas Afinadas', done: true },
                { icon: 'fa-book-open', text: 'Caderno de Partitura', done: true },
                { icon: 'fa-battery-full', text: 'Energia 100%', done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center text-xs md:text-sm transition-all ${item.done ? 'bg-green-50 text-green-500' : 'bg-gray-50 text-gray-300'}`}>
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <span className={`text-xs md:text-sm font-bold ${item.done ? 'text-gray-900' : 'text-gray-400'}`}>{item.text}</span>
                  </div>
                  <div className={`w-5 h-5 md:w-6 md:h-6 rounded-lg border-2 flex items-center justify-center transition-all ${item.done ? 'bg-[#FFB800] border-[#FFB800] text-white' : 'border-gray-100'}`}>
                    {item.done && <i className="fa-solid fa-check text-[8px] md:text-[10px]"></i>}
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


import React from 'react';

interface LessonsProps {
  student: string;
}

const LessonsView: React.FC<LessonsProps> = ({ student }) => {
  const schedule = [
    { day: 'Segunda', time: '16:00', instrument: 'Bateria', teacher: 'Prof. Ricardo', room: 'Sala 04', status: 'Confirmada', color: 'orange' },
    { day: 'Quarta', time: '14:30', instrument: 'Teoria Musical', teacher: 'Prof. Ana', room: 'Auditório', status: 'Confirmada', color: 'blue' },
    { day: 'Quinta', time: '17:00', instrument: 'Guitarra', teacher: 'Prof. Pedro', room: 'Sala 12', status: 'Pendente', color: 'purple' },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 space-y-6 md:space-y-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-3xl font-black text-gray-900 tracking-tighter">Minhas Aulas</h2>
          <p className="text-gray-500 font-bold mt-0.5 text-[10px] md:text-sm">"A consistência é a alma da virtuosidade."</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl border border-gray-100 shadow-sm self-start">
          <button className="px-4 md:px-6 py-1.5 md:py-2.5 bg-[#FFB800] text-white rounded-lg md:rounded-xl font-black text-[8px] md:text-[10px] uppercase tracking-widest">Cronograma</button>
          <button className="px-4 md:px-6 py-1.5 md:py-2.5 text-gray-400 font-black text-[8px] md:text-[10px] uppercase tracking-widest">Histórico</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Visual Timeline */}
        <div className="lg:col-span-3 space-y-6 relative">
          <div className="absolute left-[24px] md:left-[44px] top-0 bottom-0 w-0.5 bg-gray-100 rounded-full"></div>
          
          {schedule.map((lesson, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-8 group relative">
              <div className="w-12 md:w-24 flex flex-col items-center justify-center bg-white p-2 md:p-4 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm z-10 flex-shrink-0">
                <span className="text-[6px] md:text-[8px] font-black text-gray-300 uppercase tracking-widest">{lesson.day}</span>
                <span className="text-xs md:text-xl font-black text-gray-900">{lesson.time}</span>
              </div>
              
              <div className="flex-1 bg-white rounded-2xl md:rounded-[32px] p-4 md:p-6 border border-gray-50 shadow-sm flex items-center justify-between gap-4 hover:border-[#FFB800]/40 transition-all cursor-pointer">
                <div className="flex items-center gap-3 md:gap-6 min-w-0">
                  <div className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center text-lg md:text-3xl flex-shrink-0 ${
                    lesson.color === 'orange' ? 'bg-orange-50 text-orange-500' :
                    lesson.color === 'blue' ? 'bg-blue-50 text-blue-500' : 'bg-purple-50 text-purple-500'
                  }`}>
                    <i className={`fa-solid ${lesson.instrument === 'Bateria' ? 'fa-drum' : lesson.instrument === 'Teoria Musical' ? 'fa-music' : 'fa-guitar'}`}></i>
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <span className={`px-2 py-0.5 rounded-full text-[6px] md:text-[8px] font-black uppercase tracking-widest ${lesson.status === 'Confirmada' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                      {lesson.status}
                    </span>
                    <h4 className="text-sm md:text-xl font-black text-gray-900 tracking-tight leading-none truncate">{lesson.teacher}</h4>
                    <p className="text-[10px] md:text-sm font-bold text-gray-400 flex items-center gap-2 truncate">
                      {lesson.instrument} • {lesson.room}
                    </p>
                  </div>
                </div>

                <button className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gray-900 text-white flex items-center justify-center text-xs md:text-base hover:bg-[#FFB800] transition-all flex-shrink-0">
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-gray-900 p-6 rounded-3xl text-white space-y-4 relative overflow-hidden group shadow-md">
            <h3 className="text-sm md:text-base font-black flex items-center gap-2 relative z-10">
              <i className="fa-solid fa-map-pin text-[#FFB800]"></i> Unidade Central
            </h3>
            <p className="text-gray-400 text-[10px] md:text-xs font-medium leading-relaxed relative z-10">Rua das Notas, 123 - Bairro Harmonia.</p>
            <button className="w-full py-2.5 bg-white text-gray-900 rounded-lg md:rounded-xl font-black text-[8px] md:text-[10px] uppercase tracking-widest hover:bg-[#FFB800] hover:text-white transition-all relative z-10">MAPA</button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-sm md:text-base font-black text-gray-900">Checklist</h3>
            <div className="space-y-3">
              {[
                { icon: 'fa-drumstick-bite', text: 'Baquetas', done: true },
                { icon: 'fa-book-open', text: 'Caderno', done: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] ${item.done ? 'bg-green-50 text-green-500' : 'bg-gray-50 text-gray-300'}`}>
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <span className={`text-[10px] md:text-xs font-bold ${item.done ? 'text-gray-900' : 'text-gray-400'}`}>{item.text}</span>
                  </div>
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${item.done ? 'bg-[#FFB800] border-[#FFB800] text-white' : 'border-gray-100'}`}>
                    {item.done && <i className="fa-solid fa-check text-[8px]"></i>}
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

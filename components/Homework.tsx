
import React, { useState, useEffect } from 'react';

interface HomeworkProps {
  student: string;
}

const HomeworkView: React.FC<HomeworkProps> = ({ student }) => {
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tick, setTick] = useState(false);
  const [activeTask, setActiveTask] = useState<number | null>(null);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setTick(prev => !prev);
      }, (60 / bpm) * 1000);
    } else {
      setTick(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, bpm]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-4 md:space-y-6 pb-12 overflow-x-hidden max-w-5xl mx-auto">
      <div className="bg-white p-5 md:p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl border-2 border-[#FFB800] flex items-center justify-center relative bg-white flex-shrink-0">
            <i className="fa-solid fa-music text-xl md:text-3xl text-[#FFB800]"></i>
            <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 md:w-8 md:h-8 bg-green-500 border-2 border-white rounded-lg flex items-center justify-center text-white text-[8px] md:text-xs">
              <i className="fa-solid fa-bolt"></i>
            </div>
          </div>
          <div>
            <h2 className="text-lg md:text-2xl font-black text-gray-900 leading-tight">Treino: {student}</h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[7px] md:text-[9px] mt-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Em Progresso
            </p>
          </div>
        </div>

        <div className="bg-gray-50/50 p-4 md:p-6 rounded-2xl border border-gray-100 relative z-10 flex-1 lg:max-w-md">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-[7px] md:text-[9px] font-black text-gray-400 uppercase tracking-widest">Meta Semanal</h4>
            <span className="text-sm md:text-xl font-black text-[#FFB800]">80%</span>
          </div>
          <div className="h-2 w-full bg-white rounded-full overflow-hidden p-0.5 border border-gray-50">
            <div className="h-full bg-gradient-to-r from-[#FFB800] to-orange-400 rounded-full transition-all duration-1000" style={{ width: '80%' }}></div>
          </div>
          <p className="text-[9px] md:text-xs font-black text-gray-400 mt-2 text-right">4 de 5 horas</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-base md:text-xl font-black text-gray-900 flex items-center gap-2">
            <div className="w-1 h-5 bg-[#FFB800] rounded-full"></div>
            Roteiro Diário
          </h3>
          
          <div className="space-y-2">
            {[
              { id: 1, title: 'Solo: Escalas', category: 'GUITARRA', time: '15m', color: 'orange' },
              { id: 2, title: 'Ditado Harmônico', category: 'TEORIA', time: '10m', color: 'blue' },
              { id: 3, title: 'Levada de Jazz', category: 'BATERIA', time: '20m', color: 'green' },
            ].map(task => (
              <div 
                key={task.id} 
                onClick={() => setActiveTask(task.id)}
                className={`bg-white rounded-xl md:rounded-2xl p-3 md:p-5 border transition-all flex items-center justify-between cursor-pointer ${
                  activeTask === task.id ? 'border-[#FFB800] bg-[#FFFCEB]/20' : 'border-gray-100 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 md:gap-5 min-w-0">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-lg md:text-2xl flex-shrink-0 ${
                    task.color === 'orange' ? 'bg-orange-50 text-orange-500' :
                    task.color === 'blue' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'
                  }`}>
                    <i className="fa-solid fa-music"></i>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[6px] md:text-[8px] font-black text-gray-300 uppercase tracking-widest">{task.category}</span>
                    <h4 className="font-black text-gray-900 text-xs md:text-base truncate">{task.title}</h4>
                    <p className="text-[8px] md:text-[10px] font-bold text-gray-400">{task.time}</p>
                  </div>
                </div>
                <button className={`px-4 md:px-6 py-1.5 md:py-2 rounded-lg font-black text-[8px] md:text-[9px] uppercase tracking-widest ${
                  activeTask === task.id ? 'bg-[#FFB800] text-white' : 'bg-gray-50 text-gray-400'
                }`}>
                  {activeTask === task.id ? 'Focando' : 'Iniciar'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-3xl p-6 md:p-8 text-white shadow-md space-y-6 flex flex-col justify-center">
            <div className="flex items-center justify-between">
              <h4 className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-gray-500">Metrônomo</h4>
              <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-75 ${tick ? 'bg-[#FFB800] scale-125' : 'bg-white/10'}`}></div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-black tracking-tighter text-white">{bpm}</div>
              <div className="text-[7px] md:text-[8px] font-black text-gray-500 uppercase tracking-widest">BPM</div>
            </div>

            <div className="space-y-5">
              <input 
                type="range" 
                min="40" 
                max="240" 
                value={bpm} 
                onChange={(e) => setBpm(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-full appearance-none accent-[#FFB800]"
              />
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className={`w-full py-3 md:py-4 rounded-xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all ${
                  isPlaying ? 'bg-red-500' : 'bg-[#FFB800]'
                } text-white shadow-lg`}
              >
                {isPlaying ? 'Parar' : 'Iniciar Ritmo'}
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default HomeworkView;

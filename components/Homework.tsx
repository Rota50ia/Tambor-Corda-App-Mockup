
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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-6 md:space-y-10 pb-12 overflow-x-hidden">
      <div className="bg-white p-6 md:p-10 rounded-[32px] md:rounded-[48px] border border-gray-100 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8 md:gap-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB800]/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
        
        <div className="flex items-center gap-4 md:gap-8 relative z-10">
          <div className="w-16 h-16 md:w-28 md:h-28 rounded-2xl md:rounded-[40px] border-2 md:border-4 border-[#FFB800] flex items-center justify-center relative bg-white shadow-xl flex-shrink-0">
            <i className="fa-solid fa-music text-2xl md:text-5xl text-[#FFB800]"></i>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-12 md:h-12 bg-green-500 border-2 md:border-4 border-white rounded-lg md:rounded-2xl flex items-center justify-center text-white text-[10px] md:text-lg shadow-lg">
              <i className="fa-solid fa-bolt"></i>
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-4xl font-black text-gray-900 leading-tight">Treino: {student}</h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[8px] md:text-xs mt-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Em Progresso
            </p>
          </div>
        </div>

        <div className="bg-gray-50/50 p-6 md:p-10 rounded-2xl md:rounded-[40px] flex-1 max-w-full lg:max-w-xl border border-gray-100 relative z-10">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <div className="space-y-1">
              <h4 className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest">Meta Semanal</h4>
              <p className="text-xs md:text-lg font-black text-gray-900">4 de 5 horas</p>
            </div>
            <span className="text-xl md:text-3xl font-black text-[#FFB800]">80%</span>
          </div>
          <div className="h-2.5 md:h-4 w-full bg-white rounded-full overflow-hidden p-0.5 md:p-1 shadow-inner border border-gray-50">
            <div className="h-full bg-gradient-to-r from-[#FFB800] to-orange-400 rounded-full transition-all duration-1000" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-2xl font-black text-gray-900 flex items-center gap-3">
              <div className="w-1 h-6 md:h-8 bg-[#FFB800] rounded-full"></div>
              Roteiro Diário
            </h3>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            {[
              { id: 1, title: 'Solo: Escalas', category: 'GUITARRA', time: '15m', color: 'orange' },
              { id: 2, title: 'Ditado Harmônico', category: 'TEORIA', time: '10m', color: 'blue' },
              { id: 3, title: 'Levada de Jazz', category: 'BATERIA', time: '20m', color: 'green' },
            ].map(task => (
              <div 
                key={task.id} 
                onClick={() => setActiveTask(task.id)}
                className={`bg-white rounded-2xl md:rounded-[36px] p-4 md:p-8 border transition-all flex items-center justify-between group cursor-pointer ${
                  activeTask === task.id ? 'border-[#FFB800] shadow-lg' : 'border-gray-100 shadow-sm hover:border-gray-200'
                }`}
              >
                <div className="flex items-center gap-4 md:gap-8 min-w-0">
                  <div className={`w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-[28px] flex items-center justify-center text-xl md:text-3xl flex-shrink-0 ${
                    task.color === 'orange' ? 'bg-orange-50 text-orange-500' :
                    task.color === 'blue' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'
                  }`}>
                    <i className="fa-solid fa-music"></i>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[7px] md:text-[10px] font-black text-gray-300 uppercase tracking-widest block truncate">{task.category}</span>
                    <h4 className="font-black text-gray-900 text-sm md:text-xl truncate">{task.title}</h4>
                    <p className="text-[8px] md:text-xs font-bold text-gray-400 mt-0.5">{task.time}</p>
                  </div>
                </div>
                <button className={`px-4 md:px-8 py-2 md:py-3 rounded-lg md:rounded-2xl font-black text-[8px] md:text-[10px] uppercase tracking-widest transition-all ${
                  activeTask === task.id ? 'bg-[#FFB800] text-white' : 'bg-gray-50 text-gray-400'
                }`}>
                  {activeTask === task.id ? 'Focando' : 'Treinar'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div className="bg-[#1A1A1A] rounded-[32px] md:rounded-[48px] p-6 md:p-10 text-white shadow-xl space-y-6 md:space-y-10 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <h4 className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-500">Metrônomo</h4>
              <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-75 ${tick ? 'bg-[#FFB800] scale-125' : 'bg-white/10'}`}></div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-7xl font-black tracking-tighter text-white">{bpm}</div>
              <div className="text-[8px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest">BPM</div>
            </div>

            <div className="space-y-6">
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
                className={`w-full py-4 md:py-5 rounded-xl md:rounded-[24px] font-black text-[10px] md:text-xs uppercase tracking-widest transition-all ${
                  isPlaying ? 'bg-red-500' : 'bg-[#FFB800]'
                } text-white`}
              >
                {isPlaying ? 'Parar' : 'Iniciar'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeworkView;


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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-10 pb-12">
      <div className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB800]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        
        <div className="flex items-center gap-8 relative z-10">
          <div className="w-28 h-28 rounded-[40px] border-4 border-[#FFB800] flex items-center justify-center relative bg-white shadow-2xl">
            <i className="fa-solid fa-music text-5xl text-[#FFB800]"></i>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-green-500 border-4 border-white rounded-2xl flex items-center justify-center text-white text-lg shadow-lg animate-bounce">
              <i className="fa-solid fa-bolt"></i>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black text-gray-900 leading-tight">Sessão de Treino: {student}</h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs mt-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Prática de Hoje: Em Progresso
            </p>
          </div>
        </div>

        <div className="bg-gray-50/50 p-10 rounded-[40px] flex-1 max-w-xl border border-gray-100 relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Meta Semanal</h4>
              <p className="text-lg font-black text-gray-900">4 de 5 horas concluídas</p>
            </div>
            <span className="text-3xl font-black text-[#FFB800]">80%</span>
          </div>
          <div className="h-4 w-full bg-white rounded-full overflow-hidden p-1 shadow-inner border border-gray-50">
            <div className="h-full bg-gradient-to-r from-[#FFB800] to-orange-400 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(255,184,0,0.3)]" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-gray-900 flex items-center gap-4">
              <div className="w-1.5 h-8 bg-[#FFB800] rounded-full"></div>
              Roteiro de Treino
            </h3>
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">3 TAREFAS PARA HOJE</span>
          </div>
          
          <div className="space-y-4">
            {[
              { id: 1, title: 'Solo: Exercício de Escalas', category: 'GUITARRA', time: '15 min', color: 'orange', difficulty: 'Média' },
              { id: 2, title: 'Ditado Harmônico I', category: 'TEORIA', time: '10 min', color: 'blue', difficulty: 'Fácil' },
              { id: 3, title: 'Levada de Jazz 101', category: 'BATERIA', time: '20 min', color: 'green', difficulty: 'Difícil' },
            ].map(task => (
              <div 
                key={task.id} 
                onClick={() => setActiveTask(task.id)}
                className={`bg-white rounded-[36px] p-8 border transition-all flex items-center justify-between group cursor-pointer ${
                  activeTask === task.id ? 'border-[#FFB800] ring-4 ring-[#FFB800]/5 shadow-xl' : 'border-gray-100 shadow-sm hover:border-gray-200'
                }`}
              >
                <div className="flex items-center gap-8">
                  <div className={`w-20 h-20 rounded-[28px] flex items-center justify-center text-3xl shadow-inner transition-transform group-hover:scale-110 ${
                    task.color === 'orange' ? 'bg-orange-50 text-orange-500' :
                    task.color === 'blue' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'
                  }`}>
                    <i className="fa-solid fa-music"></i>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{task.category}</span>
                      <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                      <span className="text-[10px] font-black text-[#FFB800] uppercase tracking-widest">{task.difficulty}</span>
                    </div>
                    <h4 className="font-black text-gray-900 text-xl">{task.title}</h4>
                    <p className="text-xs font-bold text-gray-400 mt-1 flex items-center gap-2">
                      <i className="fa-solid fa-clock"></i> Tempo sugerido: {task.time}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <button className={`px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
                     activeTask === task.id ? 'bg-[#FFB800] text-white shadow-lg' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
                   }`}>
                     {activeTask === task.id ? 'Em Prática' : 'Iniciar'}
                   </button>
                   {activeTask === task.id && <div className="text-[9px] font-black text-[#FFB800] animate-pulse">GRAVANDO...</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
            Ferramentas <i className="fa-solid fa-toolbox text-[#FFB800]"></i>
          </h3>
          
          <div className="bg-[#1A1A1A] rounded-[48px] p-10 text-white shadow-2xl space-y-10 relative overflow-hidden group">
            <div className="flex items-center justify-between relative z-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Metrônomo Digital</h4>
              <div className={`w-4 h-4 rounded-full transition-all duration-75 ${tick ? 'bg-[#FFB800] scale-150 shadow-[0_0_20px_#FFB800]' : 'bg-white/10'}`}></div>
            </div>
            
            <div className="text-center space-y-2 relative z-10">
              <div className="text-7xl font-black tracking-tighter text-white">{bpm}</div>
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Batidas por Minuto</div>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="px-2">
                <input 
                  type="range" 
                  min="40" 
                  max="240" 
                  value={bpm} 
                  onChange={(e) => setBpm(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#FFB800]"
                />
              </div>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className={`w-full py-5 rounded-[24px] font-black text-xs uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3 ${
                  isPlaying ? 'bg-red-500 text-white shadow-xl shadow-red-500/20' : 'bg-[#FFB800] text-white shadow-xl shadow-[#FFB800]/20'
                }`}
              >
                {isPlaying ? <><i className="fa-solid fa-stop"></i> Parar</> : <><i className="fa-solid fa-play"></i> Iniciar Ritmo</>}
              </button>
            </div>

            <div className="absolute -bottom-10 -left-10 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <i className="fa-solid fa-drum text-[180px]"></i>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-xl space-y-6 group cursor-pointer hover:border-[#FFB800]/30 transition-all">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-black text-gray-900">Afinador</h4>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <i className="fa-solid fa-guitar"></i>
              </div>
            </div>
            <p className="text-sm font-bold text-gray-400 leading-relaxed">Garanta que seu instrumento esteja perfeito antes de começar a praticar.</p>
            <button className="w-full py-4 border-2 border-dashed border-gray-100 text-gray-400 text-[10px] font-black rounded-2xl hover:border-[#FFB800] hover:text-[#FFB800] transition-all uppercase tracking-widest">
              Ligar Microfone de Precisão
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeworkView;


import React from 'react';

interface ActivityProps {
  student: string;
}

const ActivityView: React.FC<ActivityProps> = ({ student }) => {
  const isEnzo = student === 'Enzo';

  const weeklyData = [
    { day: 'S', hours: 1.2, goal: 1 },
    { day: 'T', hours: 0.8, goal: 1 },
    { day: 'Q', hours: 2.1, goal: 1 },
    { day: 'Q', hours: 0.5, goal: 1 },
    { day: 'S', hours: 1.5, goal: 1 },
    { day: 'S', hours: 2.5, goal: 1 },
    { day: 'D', hours: 1.8, goal: 1 },
  ];

  const milestones = [
    { title: 'Primeiro Solo', date: '12 Out 2024', icon: 'fa-trophy', color: 'text-yellow-500' },
    { title: 'Ritmo Perfeito', date: '05 Jan 2025', icon: 'fa-drum', color: 'text-blue-500' },
    { title: 'Mestre da Escala', date: '22 Mar 2025', icon: 'fa-music', color: 'text-purple-500' },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-10 pb-12">
      <div className="flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">Evolução de {student}</h2>
          <p className="text-gray-500 font-bold mt-1">Dados detalhados da jornada musical.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-gray-100 rounded-2xl text-xs font-black text-gray-400 hover:text-gray-800 transition-all shadow-sm">PDF MENSAL</button>
          <button className="px-6 py-3 bg-[#FFB800] text-white rounded-2xl text-xs font-black shadow-lg shadow-[#FFB800]/20 hover:scale-105 transition-all">COMPARTILHAR</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Card */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-xl space-y-10">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-gray-900">Tempo de Prática (Semana)</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FFB800]"></div>
                  <span className="text-[10px] font-black text-gray-400 uppercase">Realizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-100"></div>
                  <span className="text-[10px] font-black text-gray-400 uppercase">Meta</span>
                </div>
              </div>
            </div>

            <div className="relative h-64 flex items-end justify-between px-4">
              {/* Grid Lines */}
              <div className="absolute inset-x-0 top-0 h-full flex flex-col justify-between pointer-events-none opacity-20">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-full h-px bg-gray-200"></div>
                ))}
              </div>
              
              {weeklyData.map((data, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-4 group relative z-10">
                  <div className="w-full flex justify-center gap-1 items-end h-48">
                    <div 
                      className="w-4 bg-gray-100 rounded-t-lg transition-all"
                      style={{ height: `${(data.goal / 3) * 100}%` }}
                    ></div>
                    <div 
                      className="w-8 bg-[#FFB800] rounded-t-xl group-hover:brightness-110 transition-all shadow-lg shadow-[#FFB800]/10"
                      style={{ height: `${(data.hours / 3) * 100}%` }}
                    >
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-black px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {data.hours}h
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-gray-400">{data.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-xl">
             <h3 className="text-xl font-black text-gray-900 mb-8">Heatmap de Consistência</h3>
             <div className="grid grid-cols-13 gap-2">
               {Array.from({ length: 52 }).map((_, i) => (
                 <div 
                    key={i} 
                    className={`aspect-square rounded-sm ${
                      i % 7 === 0 ? 'bg-[#FFB800]' : 
                      i % 5 === 0 ? 'bg-[#FFB800]/60' : 
                      i % 3 === 0 ? 'bg-[#FFB800]/30' : 'bg-gray-50'
                    } hover:scale-125 transition-transform cursor-help shadow-sm`}
                    title={`Semana ${i + 1}`}
                  ></div>
               ))}
             </div>
             <div className="flex justify-end gap-2 mt-4 items-center">
                <span className="text-[8px] font-black text-gray-300 uppercase">Menos</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-50 rounded-sm"></div>
                  <div className="w-2 h-2 bg-[#FFB800]/30 rounded-sm"></div>
                  <div className="w-2 h-2 bg-[#FFB800]/60 rounded-sm"></div>
                  <div className="w-2 h-2 bg-[#FFB800] rounded-sm"></div>
                </div>
                <span className="text-[8px] font-black text-gray-300 uppercase">Mais</span>
             </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="bg-[#1A1A1A] p-10 rounded-[48px] text-white shadow-2xl space-y-8">
            <h3 className="text-xl font-black flex items-center gap-3">
              <i className="fa-solid fa-award text-[#FFB800]"></i> Conquistas Recentes
            </h3>
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    <i className={`fa-solid ${m.icon} ${m.color}`}></i>
                  </div>
                  <div>
                    <h4 className="font-black text-sm">{m.title}</h4>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{m.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Ver Galeria de Troféus</button>
          </div>

          <div className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-xl space-y-6">
             <h3 className="text-xl font-black text-gray-900">Nível de Habilidade</h3>
             <div className="space-y-6">
               {[
                 { label: 'Técnica', value: 82, color: 'bg-blue-500' },
                 { label: 'Ouvido', value: 65, color: 'bg-[#FFB800]' },
                 { label: 'Teoria', value: 48, color: 'bg-purple-500' },
                 { label: 'Expressão', value: 91, color: 'bg-green-500' },
               ].map((skill, i) => (
                 <div key={i} className="space-y-2">
                   <div className="flex justify-between items-center">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{skill.label}</span>
                     <span className="text-xs font-black text-gray-900">{skill.value}%</span>
                   </div>
                   <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                     <div className={`h-full ${skill.color} rounded-full`} style={{ width: `${skill.value}%` }}></div>
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

export default ActivityView;

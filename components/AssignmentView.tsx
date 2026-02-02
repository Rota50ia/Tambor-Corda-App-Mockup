
import React, { useState } from 'react';
import { Assignment } from '../types';

interface AssignmentViewProps {
  student: string;
}

const AssignmentView: React.FC<AssignmentViewProps> = ({ student }) => {
  const [submittingId, setSubmittingId] = useState<string | null>(null);
  const isEnzo = student === 'Enzo';

  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: '1',
      title: 'Teoria Musical: Escalas Maiores',
      subject: 'Teoria',
      dueDate: '20 Mai 2025',
      status: 'pending',
      description: 'Complete o exercício de identificação de armaduras de clave para as escalas de Sol e Ré Maior.',
      icon: 'fa-pen-clip'
    },
    {
      id: '2',
      title: isEnzo ? 'Vídeo: Paradiddle em 100bpm' : 'Vídeo: Troca de Acordes C-G-D',
      subject: 'Técnica',
      dueDate: '15 Mai 2025',
      status: 'done',
      description: 'Grave um vídeo de 1 minuto focando na postura das mãos e clareza sonora.',
      icon: 'fa-video'
    },
    {
      id: '3',
      title: 'Percepção: Intervalos de 3ª',
      subject: 'Ouvido',
      dueDate: '10 Mai 2025',
      status: 'graded',
      description: 'Teste de reconhecimento auditivo de intervalos ascendentes.',
      icon: 'fa-ear-listen',
      grade: '9.5',
      feedback: 'Excelente ouvido! Continue praticando os intervalos menores.'
    }
  ]);

  const handleSubmit = (id: string) => {
    setSubmittingId(id);
    setTimeout(() => {
      setAssignments(prev => prev.map(a => a.id === id ? { ...a, status: 'done' } : a));
      setSubmittingId(null);
    }, 2000);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 space-y-4 md:space-y-6 pb-12 overflow-x-hidden max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight">Tarefas Pedagógicas</h2>
          <p className="text-gray-500 font-bold mt-1 text-[10px] md:text-sm">Avaliações para {student}.</p>
        </div>
        <div className="flex gap-2 bg-white p-1 rounded-lg shadow-sm border border-gray-100 self-start">
          <button className="px-3 md:px-5 py-1.5 bg-gray-900 text-white rounded-md text-[8px] md:text-[10px] font-black uppercase tracking-widest">Ativas</button>
          <button className="px-3 md:px-5 py-1.5 text-gray-400 hover:text-gray-900 rounded-md text-[8px] md:text-[10px] font-black uppercase tracking-widest">Arquivo</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:gap-4">
        {assignments.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl md:rounded-[32px] border border-gray-100 shadow-sm overflow-hidden group hover:border-[#FFB800]/30 transition-all flex flex-col md:flex-row">
            <div className={`md:w-24 flex items-center justify-center text-xl md:text-2xl py-4 md:py-0 ${
              item.status === 'graded' ? 'bg-green-50 text-green-500' :
              item.status === 'done' ? 'bg-blue-50 text-blue-500' : 'bg-orange-50 text-orange-500'
            }`}>
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            
            <div className="flex-1 p-4 md:p-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[7px] md:text-[9px] font-black text-gray-300 uppercase tracking-widest">{item.subject}</span>
                    <span className="text-[7px] md:text-[9px] font-black text-gray-300 uppercase tracking-widest">| {item.dueDate}</span>
                  </div>
                  <h3 className="text-base md:text-xl font-black text-gray-900 leading-tight tracking-tight break-words">{item.title}</h3>
                </div>
                
                <div className={`self-start px-2 py-1 rounded-full text-[7px] md:text-[9px] font-black uppercase tracking-widest ${
                  item.status === 'graded' ? 'bg-green-100 text-green-600' :
                  item.status === 'done' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                }`}>
                  {item.status === 'graded' ? 'Nota' : item.status === 'done' ? 'Entregue' : 'Pendente'}
                </div>
              </div>

              <p className="text-gray-500 font-medium leading-relaxed text-[11px] md:text-sm line-clamp-2">{item.description}</p>

              {item.status === 'graded' && (
                <div className="p-3 md:p-4 bg-amber-50 rounded-xl md:rounded-2xl border border-amber-100 flex items-center gap-4 relative overflow-hidden">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex flex-col items-center justify-center shadow-sm border border-amber-100 flex-shrink-0">
                    <span className="text-[6px] font-black text-amber-300 uppercase leading-none mb-0.5">Nota</span>
                    <span className="text-sm md:text-xl font-black text-amber-600 leading-none">{item.grade}</span>
                  </div>
                  <p className="text-[10px] md:text-xs font-bold text-amber-900 italic font-serif leading-tight">"{item.feedback}"</p>
                </div>
              )}
            </div>

            <div className="p-4 md:p-6 bg-gray-50/30 border-t md:border-t-0 md:border-l border-gray-50 flex flex-row md:flex-col items-center justify-center gap-3 min-w-[120px] md:min-w-[160px]">
              {item.status === 'pending' ? (
                <button 
                  onClick={() => handleSubmit(item.id)}
                  disabled={submittingId === item.id}
                  className="flex-1 md:w-full py-2.5 md:py-3.5 bg-gray-900 text-white rounded-lg md:rounded-xl font-black text-[8px] md:text-[10px] uppercase tracking-widest hover:bg-[#FFB800] transition-all disabled:opacity-50"
                >
                  {submittingId === item.id ? <i className="fa-solid fa-spinner animate-spin"></i> : 'Submeter'}
                </button>
              ) : (
                <button className="flex-1 md:w-full py-2.5 md:py-3.5 bg-white border border-gray-200 text-gray-400 rounded-lg md:rounded-xl font-black text-[8px] md:text-[10px] uppercase tracking-widest hover:bg-gray-50 transition-all">Ver</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#1A1A1A] rounded-2xl md:rounded-[40px] p-5 md:p-8 text-white flex items-center gap-4 md:gap-8 relative overflow-hidden group">
        <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FFB800] rounded-xl md:rounded-2xl flex items-center justify-center text-white text-xl md:text-3xl shadow-lg relative z-10 flex-shrink-0">
          <i className="fa-solid fa-lightbulb"></i>
        </div>
        <div className="flex-1 space-y-1 relative z-10">
          <h4 className="text-sm md:text-lg font-black tracking-tight">Boost de Experiência! 🚀</h4>
          <p className="text-gray-400 font-medium leading-relaxed text-[10px] md:text-sm">
            Complete tarefas de **Teoria** e ganhe emblemas!
          </p>
        </div>
        <button className="px-4 md:px-6 py-2 md:py-3 bg-white text-gray-900 rounded-lg md:rounded-xl font-black text-[8px] md:text-[10px] uppercase tracking-widest hover:bg-[#FFB800] hover:text-white transition-all relative z-10">
          DESAFIAR
        </button>
      </div>
    </div>
  );
};

export default AssignmentView;

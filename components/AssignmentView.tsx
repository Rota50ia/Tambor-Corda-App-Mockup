
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
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 space-y-10 pb-12">
      <div className="flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">Tarefas Pedagógicas</h2>
          <p className="text-gray-500 font-bold mt-1">Exercícios formais e avaliações de desempenho para {student}.</p>
        </div>
        <div className="flex gap-3 bg-white p-1 rounded-2xl shadow-sm border border-gray-100">
          <button className="px-6 py-2 bg-gray-900 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl">Ativas</button>
          <button className="px-6 py-2 text-gray-400 hover:text-gray-900 rounded-xl text-xs font-black uppercase tracking-widest transition-all">Arquivo</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {assignments.map((item) => (
          <div key={item.id} className="bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden group hover:border-[#FFB800]/30 transition-all duration-500 flex flex-col md:flex-row">
            <div className={`md:w-32 flex items-center justify-center text-3xl py-10 md:py-0 ${
              item.status === 'graded' ? 'bg-green-50 text-green-500' :
              item.status === 'done' ? 'bg-blue-50 text-blue-500' : 'bg-orange-50 text-orange-500'
            }`}>
              <i className={`fa-solid ${item.icon} group-hover:scale-110 transition-transform`}></i>
            </div>
            
            <div className="flex-1 p-8 md:p-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{item.subject}</span>
                    <span className="w-1.5 h-1.5 bg-gray-100 rounded-full"></span>
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Prazo: {item.dueDate}</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 leading-none tracking-tight">{item.title}</h3>
                </div>
                
                <div className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  item.status === 'graded' ? 'bg-green-100 text-green-600' :
                  item.status === 'done' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                }`}>
                  {item.status === 'graded' ? 'Avaliado' : item.status === 'done' ? 'Entregue' : 'Pendente'}
                </div>
              </div>

              <p className="text-gray-500 font-medium leading-relaxed">{item.description}</p>

              {item.status === 'graded' && (
                <div className="p-8 bg-amber-50 rounded-[32px] border border-amber-100 flex flex-col md:flex-row items-start gap-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-5 rotate-12">
                     <i className="fa-solid fa-feather-pointed text-8xl text-amber-900"></i>
                  </div>
                  <div className="w-20 h-20 bg-white rounded-3xl flex flex-col items-center justify-center shadow-md border border-amber-100 flex-shrink-0 relative z-10">
                    <span className="text-[8px] font-black text-amber-300 uppercase leading-none mb-1">Nota</span>
                    <span className="text-3xl font-black text-amber-600 leading-none">{item.grade}</span>
                  </div>
                  <div className="space-y-2 relative z-10">
                    <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Feedback do Mestre</p>
                    <p className="text-lg font-bold text-amber-900 italic font-serif leading-tight">"{item.feedback}"</p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-8 md:p-10 bg-gray-50/50 border-t md:border-t-0 md:border-l border-gray-50 flex md:flex-col items-center justify-center gap-4 min-w-[200px]">
              {item.status === 'pending' ? (
                <button 
                  onClick={() => handleSubmit(item.id)}
                  disabled={submittingId === item.id}
                  className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-[#FFB800] transition-all disabled:opacity-50"
                >
                  {submittingId === id ? <i className="fa-solid fa-spinner animate-spin"></i> : 'Submeter Agora'}
                </button>
              ) : (
                <button className="w-full py-5 bg-white border border-gray-200 text-gray-400 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                  <i className="fa-solid fa-eye"></i> Ver Entrega
                </button>
              )}
              <button className="text-[10px] font-black text-gray-300 uppercase tracking-widest hover:text-gray-900 transition-colors">Precisa de Ajuda?</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#1A1A1A] rounded-[56px] p-12 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform duration-[4s]">
          <i className="fa-solid fa-graduation-cap text-[180px] text-[#FFB800]"></i>
        </div>
        <div className="w-24 h-24 bg-[#FFB800] rounded-[32px] flex items-center justify-center text-white text-4xl shadow-2xl relative z-10 animate-pulse">
          <i className="fa-solid fa-lightbulb"></i>
        </div>
        <div className="flex-1 space-y-3 relative z-10 text-center md:text-left">
          <h4 className="text-2xl font-black tracking-tight">Boost de Experiência! 🚀</h4>
          <p className="text-gray-400 font-medium leading-relaxed text-lg">
            {student}, completar o exercício de **Teoria** até amanhã garante o emblema "Mestre da Clave" e dobrará seus pontos no ranking!
          </p>
        </div>
        <button className="px-10 py-5 bg-white text-gray-900 rounded-[24px] font-black text-xs uppercase tracking-widest hover:bg-[#FFB800] hover:text-white transition-all relative z-10 shadow-xl">
          DESAFIAR AGORA
        </button>
      </div>
    </div>
  );
};

export default AssignmentView;

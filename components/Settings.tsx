
import React from 'react';

const SettingsView: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto space-y-10">
      <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl space-y-10">
        <h2 className="text-3xl font-black text-gray-900 tracking-tight">Meu Perfil</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="relative group">
            <img src="https://picsum.photos/seed/parent/200/200" className="w-40 h-40 rounded-[40px] border-4 border-white shadow-2xl transition-transform group-hover:scale-105" alt="User" />
            <button className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#FFB800] text-white rounded-2xl border-4 border-white flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors">
              <i className="fa-solid fa-camera"></i>
            </button>
          </div>
          
          <div className="flex-1 w-full space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">NOME</label>
                <input type="text" defaultValue="Juliana" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none font-bold text-gray-700 outline-none focus:ring-2 focus:ring-[#FFB800]/20 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">SOBRENOME</label>
                <input type="text" defaultValue="Lima" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none font-bold text-gray-700 outline-none focus:ring-2 focus:ring-[#FFB800]/20 transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">E-MAIL</label>
              <div className="relative">
                <i className="fa-solid fa-envelope absolute left-6 top-1/2 -translate-y-1/2 text-gray-300"></i>
                <input type="email" defaultValue="juliana.lima@example.com" className="w-full pl-14 pr-6 py-4 bg-gray-50 rounded-2xl border-none font-bold text-gray-700 outline-none focus:ring-2 focus:ring-[#FFB800]/20 transition-all" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <button className="px-10 py-4 bg-[#FFB800] text-white rounded-2xl font-black text-sm shadow-xl shadow-[#FFB800]/20 hover:bg-orange-600 transition-all">Salvar Alterações</button>
          <button className="px-10 py-4 bg-gray-50 text-gray-400 hover:text-gray-600 rounded-2xl font-black text-sm transition-all">Mudar Senha</button>
        </div>
      </div>

      <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-gray-900">Alunos Vinculados</h2>
          <button className="text-[#FFB800] font-black text-sm flex items-center gap-2 hover:opacity-80">
            <i className="fa-solid fa-circle-plus"></i> Adicionar Aluno
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'Enzo', level: '8º Ano - Bateria', seed: 'enzo' },
            { name: 'Sophia', level: 'Fundamental - Violão', seed: 'sophia' },
          ].map(kid => (
            <div key={kid.name} className="p-6 rounded-[32px] border border-gray-50 bg-[#FDFEFE] hover:border-[#FFB800]/30 transition-all flex items-center gap-6 group shadow-sm">
              <img src={`https://picsum.photos/seed/${kid.seed}/100/100`} className="w-16 h-16 rounded-[20px] shadow-sm" alt={kid.name} />
              <div className="flex-1">
                <h4 className="text-lg font-black text-gray-900">{kid.name}</h4>
                <p className="text-xs font-bold text-gray-400">{kid.level}</p>
              </div>
              <button className="w-10 h-10 rounded-xl hover:bg-gray-100 text-gray-300 hover:text-gray-600 transition-all"><i className="fa-solid fa-pen"></i></button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl space-y-8">
        <h2 className="text-2xl font-black text-gray-900">Preferências do App</h2>
        <div className="space-y-4">
          {[
            { id: 1, icon: 'fa-file-lines', title: 'Relatório Semanal', desc: 'Receba um resumo do desempenho toda sexta-feira.' },
            { id: 2, icon: 'fa-bell', title: 'Alertas de Feedback', desc: 'Seja notificado quando um professor deixar feedback.' },
            { id: 3, icon: 'fa-volume-high', title: 'Efeitos Sonoros', desc: 'Toque sons divertidos ao completar tarefas.' },
          ].map(pref => (
            <div key={pref.id} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-none">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-[#FFB800] transition-all">
                  <i className={`fa-solid ${pref.icon}`}></i>
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-800">{pref.title}</h4>
                  <p className="text-xs font-medium text-gray-400">{pref.desc}</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-[#FFB800] rounded-full relative shadow-inner cursor-pointer">
                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow-md"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsView;

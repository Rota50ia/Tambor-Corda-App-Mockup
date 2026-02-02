
import React from 'react';

const MessagesView: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 h-[calc(100vh-280px)] min-h-[600px] flex bg-white rounded-[40px] border border-gray-100 shadow-2xl overflow-hidden">
      {/* Sidebar - Chat List */}
      <div className="w-1/3 border-r border-gray-50 bg-white flex flex-col">
        <div className="p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-gray-900">Mensagens</h3>
            <button className="w-10 h-10 bg-[#FFB800]/10 text-[#FFB800] rounded-2xl flex items-center justify-center hover:bg-[#FFB800] hover:text-white transition-all">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
          <div className="relative group">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#FFB800] transition-all"></i>
            <input 
              type="text" 
              placeholder="Buscar conversas..." 
              className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-none text-sm font-bold text-gray-700 focus:ring-2 focus:ring-[#FFB800]/20 transition-all outline-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2 no-scrollbar">
          {[
            { id: 1, name: 'Prof. Ricardo', last: 'Enzo foi ótimo no ensaio hoje!', time: '10:42 AM', active: true, online: true, tag: 'Bateria' },
            { id: 2, name: 'Coordenação Escolar', last: 'Recital de inverno: Informações importantes.', time: 'Ontem', active: false, online: false, tag: 'Geral' },
            { id: 3, name: 'Prof. Ana (Violão)', last: 'Os exercícios de escala estão prontos.', time: 'Segunda', active: false, online: true, tag: 'Violão' },
          ].map(chat => (
            <div key={chat.id} className={`p-4 rounded-[24px] cursor-pointer transition-all flex items-center gap-4 group ${
              chat.active ? 'bg-[#FFFCEB] border border-[#FFB800]/30 shadow-sm' : 'hover:bg-gray-50'
            }`}>
              <div className="relative">
                <img src={`https://picsum.photos/seed/${chat.id}/100/100`} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt={chat.name} />
                {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="font-extrabold text-gray-900 truncate">{chat.name}</h4>
                  <span className="text-[10px] font-bold text-gray-400">{chat.time}</span>
                </div>
                <p className="text-xs text-gray-400 font-medium truncate">{chat.last}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-[#FDFEFE]">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src="https://picsum.photos/seed/1/100/100" className="w-12 h-12 rounded-full" alt="Ricardo" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h4 className="font-black text-gray-900">Prof. Ricardo</h4>
              <p className="text-[10px] font-black text-green-500 uppercase tracking-widest flex items-center gap-1">
                <span className="w-1 h-1 bg-green-500 rounded-full"></span> Online agora
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-xl hover:bg-gray-50 text-gray-400 transition-all"><i className="fa-solid fa-phone"></i></button>
            <button className="w-10 h-10 rounded-xl hover:bg-gray-50 text-gray-400 transition-all"><i className="fa-solid fa-video"></i></button>
            <button className="w-10 h-10 rounded-xl hover:bg-gray-50 text-gray-400 transition-all"><i className="fa-solid fa-circle-info"></i></button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-10 space-y-8 no-scrollbar">
          <div className="flex justify-center">
            <span className="px-4 py-1.5 bg-gray-100/50 text-gray-400 text-[10px] font-black rounded-full uppercase tracking-widest">Hoje</span>
          </div>

          <div className="flex flex-col items-start gap-3 max-w-[80%]">
            <div className="bg-white p-6 rounded-[28px] rounded-tl-none shadow-sm border border-gray-100 relative group">
              <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                Olá Lima! Só queria avisar que o Enzo foi incrível no ensaio hoje. Ele finalmente dominou aquela virada de bateria difícil! 🤘
              </p>
              <span className="text-[10px] font-bold text-gray-300 mt-2 block">10:30 AM</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3 max-w-[80%] ml-auto">
            <div className="bg-[#FFB800] p-6 rounded-[28px] rounded-tr-none shadow-lg shadow-[#FFB800]/20 relative">
              <p className="text-sm font-extrabold text-white leading-relaxed">
                Que notícia maravilhosa! Obrigado Prof. Ricardo. Ele estava praticando todo dia no sofá (rs).
              </p>
              <span className="text-[10px] font-bold text-white/70 mt-2 block">10:32 AM</span>
            </div>
          </div>
        </div>

        <div className="p-8 bg-white border-t border-gray-50">
          <div className="flex items-center gap-4 bg-gray-50 rounded-3xl p-2 focus-within:ring-2 focus-within:ring-[#FFB800]/20 transition-all border border-transparent">
            <button className="w-12 h-12 rounded-2xl text-gray-400 hover:bg-white hover:text-[#FFB800] transition-all"><i className="fa-solid fa-plus"></i></button>
            <input 
              type="text" 
              placeholder="Digite sua mensagem..." 
              className="flex-1 bg-transparent border-none text-sm font-bold text-gray-700 outline-none p-2"
            />
            <div className="flex items-center gap-2 px-2">
              <button className="w-10 h-10 rounded-xl text-gray-400 hover:text-gray-600"><i className="fa-solid fa-image"></i></button>
              <button className="w-10 h-10 rounded-xl text-gray-400 hover:text-gray-600"><i className="fa-solid fa-paperclip"></i></button>
              <button className="w-12 h-12 bg-[#FFB800] text-white rounded-2xl shadow-md shadow-[#FFB800]/20 hover:scale-105 transition-all">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesView;

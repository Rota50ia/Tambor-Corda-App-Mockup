
import React, { useState } from 'react';

const MessagesView: React.FC = () => {
  const [activeChatId, setActiveChatId] = useState<number | null>(1); // 1 is default active chat
  const [showChatList, setShowChatList] = useState(true);

  const chats = [
    { id: 1, name: 'Prof. Ricardo', last: 'Enzo foi ótimo no ensaio hoje!', time: '10:42 AM', online: true, tag: 'Bateria' },
    { id: 2, name: 'Coordenação Escolar', last: 'Recital de inverno: Informações importantes.', time: 'Ontem', online: false, tag: 'Geral' },
    { id: 3, name: 'Prof. Ana (Violão)', last: 'Os exercícios de escala estão prontos.', time: 'Segunda', online: true, tag: 'Violão' },
  ];

  const activeChat = chats.find(c => c.id === activeChatId) || chats[0];

  const handleChatSelect = (id: number) => {
    setActiveChatId(id);
    setShowChatList(false); // Hide list on mobile when a chat is selected
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 h-[calc(100vh-200px)] md:h-[calc(100vh-280px)] min-h-[500px] md:min-h-[600px] flex bg-white rounded-[24px] md:rounded-[40px] border border-gray-100 shadow-2xl overflow-hidden relative">
      
      {/* Sidebar - Chat List */}
      <div className={`${showChatList ? 'flex' : 'hidden md:flex'} w-full md:w-1/3 border-r border-gray-50 bg-white flex-col z-20`}>
        <div className="p-6 md:p-8 space-y-4 md:space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-black text-gray-900">Mensagens</h3>
            <button className="w-8 h-8 md:w-10 md:h-10 bg-[#FFB800]/10 text-[#FFB800] rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-[#FFB800] hover:text-white transition-all">
              <i className="fa-solid fa-pen-to-square text-sm"></i>
            </button>
          </div>
          <div className="relative group">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#FFB800] transition-all"></i>
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 bg-gray-50 rounded-xl md:rounded-2xl border-none text-xs md:text-sm font-bold text-gray-700 focus:ring-2 focus:ring-[#FFB800]/20 transition-all outline-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-1 md:space-y-2 no-scrollbar">
          {chats.map(chat => (
            <div 
              key={chat.id} 
              onClick={() => handleChatSelect(chat.id)}
              className={`p-3 md:p-4 rounded-xl md:rounded-[24px] cursor-pointer transition-all flex items-center gap-3 md:gap-4 group ${
                activeChatId === chat.id ? 'bg-[#FFFCEB] border border-[#FFB800]/30 shadow-sm' : 'hover:bg-gray-50'
              }`}
            >
              <div className="relative flex-shrink-0">
                <img src={`https://picsum.photos/seed/${chat.id}/100/100`} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm" alt={chat.name} />
                {chat.online && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white"></div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="font-extrabold text-gray-900 truncate text-xs md:text-sm">{chat.name}</h4>
                  <span className="text-[8px] md:text-[10px] font-bold text-gray-400">{chat.time}</span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-400 font-medium truncate">{chat.last}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className={`${!showChatList ? 'flex' : 'hidden md:flex'} flex-1 flex flex-col bg-[#FDFEFE] z-10`}>
        <div className="px-4 md:px-8 py-4 md:py-6 border-b border-gray-50 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-3 md:gap-4">
            <button 
              onClick={() => setShowChatList(true)}
              className="md:hidden w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="relative">
              <img src={`https://picsum.photos/seed/${activeChat.id}/100/100`} className="w-8 h-8 md:w-12 md:h-12 rounded-full" alt={activeChat.name} />
              {activeChat.online && <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white"></div>}
            </div>
            <div>
              <h4 className="font-black text-gray-900 text-sm md:text-base leading-tight">{activeChat.name}</h4>
              <p className="text-[8px] md:text-[10px] font-black text-green-500 uppercase tracking-widest flex items-center gap-1">
                <span className="w-1 h-1 bg-green-500 rounded-full"></span> Online
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <button className="w-8 h-8 md:w-10 md:h-10 rounded-xl hover:bg-gray-50 text-gray-400 transition-all"><i className="fa-solid fa-phone text-xs md:text-sm"></i></button>
            <button className="hidden sm:flex w-10 h-10 rounded-xl hover:bg-gray-50 text-gray-400 transition-all items-center justify-center"><i className="fa-solid fa-video text-sm"></i></button>
            <button className="w-8 h-8 md:w-10 md:h-10 rounded-xl hover:bg-gray-50 text-gray-400 transition-all"><i className="fa-solid fa-circle-info text-xs md:text-sm"></i></button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-6 md:space-y-8 no-scrollbar">
          <div className="flex justify-center">
            <span className="px-3 md:px-4 py-1 bg-gray-100/50 text-gray-400 text-[8px] md:text-[10px] font-black rounded-full uppercase tracking-widest">Hoje</span>
          </div>

          <div className="flex flex-col items-start gap-2 md:gap-3 max-w-[90%] md:max-w-[80%]">
            <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-[28px] rounded-tl-none shadow-sm border border-gray-100 relative group">
              <p className="text-xs md:text-sm font-semibold text-gray-700 leading-relaxed">
                Olá Juliana! Só queria avisar que o Enzo foi incrível no ensaio hoje. Ele finalmente dominou aquela virada de bateria difícil! 🤘
              </p>
              <span className="text-[8px] md:text-[10px] font-bold text-gray-300 mt-2 block">10:30 AM</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 md:gap-3 max-w-[90%] md:max-w-[80%] ml-auto">
            <div className="bg-[#FFB800] p-4 md:p-6 rounded-2xl md:rounded-[28px] rounded-tr-none shadow-lg shadow-[#FFB800]/20 relative">
              <p className="text-xs md:text-sm font-extrabold text-white leading-relaxed">
                Que notícia maravilhosa! Obrigado Prof. Ricardo. Ele estava praticando todo dia no sofá (rs).
              </p>
              <span className="text-[8px] md:text-[10px] font-bold text-white/70 mt-2 block">10:32 AM</span>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-8 bg-white border-t border-gray-50">
          <div className="flex items-center gap-2 md:gap-4 bg-gray-50 rounded-2xl md:rounded-3xl p-1.5 md:p-2 focus-within:ring-2 focus-within:ring-[#FFB800]/20 transition-all border border-transparent">
            <button className="w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl text-gray-400 hover:bg-white hover:text-[#FFB800] transition-all"><i className="fa-solid fa-plus text-xs md:text-base"></i></button>
            <input 
              type="text" 
              placeholder="Mensagem..." 
              className="flex-1 bg-transparent border-none text-xs md:text-sm font-bold text-gray-700 outline-none p-2"
            />
            <div className="flex items-center gap-1 md:gap-2 px-1">
              <button className="hidden sm:flex w-10 h-10 rounded-xl text-gray-400 hover:text-gray-600 items-center justify-center"><i className="fa-solid fa-image text-sm"></i></button>
              <button className="w-8 h-8 md:w-12 md:h-12 bg-[#FFB800] text-white rounded-xl md:rounded-2xl shadow-md shadow-[#FFB800]/20 hover:scale-105 transition-all flex items-center justify-center">
                <i className="fa-solid fa-paper-plane text-xs md:text-base"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesView;

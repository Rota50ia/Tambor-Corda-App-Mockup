
import React from 'react';

const WhatsAppDemo: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="text-4xl font-black text-gray-900">Integração Omni-channel</h2>
        <p className="text-lg text-gray-400 font-medium leading-relaxed">
          Mantenha os pais informados onde eles estiverem. Receba atualizações automáticas do progresso musical via WhatsApp e iMessage.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* WhatsApp Mockup */}
        <div className="relative w-[340px] h-[680px] bg-[#111B21] rounded-[60px] border-[12px] border-[#313B41] shadow-2xl overflow-hidden group">
          <div className="absolute top-0 w-full h-8 bg-[#313B41] z-20 flex justify-center items-end pb-1">
             <div className="w-20 h-4 bg-black rounded-b-xl"></div>
          </div>
          
          <div className="h-full pt-8 flex flex-col">
            <div className="bg-[#202C33] p-4 flex items-center gap-3">
              <i className="fa-solid fa-arrow-left text-gray-400"></i>
              <div className="w-10 h-10 bg-[#FFB800] rounded-full flex items-center justify-center text-white">
                <i className="fa-solid fa-infinity"></i>
              </div>
              <div className="flex-1">
                <h5 className="text-white text-sm font-bold">Bot Tambor & Corda</h5>
                <p className="text-[10px] text-green-500">Business Account</p>
              </div>
            </div>

            <div className="flex-1 p-4 bg-[#0B141A] space-y-4 overflow-y-auto no-scrollbar" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: 'cover' }}>
               <div className="flex justify-center">
                 <span className="bg-[#182229] text-[10px] text-gray-400 px-2 py-1 rounded-md uppercase">Hoje</span>
               </div>
               
               <div className="bg-[#202C33] p-4 rounded-xl rounded-tl-none max-w-[90%] shadow-md border-l-4 border-l-[#FFB800]">
                 <h6 className="text-[#FFB800] text-xs font-black mb-2">Relatório Diário Enzo 🥁</h6>
                 <p className="text-white text-[11px] leading-relaxed mb-3">
                    Olá Sr. e Sra. Lima! Aqui está o resumo do Enzo hoje:<br/><br/>
                    🎸 Solo Guitarra: **Ótimo trabalho! (95%)**<br/>
                    🥁 Bateria: **Paradiddle Dominado!**<br/><br/>
                    📝 *Nota do Prof:* Enzo estava muito focado na aula de rítmica hoje. Ele está pronto para o recital!
                 </p>
                 <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-[9px]">10:30 AM</span>
                    <i className="fa-solid fa-check-double text-blue-500 text-[10px]"></i>
                 </div>
               </div>

               <div className="flex justify-end">
                 <div className="bg-[#005C4B] p-3 rounded-xl rounded-tr-none max-w-[80%] shadow-md">
                    <p className="text-white text-[11px] font-bold tracking-tight uppercase">DETALHES</p>
                 </div>
               </div>
            </div>

            <div className="bg-[#202C33] p-4 flex items-center gap-2">
               <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2 text-gray-400 text-xs flex items-center gap-2">
                 <i className="fa-solid fa-face-smile"></i>
                 <span>Mensagem</span>
               </div>
               <div className="w-10 h-10 bg-[#00A884] rounded-full flex items-center justify-center text-white text-sm shadow-md">
                 <i className="fa-solid fa-microphone"></i>
               </div>
            </div>
          </div>
        </div>

        {/* iMessage Mockup */}
        <div className="relative w-[340px] h-[680px] bg-white rounded-[60px] border-[12px] border-gray-100 shadow-2xl overflow-hidden">
          <div className="absolute top-0 w-full h-8 bg-gray-100 z-20 flex justify-center items-end pb-1">
             <div className="w-20 h-4 bg-black rounded-b-xl"></div>
          </div>

          <div className="h-full pt-10 flex flex-col bg-white">
            <div className="px-6 py-4 flex flex-col items-center gap-1 border-b border-gray-50">
               <i className="fa-solid fa-chevron-left absolute left-6 top-14 text-blue-500"></i>
               <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#FFB800] text-xl border border-gray-100">
                <i className="fa-solid fa-infinity"></i>
               </div>
               <h5 className="text-[11px] font-black text-gray-900">Tambor & Corda</h5>
            </div>

            <div className="flex-1 p-6 space-y-6">
              <div className="flex justify-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">iMessage • Hoje 10:30 AM</span>
              </div>

              <div className="bg-gray-100 p-5 rounded-[24px] rounded-tl-none max-w-[90%] space-y-4">
                 <div>
                    <h6 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Assunto: Resumo de Aula</h6>
                    <h4 className="text-xs font-black text-gray-900">Parabéns pelo progresso! 🎶</h4>
                 </div>
                 <p className="text-gray-700 text-[11px] leading-relaxed">
                   Seu filho Enzo teve uma performance excepcional hoje. Veja o boletim de competências atualizado no app.
                 </p>
                 <div className="bg-white p-3 rounded-2xl border border-gray-200 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FFB800]/10 text-[#FFB800] rounded-xl flex items-center justify-center">
                      <i className="fa-solid fa-file-waveform"></i>
                    </div>
                    <div>
                      <h6 className="text-[10px] font-black text-gray-800">Boletim_Enzo_Maio.pdf</h6>
                      <p className="text-[9px] font-bold text-gray-400">1.2 MB</p>
                    </div>
                 </div>
              </div>

              <div className="flex justify-end">
                 <div className="bg-blue-500 p-4 rounded-[24px] rounded-tr-none text-white text-[11px] font-bold shadow-md shadow-blue-500/20">
                   Incrível, obrigado! 🎸
                 </div>
              </div>
            </div>

            <div className="p-4 bg-white border-t border-gray-50 flex items-center gap-4">
               <i className="fa-solid fa-camera text-gray-400"></i>
               <i className="fa-solid fa-store text-gray-400"></i>
               <div className="flex-1 bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-xs text-gray-300">
                 iMessage
               </div>
               <i className="fa-solid fa-microphone text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppDemo;

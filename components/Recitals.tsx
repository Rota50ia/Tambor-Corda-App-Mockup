
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

interface RecitalsProps {
  student: string;
}

const RecitalsView: React.FC<RecitalsProps> = ({ student }) => {
  const [stageImage, setStageImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const upcomingEvent = {
    title: "Recital de Inverno 2025",
    date: "25 de Julho, 2025",
    location: "Teatro Municipal",
    countdown: "45 dias",
    repertoire: student === 'Enzo' ? "Smells Like Teen Spirit - Nirvana (Bateria)" : "Garota de Ipanema - Tom Jobim (Violão)",
    image: "https://images.unsplash.com/photo-1514320298324-a4a248ad54ae?auto=format&fit=crop&q=80&w=1200"
  };

  const generateDreamStage = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `A cinematic, ultra-high-quality professional music stage designed for a ${student === 'Enzo' ? 'rock drummer' : 'classical guitarist'}. Moody lighting, holographic elements, music school aesthetic, purple and gold color scheme, 8k resolution.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: prompt }] },
        config: {
          imageConfig: { aspectRatio: "16:9" }
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setStageImage(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (error) {
      console.error("Erro ao gerar palco:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-12 pb-12">
      {/* Event Hero */}
      <div className="relative h-[400px] rounded-[48px] overflow-hidden shadow-2xl group">
        <img 
          src={upcomingEvent.image} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          alt="Recital" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-[#FFB800] text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">PRÓXIMO EVENTO</span>
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-black rounded-full uppercase tracking-widest">{upcomingEvent.countdown} PARA O SHOW</span>
          </div>
          <h2 className="text-5xl font-black text-white tracking-tighter mb-4">{upcomingEvent.title}</h2>
          <div className="flex flex-wrap gap-8 text-white/80 font-bold text-sm">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-calendar-star text-[#FFB800]"></i>
              {upcomingEvent.date}
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-[#FFB800]"></i>
              {upcomingEvent.location}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Details */}
        <div className="lg:col-span-2 bg-white rounded-[40px] border border-gray-100 shadow-xl p-10 space-y-8">
          <div className="flex items-center justify-between border-b border-gray-50 pb-6">
            <h3 className="text-2xl font-black text-gray-900">Sua Performance</h3>
            <button className="px-6 py-2 bg-gray-50 text-gray-400 text-xs font-black rounded-2xl hover:bg-[#FFB800] hover:text-white transition-all">EDITAR REPERTÓRIO</button>
          </div>

          <div className="bg-[#FFFCEB] p-8 rounded-3xl border border-[#FFB800]/20 flex items-center gap-8 group">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl text-[#FFB800] group-hover:scale-110 transition-transform">
              <i className={`fa-solid ${student === 'Enzo' ? 'fa-drum' : 'fa-guitar'}`}></i>
            </div>
            <div>
              <h4 className="text-xl font-black text-gray-900 mb-1">{upcomingEvent.repertoire}</h4>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Nível: Intermediário • Solo</p>
            </div>
          </div>

          {/* AI Virtual Stage Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-black text-gray-900">IA Virtual Stage</h4>
              <button 
                onClick={generateDreamStage}
                disabled={isGenerating}
                className="px-4 py-2 bg-gray-900 text-white text-[10px] font-black rounded-xl hover:bg-[#FFB800] transition-all disabled:opacity-50 flex items-center gap-2 uppercase tracking-widest"
              >
                {isGenerating ? <i className="fa-solid fa-spinner animate-spin"></i> : <i className="fa-solid fa-sparkles"></i>}
                Visualizar Palco Ideal
              </button>
            </div>
            
            <div className="relative aspect-video bg-gray-50 rounded-[32px] overflow-hidden border-2 border-dashed border-gray-100 flex items-center justify-center group">
              {stageImage ? (
                <img src={stageImage} className="w-full h-full object-cover animate-in fade-in zoom-in duration-500" alt="Palco Gerado" />
              ) : (
                <div className="text-center p-8 space-y-4 opacity-40">
                  <i className="fa-solid fa-wand-magic-sparkles text-5xl"></i>
                  <p className="text-xs font-black uppercase tracking-widest">Clique acima para gerar o palco dos seus sonhos com IA</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Guest List & Tickets */}
        <div className="space-y-8">
          <div className="bg-[#1A1A1A] rounded-[40px] p-8 text-white shadow-2xl space-y-6">
            <h3 className="text-xl font-black flex items-center gap-3">
              <i className="fa-solid fa-ticket text-[#FFB800]"></i> Convites
            </h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              Cada aluno tem direito a 4 convites cortesia para familiares. Convites extras podem ser adquiridos na secretaria.
            </p>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">DISPONÍVEIS</span>
                <p className="text-2xl font-black">02</p>
              </div>
              <button className="px-6 py-2 bg-[#FFB800] text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-[#FFB800]/20">GERAR QR CODE</button>
            </div>
          </div>

          <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl p-8 space-y-6">
             <h3 className="text-xl font-black text-gray-900">Galeria de Vídeos</h3>
             <div className="space-y-4">
               {[1, 2].map(i => (
                 <div key={i} className="relative group cursor-pointer overflow-hidden rounded-2xl">
                    <img src={`https://picsum.photos/seed/recital${i}/400/225`} className="w-full aspect-video object-cover transition-transform group-hover:scale-105" alt="Performance" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#FFB800] shadow-xl">
                        <i className="fa-solid fa-play ml-1"></i>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[8px] font-bold text-white uppercase tracking-widest">RECITAL {2024 - i}</div>
                 </div>
               ))}
             </div>
             <button className="w-full py-3 bg-gray-50 text-gray-400 font-black text-[10px] rounded-xl hover:bg-gray-100 uppercase tracking-widest">Ver Tudo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecitalsView;


import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

interface StudioViewProps {
  student: string;
}

const StudioView: React.FC<StudioViewProps> = ({ student }) => {
  const [prompt, setPrompt] = useState(`Um vídeo cinematográfico de um jovem ${student === 'Enzo' ? 'baterista' : 'violonista'} em um palco iluminado por luzes neon roxas e douradas, atmosfera épica de concerto.`);
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState<string | null>(null);

  const loadingMessages = [
    "Afinando as câmeras virtuais...",
    "Compondo a iluminação do palco...",
    "Renderizando a performance épica...",
    "Capturando a alma do ritmo...",
    "Finalizando a edição cinematográfica..."
  ];

  const generateTeaser = async () => {
    setError(null);
    setIsGenerating(true);
    setVideoUrl(null);
    
    try {
      // Check for API key and prompt if not present
      const hasKey = await (window as any).aistudio?.hasSelectedApiKey();
      if (!hasKey) {
        await (window as any).aistudio?.openSelectKey();
        // Assuming success after opening, as per instructions to avoid race conditions
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      let messageIndex = 0;
      const messageInterval = setInterval(() => {
        setStatusMessage(loadingMessages[messageIndex % loadingMessages.length]);
        messageIndex++;
      }, 5000);

      setStatusMessage(loadingMessages[0]);

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      clearInterval(messageInterval);
      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const videoBlob = await videoResponse.blob();
        setVideoUrl(URL.createObjectURL(videoBlob));
      } else {
        throw new Error("Falha ao obter o link do vídeo.");
      }
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        // Reset key selection if entity not found (usually means key/project issue)
        setError("Erro de permissão ou projeto não encontrado. Por favor, selecione uma chave de API vinculada a um projeto faturado.");
        await (window as any).aistudio?.openSelectKey();
      } else {
        setError("Não foi possível gerar o vídeo agora. Verifique sua conexão e saldo de API.");
      }
    } finally {
      setIsGenerating(false);
      setStatusMessage('');
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-12 pb-12">
      <div className="flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">Estúdio Criativo</h2>
          <p className="text-gray-500 font-bold mt-1">Crie teasers cinematográficos para seus próximos shows.</p>
        </div>
        <div className="flex flex-col items-end gap-2">
           <div className="flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full border border-blue-100 shadow-sm">
            <i className="fa-solid fa-bolt"></i> Powered by Veo 3.1
          </div>
          <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Requer chave de API paga</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-xl space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-gray-900">Roteiro do Teaser</h3>
            <p className="text-sm font-medium text-gray-400 leading-relaxed">
              Descreva como você imagina a performance ideal do {student}. Nossa IA Veo transformará seu texto em um vídeo de alta qualidade.
            </p>
            <div className="relative group">
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-48 p-6 bg-gray-50 rounded-3xl border-none font-bold text-gray-700 outline-none focus:ring-4 focus:ring-[#FFB800]/5 transition-all resize-none"
                placeholder="Ex: Um concerto de piano sob a aurora boreal..."
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button 
                  onClick={() => setPrompt(`Um vídeo de alta energia de um ${student === 'Enzo' ? 'baterista' : 'violonista'} tocando em um festival de música ao pôr do sol, multidão animada ao fundo.`)}
                  className="p-2 bg-white text-gray-400 rounded-xl hover:text-[#FFB800] shadow-sm transition-all border border-gray-100"
                  title="Prompt Aleatório"
                >
                  <i className="fa-solid fa-shuffle text-xs"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-xs font-bold animate-in fade-in slide-in-from-top-2">
                <i className="fa-solid fa-circle-exclamation"></i>
                {error}
              </div>
            )}
            <button 
              onClick={generateTeaser}
              disabled={isGenerating || !prompt}
              className={`w-full py-6 rounded-3xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl flex items-center justify-center gap-4 ${
                isGenerating ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-[#FFB800] hover:scale-[1.02] shadow-gray-200'
              }`}
            >
              {isGenerating ? (
                <>
                  <i className="fa-solid fa-spinner animate-spin"></i>
                  PRODUZINDO...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-wand-magic-sparkles text-[#FFB800]"></i>
                  GERAR VÍDEO CINEMATOGRÁFICO
                </>
              )}
            </button>
            <p className="text-[10px] text-center font-black text-gray-300 uppercase tracking-widest">A geração pode levar alguns minutos • <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="underline hover:text-gray-900">Documentação de Faturamento</a></p>
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-[48px] overflow-hidden shadow-2xl relative flex items-center justify-center min-h-[400px]">
          {isGenerating ? (
            <div className="text-center space-y-8 animate-in fade-in duration-500 px-10">
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 border-4 border-[#FFB800]/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-[#FFB800] rounded-full border-t-transparent animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fa-solid fa-clapperboard text-[#FFB800] text-3xl"></i>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-black text-xl tracking-tight">{statusMessage}</h4>
                <div className="flex gap-1 justify-center">
                  {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 bg-[#FFB800] rounded-full animate-bounce" style={{ animationDelay: `${i * 150}ms` }}></div>)}
                </div>
              </div>
            </div>
          ) : videoUrl ? (
            <div className="w-full h-full animate-in zoom-in duration-700">
              <video 
                src={videoUrl} 
                className="w-full h-full object-cover" 
                controls 
                autoPlay 
                loop
              />
              <div className="absolute top-6 right-6">
                 <a 
                  href={videoUrl} 
                  download={`teaser-${student}.mp4`}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-[#FFB800] transition-all"
                 >
                   <i className="fa-solid fa-download"></i>
                 </a>
              </div>
            </div>
          ) : (
            <div className="text-center p-12 space-y-6 max-w-sm opacity-30">
              <i className="fa-solid fa-film text-8xl text-white"></i>
              <h4 className="text-white font-black text-lg">Seu Teaser Aparecerá Aqui</h4>
              <p className="text-gray-500 text-xs font-bold leading-relaxed">
                Personalize o roteiro e clique em gerar para ver a mágica cinematográfica do Veo em ação.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Qualidade 1080p", icon: "fa-expand", text: "Vídeos em alta definição prontos para redes sociais." },
          { title: "Consistência de Personagem", icon: "fa-user-check", text: "A IA entende o estilo musical do aluno no vídeo." },
          { title: "Exportação Direta", icon: "fa-share-nodes", text: "Baixe e compartilhe o progresso com amigos e família." }
        ].map((feat, i) => (
          <div key={i} className="bg-white p-8 rounded-[36px] border border-gray-100 shadow-sm flex items-center gap-6 group hover:border-[#FFB800]/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-400 group-hover:text-[#FFB800] group-hover:bg-[#FFFCEB] flex items-center justify-center text-xl transition-all">
              <i className={`fa-solid ${feat.icon}`}></i>
            </div>
            <div>
              <h5 className="text-[10px] font-black text-gray-900 uppercase tracking-widest mb-1">{feat.title}</h5>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">{feat.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudioView;

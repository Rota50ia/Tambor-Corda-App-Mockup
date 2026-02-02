
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface AITutorProps {
  student: string;
}

const AITutor: React.FC<AITutorProps> = ({ student }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: `Olá ${student}! Eu sou seu mentor musical da Tambor & Corda. Como posso te ajudar com sua prática hoje? 🎵` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Sugira um aquecimento rítmico",
    "Explique o círculo de quintas",
    "Como melhorar minha postura?",
    "Exercícios para independência das mãos"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, streamingText]);

  const handleSend = async (textOverride?: string) => {
    const userMsg = textOverride || input.trim();
    if (!userMsg || isLoading) return;

    if (!textOverride) setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);
    setStreamingText('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: [
          ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
          { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: {
          systemInstruction: `Você é o "Mestre Tambor", um mentor de música gentil e encorajador da escola de música Tambor & Corda. Seu objetivo é ajudar o aluno ${student} a praticar melhor, tirar dúvidas de teoria musical e sugerir exercícios divertidos. Seja breve, use emojis musicais e sempre foque no instrumento que o aluno toca (Enzo=Bateria, Sophia=Violão). Use Markdown para formatar tabelas de exercícios ou diagramas de acordes se necessário.`,
          thinkingConfig: { thinkingBudget: 500 }
        }
      });

      let fullText = '';
      for await (const chunk of responseStream) {
        const chunkText = chunk.text;
        if (chunkText) {
          fullText += chunkText;
          setStreamingText(fullText);
        }
      }

      setMessages(prev => [...prev, { role: 'model', text: fullText }]);
      setStreamingText('');
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Houve um erro na conexão. Vamos tentar afinar esse canal novamente? 🎸" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 h-[calc(100vh-280px)] flex flex-col bg-white rounded-[56px] border border-gray-100 shadow-[0_50px_100px_rgba(0,0,0,0.08)] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FFB800 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

      <div className="p-10 border-b border-gray-50 bg-white/80 backdrop-blur-md flex items-center justify-between relative z-10">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 bg-gradient-to-br from-[#FFB800] to-orange-500 rounded-[24px] flex items-center justify-center text-white shadow-2xl shadow-orange-500/20 rotate-3">
            <i className="fa-solid fa-wand-magic-sparkles text-2xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-black text-gray-900 tracking-tight">Mestre Tambor</h3>
            <p className="text-[10px] font-black text-[#FFB800] uppercase tracking-[0.3em]">IA Mentor Educacional</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Live Learning</span>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-8 no-scrollbar relative z-10">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-7 rounded-[32px] ${
              m.role === 'user' 
                ? 'bg-gray-900 text-white rounded-tr-none shadow-2xl' 
                : 'bg-white text-gray-800 rounded-tl-none border border-gray-100 shadow-sm'
            }`}>
              <p className="text-base font-medium leading-relaxed whitespace-pre-wrap">{m.text}</p>
            </div>
          </div>
        ))}
        
        {streamingText && (
          <div className="flex justify-start">
            <div className="max-w-[85%] p-7 rounded-[32px] bg-white text-gray-800 rounded-tl-none border border-gray-100 shadow-sm">
              <p className="text-base font-medium leading-relaxed whitespace-pre-wrap">{streamingText}</p>
              <span className="inline-block w-2 h-4 bg-[#FFB800] animate-pulse ml-1 align-middle"></span>
            </div>
          </div>
        )}

        {isLoading && !streamingText && (
          <div className="flex justify-start">
            <div className="bg-gray-50 px-6 py-4 rounded-full flex gap-2 items-center shadow-inner border border-gray-100">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">Mestre Tambor está pensando</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-[#FFB800] rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-[#FFB800] rounded-full animate-bounce delay-150"></div>
                <div className="w-1.5 h-1.5 bg-[#FFB800] rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions Container */}
      {!isLoading && messages.length < 5 && (
        <div className="px-10 pb-4 flex flex-wrap gap-2 relative z-10">
          {quickPrompts.map(prompt => (
            <button 
              key={prompt}
              onClick={() => handleSend(prompt)}
              className="px-5 py-2.5 bg-white text-gray-500 text-[10px] font-black rounded-full border border-gray-100 hover:border-[#FFB800] hover:text-[#FFB800] hover:bg-orange-50/50 transition-all uppercase tracking-widest"
            >
              {prompt}
            </button>
          ))}
        </div>
      )}

      <div className="p-10 bg-white border-t border-gray-50 relative z-10">
        <div className="flex items-center gap-5 bg-gray-50 rounded-[32px] p-2.5 border border-transparent focus-within:bg-white focus-within:border-[#FFB800]/30 focus-within:ring-8 focus-within:ring-[#FFB800]/5 transition-all duration-500">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pergunte sobre sua próxima aula ou exercício..." 
            className="flex-1 bg-transparent border-none text-base font-bold text-gray-700 outline-none px-6"
          />
          <button 
            onClick={() => handleSend()}
            disabled={isLoading}
            className={`w-16 h-16 rounded-[24px] shadow-2xl transition-all flex items-center justify-center ${
              isLoading || !input.trim() ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#FFB800] text-white hover:scale-110 active:scale-95 shadow-[#FFB800]/20'
            }`}
          >
            <i className="fa-solid fa-paper-plane text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AITutor;


import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';

interface LiveSessionProps {
  student: string;
}

const LiveSession: React.FC<LiveSessionProps> = ({ student }) => {
  const [isActive, setIsActive] = useState(false);
  const [transcription, setTranscription] = useState<string[]>([]);
  const [volume, setVolume] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const isEnzo = student === 'Enzo';

  // Manual base64 decoding as per rules
  function decode(base64: string) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  // Manual audio decoding as per rules
  async function decodeAudioData(
    data: Uint8Array,
    ctx: AudioContext,
    sampleRate: number,
    numChannels: number,
  ): Promise<AudioBuffer> {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  }

  function encode(bytes: Uint8Array) {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  const startSession = async () => {
    // Resume audio context on user interaction
    if (audioContextRef.current?.state === 'suspended') {
      await audioContextRef.current.resume();
    }
    
    setIsActive(true);
    setTranscription(["Sincronizando com Mestre Tambor..."]);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const source = inputCtx.createMediaStreamSource(stream);
      const processor = inputCtx.createScriptProcessor(4096, 1, 1);
      
      let nextStartTime = 0;
      const outputNode = audioContextRef.current.createGain();
      outputNode.connect(audioContextRef.current.destination);

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => {
            setTranscription(prev => [...prev, "Conectado! Pode começar a tocar."]);
            source.connect(processor);
            processor.connect(inputCtx.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            if (message.serverContent?.outputTranscription) {
              setTranscription(prev => [...prev, `AI: ${message.serverContent?.outputTranscription?.text}`].slice(-5));
            }
            
            const audioData = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audioData && audioContextRef.current) {
              const buffer = await decodeAudioData(decode(audioData), audioContextRef.current, 24000, 1);
              const sourceNode = audioContextRef.current.createBufferSource();
              sourceNode.buffer = buffer;
              sourceNode.connect(outputNode);
              
              nextStartTime = Math.max(nextStartTime, audioContextRef.current.currentTime);
              sourceNode.start(nextStartTime);
              nextStartTime += buffer.duration;
            }
          },
          onerror: (e) => console.error("Live API Error:", e),
          onclose: () => setIsActive(false),
        },
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: `Você é o "Mestre Tambor", um professor de música em tempo real. O aluno ${student} está praticando ${isEnzo ? 'Bateria' : 'Violão'}. Ouça o ritmo dele e dê encorajamento imediato. Se ele parar, sugira um novo exercício rítmico. Seja breve e vocalize ritmos como "tum-tá" ou "dô-ré-mi".`,
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } } },
          inputAudioTranscription: {},
          outputAudioTranscription: {},
        }
      });

      processor.onaudioprocess = (e) => {
        const inputData = e.inputBuffer.getChannelData(0);
        
        // Volume visualization
        let sum = 0;
        for(let i=0; i<inputData.length; i++) sum += inputData[i] * inputData[i];
        const v = Math.sqrt(sum / inputData.length);
        setVolume(v);

        const int16 = new Int16Array(inputData.length);
        for (let i = 0; i < inputData.length; i++) int16[i] = inputData[i] * 32768;
        
        const pcmBlob = {
          data: encode(new Uint8Array(int16.buffer)),
          mimeType: 'audio/pcm;rate=16000',
        };

        sessionPromise.then(session => {
          sessionRef.current = session;
          session.sendRealtimeInput({ media: pcmBlob });
        });
      };

    } catch (err) {
      console.error(err);
      setIsActive(false);
    }
  };

  const stopSession = () => {
    if (sessionRef.current) sessionRef.current.close();
    setIsActive(false);
    setVolume(0);
  };

  // Improved Visualizer
  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
      
      const barCount = 60;
      const barWidth = canvasRef.current!.width / barCount;
      const centerX = canvasRef.current!.width / 2;
      
      for (let i = 0; i < barCount; i++) {
        const distFromCenter = Math.abs(i - barCount/2) / (barCount/2);
        const factor = 1 - distFromCenter;
        const h = isActive ? (Math.random() * volume * 600 * factor) + 4 : 4;
        
        const gradient = ctx.createLinearGradient(0, 0, 0, canvasRef.current!.height);
        gradient.addColorStop(0.3, isActive ? '#FFB800' : '#F3F4F6');
        gradient.addColorStop(0.7, isActive ? '#EA580C' : '#E5E7EB');
        
        ctx.fillStyle = gradient;
        ctx.roundRect(i * barWidth, canvasRef.current!.height / 2 - h / 2, barWidth - 4, h, 20);
        ctx.fill();
      }
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animFrame);
  }, [isActive, volume]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 h-[calc(100vh-280px)] flex flex-col gap-10">
      <div className="bg-white rounded-[56px] border border-gray-100 shadow-[0_50px_100px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col flex-1">
        <div className="p-12 border-b border-gray-50 bg-[#1A1A1A] text-white flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB800]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="flex items-center gap-8 relative z-10">
             <div className={`w-20 h-20 rounded-[32px] flex items-center justify-center text-3xl shadow-2xl transition-all duration-500 ${isActive ? 'bg-[#FFB800] text-white shadow-orange-500/20 rotate-3' : 'bg-white/5 text-gray-500'}`}>
               <i className={`fa-solid ${isActive ? 'fa-microphone-lines' : 'fa-microphone-slash'}`}></i>
             </div>
             <div>
               <h2 className="text-4xl font-black tracking-tight">Prática Assistida</h2>
               <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] flex items-center gap-2">
                 {isActive ? <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span> : null}
                 {isActive ? "Conectado ao Processamento Nativo" : "Feedback Inteligente via Mestre Tambor"}
               </p>
             </div>
          </div>
          <div className="flex items-center gap-4 relative z-10">
            <button 
              onClick={isActive ? stopSession : startSession}
              className={`px-12 py-5 rounded-[24px] font-black text-xs uppercase tracking-widest transition-all shadow-2xl ${
                isActive ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-[#FFB800] text-white shadow-[#FFB800]/20 hover:scale-110 active:scale-95'
              }`}
            >
              {isActive ? 'Pausar Treino' : 'Iniciar Prática'}
            </button>
          </div>
        </div>

        <div className="flex-1 bg-[#FDFEFE] p-16 flex flex-col gap-12 items-center justify-center relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          {/* Visualizer Container */}
          <div className="w-full max-w-5xl bg-white p-12 rounded-[48px] shadow-sm border border-gray-50 relative overflow-hidden">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1">
              {Array.from({ length: 12 }).map((_, i) => <div key={i} className={`w-1 h-1 rounded-full ${isActive ? 'bg-[#FFB800]' : 'bg-gray-100'}`} style={{ opacity: 1 - (Math.abs(i-6)/6) }}></div>)}
            </div>
            <canvas ref={canvasRef} width={1000} height={250} className="w-full h-[200px]" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
            <div className="bg-white p-10 rounded-[48px] shadow-xl border border-gray-100 flex flex-col items-center gap-6 text-center group hover:border-[#FFB800]/30 transition-all duration-500">
               <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-[20px] flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                 <i className="fa-solid fa-ear-listen"></i>
               </div>
               <div className="space-y-2">
                 <h4 className="font-black text-gray-900 uppercase text-[10px] tracking-[0.2em]">Sinal Captado</h4>
                 <p className="text-gray-500 font-medium italic text-base leading-relaxed">
                   {isActive ? "Detectando padrões de ritmo e dinâmica..." : "O Mestre Tambor aguarda o primeiro acorde."}
                 </p>
               </div>
            </div>

            <div className="bg-white p-10 rounded-[48px] shadow-xl border border-gray-100 flex flex-col gap-6 group hover:border-[#FFB800]/30 transition-all duration-500">
               <div className="flex items-center justify-between border-b border-gray-50 pb-6">
                 <h4 className="font-black text-gray-900 uppercase text-[10px] tracking-[0.2em]">Dicas em Tempo Real</h4>
                 <i className="fa-solid fa-comment-dots text-gray-200"></i>
               </div>
               <div className="flex-1 space-y-4 overflow-y-auto max-h-40 no-scrollbar pr-2">
                 {transcription.length === 0 ? (
                   <p className="text-gray-300 text-sm italic">Aguardando áudio para processar transcrição...</p>
                 ) : (
                   transcription.map((t, i) => (
                     <div key={i} className={`p-4 rounded-2xl text-sm font-bold leading-relaxed border animate-in slide-in-from-left-4 ${t.startsWith('AI:') ? 'bg-orange-50/50 border-orange-100 text-gray-800' : 'bg-gray-50 border-gray-100 text-gray-500'}`}>
                       {t}
                     </div>
                   ))
                 )}
               </div>
            </div>
          </div>

          {!isActive && (
            <div className="absolute inset-0 bg-white/40 backdrop-blur-md flex items-center justify-center z-20">
               <div className="bg-white p-16 rounded-[64px] shadow-[0_50px_100px_rgba(0,0,0,0.15)] border border-gray-100 text-center space-y-8 max-w-lg animate-in fade-in zoom-in duration-700">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-[#FFB800] blur-3xl opacity-20 animate-pulse"></div>
                    <div className="w-24 h-24 bg-[#FFFCEB] text-[#FFB800] rounded-[32px] flex items-center justify-center text-5xl mx-auto shadow-inner relative z-10">
                      <i className={`fa-solid ${isEnzo ? 'fa-drum' : 'fa-guitar'}`}></i>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-black text-gray-900 tracking-tight">O palco é seu!</h3>
                    <p className="text-gray-500 font-medium leading-relaxed text-lg">
                      {student}, prepare seu instrumento. O Mestre Tambor vai te ajudar a manter o tempo e a dinâmica perfeitos.
                    </p>
                  </div>
                  <button onClick={startSession} className="w-full py-5 bg-[#FFB800] text-white rounded-[24px] font-black text-xs uppercase tracking-widest shadow-2xl shadow-[#FFB800]/20 hover:scale-[1.05] active:scale-95 transition-all">ESTOU PRONTO PARA TOCAR</button>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveSession;

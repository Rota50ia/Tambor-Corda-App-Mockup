
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const DiscoverView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [news, setNews] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sources, setSources] = useState<any[]>([]);

  const fetchMusicNews = async (query: string = "Principais tendências musicais para 2025 e notícias de festivais") => {
    setIsLoading(true);
    setSources([]);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      // Extract sources from grounding metadata as per documentation
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (groundingChunks) {
        const extractedSources = groundingChunks
          .map((chunk: any) => chunk.web)
          .filter(Boolean);
        setSources(extractedSources);
      }

      // Parse text into headlines for visual cards
      const text = response.text || "";
      const lines = text.split('\n').filter(l => l.trim().length > 30).slice(0, 4);
      
      const newsItems = lines.map((l, i) => ({
        id: i,
        title: l.replace(/[*#]/g, '').trim(),
        category: i % 2 === 0 ? 'NOTÍCIA' : 'TENDÊNCIA',
        image: `https://picsum.photos/seed/musicnews${i + 5}/800/450`,
        date: 'Atualizado Agora'
      }));
      
      setNews(newsItems);
    } catch (error) {
      console.error("Error fetching news:", error);
      // Fallback if search fails
      setNews([
        { id: 0, title: "O renascimento do vinil continua em 2025", category: "TENDÊNCIA", image: "https://picsum.photos/seed/vinyl/800/450", date: "Hoje" },
        { id: 1, title: "Festivais de verão batem recorde de público", category: "NOTÍCIA", image: "https://picsum.photos/seed/fest/800/450", date: "Ontem" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMusicNews();
  }, []);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-12 pb-12">
      <div className="flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">Descobrir Música</h2>
          <p className="text-gray-500 font-bold mt-1">Tendências globais filtradas por Inteligência Artificial.</p>
        </div>
        <div className="relative w-full md:w-96 group">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#FFB800] transition-colors"></i>
          <input 
            type="text" 
            placeholder="Pesquisar artistas, gêneros ou novidades..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchMusicNews(searchQuery)}
            className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-100 shadow-sm font-bold text-sm outline-none focus:ring-4 focus:ring-[#FFB800]/5 transition-all"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-64 bg-gray-100 rounded-[40px]"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map(item => (
            <div key={item.id} className="group bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.title} />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-[#FFB800] text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <p className="text-white text-xs font-bold flex items-center gap-2">
                     <i className="fa-solid fa-arrow-up-right-from-square"></i> Ler matéria completa
                   </p>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-xl font-black text-gray-900 leading-tight line-clamp-2 group-hover:text-[#FFB800] transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest pt-4 border-t border-gray-50">
                  <span className="flex items-center gap-2">
                    <i className="fa-brands fa-google text-[#FFB800]"></i> Grounding Ativado
                  </span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {sources.length > 0 && (
        <div className="bg-[#1A1A1A] rounded-[40px] p-10 text-white shadow-2xl space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FFB800]">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              Fontes Confiáveis do Google
            </h3>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Verificado em tempo real</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sources.map((s, i) => (
              <a 
                key={i} 
                href={s.uri} 
                target="_blank" 
                rel="noreferrer"
                className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-[#FFB800]/50 transition-all flex flex-col gap-3 group"
              >
                <div className="flex items-center justify-between">
                  <i className="fa-solid fa-globe text-[#FFB800] opacity-50 group-hover:opacity-100"></i>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-gray-600"></i>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-white uppercase truncate block">{s.title || 'Site de Música'}</span>
                  <span className="text-[9px] font-bold text-gray-500 truncate block">{s.uri}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscoverView;

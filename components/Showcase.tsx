
import React, { useState } from 'react';

const ShowcaseView: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Tambor & Corda Digital",
      subtitle: "A Nova Era da Educação Musical",
      description: "Uma plataforma integrada que une pais, alunos e mestres através da Inteligência Artificial Generativa.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1200",
      accent: "text-[#FFB800]",
      icon: "fa-infinity"
    },
    {
      title: "Mestre Tambor AI",
      subtitle: "Mentoria 24/7 com IA Nativa",
      description: "Feedback rítmico e melódico instantâneo usando a Gemini Live API. Prática assistida com baixa latência.",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200",
      accent: "text-orange-500",
      icon: "fa-microphone-lines"
    },
    {
      title: "Showcase Cinematográfico",
      subtitle: "Performances Transformadas em Arte",
      description: "Criação de teasers épicos 1080p usando Veo 3.1. Transforme ensaios em momentos inesquecíveis para redes sociais.",
      image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=1200",
      accent: "text-blue-500",
      icon: "fa-clapperboard"
    },
    {
      title: "Gestão Transparente",
      subtitle: "Conectividade Total da Família",
      description: "Dashboards de evolução, controle financeiro e comunicação direta via WhatsApp integrados em um só lugar.",
      image: "https://images.unsplash.com/photo-1459749411177-042180ce6742?auto=format&fit=crop&q=80&w=1200",
      accent: "text-green-500",
      icon: "fa-chart-line"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 min-h-[700px] flex flex-col relative overflow-hidden rounded-[64px] bg-white border border-gray-100 shadow-2xl">
      {/* Slide Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side: Info */}
        <div className="lg:w-1/2 p-16 md:p-24 flex flex-col justify-center space-y-10 relative z-10">
          <div className="space-y-4 animate-in slide-in-from-left-8 duration-700">
            <div className={`w-16 h-16 rounded-3xl bg-gray-50 flex items-center justify-center text-3xl ${slides[currentSlide].accent} shadow-inner`}>
              <i className={`fa-solid ${slides[currentSlide].icon}`}></i>
            </div>
            <h4 className={`text-[12px] font-black uppercase tracking-[0.4em] ${slides[currentSlide].accent}`}>
              {slides[currentSlide].subtitle}
            </h4>
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none">
              {slides[currentSlide].title.split(' ').map((word, i) => (
                <span key={i} className={word === 'Digital' || word === 'Cinematográfico' ? slides[currentSlide].accent : ''}>
                  {word}{' '}
                </span>
              ))}
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-lg pt-4">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="flex items-center gap-6 pt-10">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#FFB800] hover:text-white hover:border-[#FFB800] transition-all shadow-sm"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button 
              onClick={nextSlide}
              className="px-10 h-14 bg-gray-900 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#FFB800] transition-all shadow-xl active:scale-95"
            >
              Próximo Slide
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? `w-8 ${slides[i].accent.replace('text-', 'bg-')}` : 'w-2 bg-gray-100'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Image/Visual */}
        <div className="lg:w-1/2 relative min-h-[400px]">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              key={currentSlide}
              src={slides[currentSlide].image} 
              className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000" 
              alt="Slide Visual"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
             <div className="text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70">Case Study</p>
                <h5 className="text-2xl font-black tracking-tight">Escola de Música Tambor & Corda</h5>
             </div>
             <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
                <i className="fa-solid fa-infinity text-2xl"></i>
             </div>
          </div>
        </div>
      </div>

      {/* Footer / Stats Bar */}
      <div className="bg-gray-50 p-12 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10 border-t border-gray-100">
        {[
          { label: "IA Multimodal", value: "Gemini 3", desc: "Processamento de ponta" },
          { label: "Vídeo", value: "Veo 3.1", desc: "Produção cinematográfica" },
          { label: "Latência", value: "Ultra-Baixa", desc: "Feedback instantâneo" },
          { label: "Plataforma", value: "Omni", desc: "Web, Mobile, WhatsApp" }
        ].map((stat, i) => (
          <div key={i} className="space-y-1">
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{stat.label}</p>
            <p className="text-2xl font-black text-gray-900 tracking-tighter">{stat.value}</p>
            <p className="text-[10px] font-bold text-gray-400 italic">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseView;

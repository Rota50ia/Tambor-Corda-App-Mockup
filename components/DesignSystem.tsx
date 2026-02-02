
import React from 'react';

const DesignSystem: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-16">
      <div className="bg-white p-12 rounded-[48px] border border-gray-100 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB800]/5 rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFB800]/10 rounded-full">
            <i className="fa-solid fa-swatchbook text-[#FFB800] text-xs"></i>
            <span className="text-[10px] font-black text-[#FFB800] uppercase tracking-widest">Brand Guidelines</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 tracking-tighter">Tambor & Corda Design System</h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl leading-relaxed">
            Um guia abrangente para os componentes visuais, tokens e padrões que constroem o portal da academia musical.
          </p>
        </div>
      </div>

      {/* Color Palette */}
      <section className="space-y-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-pink-500 text-white flex items-center justify-center shadow-lg shadow-pink-200">
            <i className="fa-solid fa-palette"></i>
          </div>
          <h3 className="text-3xl font-black text-gray-900 tracking-tight">Cores & Paleta</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: 'Primary', hex: '#FFB800', var: '--primary', text: 'white' },
            { name: 'Secondary', hex: '#3B82F6', var: '--secondary', text: 'white' },
            { name: 'Accent', hex: '#F3F4F6', var: '--accent', text: 'gray-500' },
            { name: 'Muted', hex: '#E5E7EB', var: '--muted', text: 'gray-400' },
            { name: 'Success', hex: '#10B981', var: '--success', text: 'white' },
            { name: 'Danger', hex: '#EF4444', var: '--danger', text: 'white' },
          ].map(color => (
            <div key={color.name} className="bg-white p-3 rounded-[32px] border border-gray-100 shadow-sm space-y-4 group hover:scale-105 transition-all">
              <div className={`h-24 rounded-[24px] shadow-inner`} style={{ backgroundColor: color.hex }}></div>
              <div className="px-1">
                <h4 className="font-black text-gray-900 text-sm">{color.name}</h4>
                <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">{color.hex}</p>
                <code className="text-[8px] font-mono text-gray-300 mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">var({color.var})</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-200">
            <i className="fa-solid fa-font"></i>
          </div>
          <h3 className="text-3xl font-black text-gray-900 tracking-tight">Tipografia</h3>
        </div>

        <div className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-xl space-y-12">
          <div className="space-y-4">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Display Font (Plus Jakarta Sans)</p>
            <h4 className="text-4xl font-black text-gray-900 tracking-tighter">The quick brown fox jumps over the lazy dog.</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-4">Tamanhos Disponíveis</h5>
              <div className="space-y-6">
                <div>
                  <h6 className="text-4xl font-black">Heading 1 (4xl) - 36px</h6>
                </div>
                <div>
                  <h6 className="text-3xl font-black text-gray-800">Heading 2 (3xl) - 30px</h6>
                </div>
                <div>
                  <h6 className="text-2xl font-black text-gray-700">Heading 3 (2xl) - 24px</h6>
                </div>
                <div>
                  <h6 className="text-xl font-bold text-gray-600">Body Large (xl) - 20px</h6>
                </div>
              </div>
            </div>
            <div className="space-y-6">
               <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-4">Hierarquia Visual</h5>
               <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                 <p className="text-sm text-gray-600 leading-relaxed font-medium">
                   Utilizamos uma escala tipográfica moderna para garantir legibilidade em todas as interfaces, focando no contraste de pesos para guiar a atenção do aluno e dos pais.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignSystem;

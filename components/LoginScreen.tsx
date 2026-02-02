
import React from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#FFB800] rounded-full blur-[180px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500 rounded-full blur-[150px] opacity-10"></div>
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#FFB800] rounded-[24px] flex items-center justify-center text-white text-3xl shadow-2xl shadow-[#FFB800]/20">
              <i className="fa-solid fa-infinity"></i>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter">Tambor & Corda</h1>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-tight">
              Onde o ritmo <br/> encontra a <span className="text-[#FFB800]">alma.</span>
            </h2>
            <p className="text-gray-400 text-xl font-medium max-w-lg leading-relaxed">
              Gestão inteligente para pais, alunos e mestres. Acompanhe a evolução musical em tempo real.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#FFB800]">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <span className="text-white font-black text-[10px] uppercase tracking-widest">Portal Seguro</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>
              <span className="text-white font-black text-[10px] uppercase tracking-widest">IA Powered</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[60px] p-12 md:p-16 shadow-2xl space-y-10 animate-in fade-in slide-in-from-right-10 duration-1000">
          <div className="space-y-2">
            <h3 className="text-3xl font-black text-gray-900">Bem-vindo(a)</h3>
            <p className="text-gray-400 font-bold">Entre na sua conta da família.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">E-MAIL DO RESPONSÁVEL</label>
              <div className="relative">
                <i className="fa-solid fa-envelope absolute left-6 top-1/2 -translate-y-1/2 text-gray-300"></i>
                <input 
                  type="email" 
                  defaultValue="juliana.lima@example.com"
                  className="w-full pl-14 pr-6 py-5 bg-gray-50 rounded-3xl border-none font-bold text-gray-700 outline-none focus:ring-4 focus:ring-[#FFB800]/5 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">SENHA</label>
              <div className="relative">
                <i className="fa-solid fa-lock absolute left-6 top-1/2 -translate-y-1/2 text-gray-300"></i>
                <input 
                  type="password" 
                  defaultValue="password123"
                  className="w-full pl-14 pr-6 py-5 bg-gray-50 rounded-3xl border-none font-bold text-gray-700 outline-none focus:ring-4 focus:ring-[#FFB800]/5 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-100 text-[#FFB800] focus:ring-[#FFB800]/10" />
                <span className="text-xs font-bold text-gray-400 group-hover:text-gray-600 transition-colors">Lembrar de mim</span>
              </label>
              <button type="button" className="text-xs font-black text-[#FFB800] hover:underline uppercase tracking-widest">Esqueci a senha</button>
            </div>

            <button 
              type="submit"
              className="w-full py-6 bg-[#FFB800] text-white rounded-3xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-[#FFB800]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              ACESSAR PORTAL
            </button>
          </form>

          <div className="flex items-center gap-4 py-4">
            <div className="flex-1 h-px bg-gray-100"></div>
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Não é aluno?</span>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>

          <button className="w-full py-5 bg-white border-2 border-gray-50 text-gray-400 rounded-3xl font-black text-xs uppercase tracking-widest hover:border-[#FFB800] hover:text-[#FFB800] transition-all">
            QUERO ME MATRICULAR
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 text-[10px] font-black uppercase tracking-[0.4em] opacity-30">
        © 2025 TAMBOR & CORDA • MÚSICA & EDUCAÇÃO
      </div>
    </div>
  );
};

export default LoginScreen;


import React from 'react';

const CommunityView: React.FC = () => {
  const posts = [
    {
      id: 1,
      author: 'Tambor & Corda',
      type: 'Oficial',
      text: 'Parabéns ao nosso aluno do mês: Enzo Lima! 🥁 Seu progresso na bateria tem sido inspirador para todos os colegas da Sala 04.',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
      likes: 124,
      comments: 18,
      date: 'Há 2 horas',
      avatar: 'fa-infinity'
    },
    {
      id: 2,
      author: 'Prof. Ricardo',
      type: 'Mestre',
      text: 'Momento de ensaio para o Recital de Inverno. Nossos alunos estão afinadíssimos! 🎸🎶 Quem aí já escolheu seu repertório?',
      image: 'https://images.unsplash.com/photo-1520529611424-6443c22ec99b?auto=format&fit=crop&q=80&w=800',
      likes: 89,
      comments: 5,
      date: 'Há 5 horas',
      avatar: 'fa-user-tie'
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-10 pb-12">
      <div className="flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">Comunidade</h2>
          <p className="text-gray-500 font-bold mt-1">Conecte-se, inspire-se e compartilhe sua música.</p>
        </div>
        <div className="flex bg-white p-1.5 rounded-[24px] border border-gray-100 shadow-sm">
          <button className="px-8 py-3 bg-gray-900 text-white rounded-[20px] font-black text-xs uppercase tracking-widest shadow-xl">Feed</button>
          <button className="px-8 py-3 text-gray-400 font-black text-xs uppercase tracking-widest hover:text-gray-600 transition-all">Eventos</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-10">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-[48px] border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all group">
              <div className="p-8 flex items-center justify-between border-b border-gray-50/50">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-[#FFB800] rounded-[22px] flex items-center justify-center text-white shadow-lg shadow-[#FFB800]/20 group-hover:rotate-6 transition-transform">
                    <i className={`fa-solid ${post.avatar} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-lg">{post.author}</h4>
                    <p className="text-[10px] font-black text-[#FFB800] uppercase tracking-[0.2em]">{post.type}</p>
                  </div>
                </div>
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{post.date}</span>
              </div>
              
              <div className="p-10 space-y-8">
                <p className="text-gray-700 text-lg font-semibold leading-relaxed">{post.text}</p>
                <div className="rounded-[40px] overflow-hidden aspect-video border border-gray-50 relative group/img">
                  <img src={post.image} className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-1000" alt="Post" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="w-16 h-16 bg-white rounded-full text-[#FFB800] shadow-2xl flex items-center justify-center text-xl hover:scale-110 transition-transform">
                      <i className="fa-solid fa-expand"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-10 py-8 bg-gray-50/30 border-t border-gray-50 flex items-center gap-10">
                <button className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-all font-black text-xs uppercase tracking-widest group/btn">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover/btn:bg-red-50">
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  {post.likes}
                </button>
                <button className="flex items-center gap-3 text-gray-400 hover:text-blue-500 transition-all font-black text-xs uppercase tracking-widest group/btn">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover/btn:bg-blue-50">
                    <i className="fa-solid fa-comment"></i>
                  </div>
                  {post.comments}
                </button>
                <button className="ml-auto w-10 h-10 rounded-xl bg-white shadow-sm text-gray-300 hover:text-gray-900 hover:bg-gray-50 transition-all flex items-center justify-center">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Community Sidebar */}
        <div className="space-y-8">
          <div className="bg-white rounded-[48px] border border-gray-100 p-10 shadow-xl space-y-10">
            <h3 className="text-2xl font-black text-gray-900 flex items-center justify-between">
              Ranking <i className="fa-solid fa-ranking-star text-[#FFB800]"></i>
            </h3>
            <div className="space-y-8">
              {[
                { name: 'Enzo Lima', score: 2450, instrument: 'Bateria', trend: 'up' },
                { name: 'Sophia Lima', score: 2100, instrument: 'Violão', trend: 'stable' },
                { name: 'Pedro Alves', score: 1980, instrument: 'Piano', trend: 'up' },
              ].map((student, i) => (
                <div key={i} className="flex items-center gap-5 group cursor-pointer">
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center font-black text-gray-300 group-hover:bg-[#FFB800] group-hover:text-white transition-all text-xl shadow-inner`}>
                      {i + 1}
                    </div>
                    {student.trend === 'up' && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white flex items-center justify-center text-[8px] text-white">
                        <i className="fa-solid fa-arrow-up"></i>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-black text-gray-900 text-base">{student.name}</p>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{student.instrument}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-black text-[#FFB800]">{student.score}</span>
                    <p className="text-[8px] font-black text-gray-300 uppercase">PTS</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-4 bg-gray-50 text-gray-400 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-100 transition-all">Ver Ranking Completo</button>
          </div>

          <div className="bg-[#1A1A1A] rounded-[48px] p-10 text-white shadow-2xl space-y-8 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-1000">
               <i className="fa-solid fa-quote-right text-[120px] text-[#FFB800]"></i>
             </div>
             <h3 className="text-2xl font-black flex items-center gap-3 relative z-10">
               <i className="fa-solid fa-graduation-cap text-[#FFB800]"></i> Sabedoria
             </h3>
             <p className="text-gray-400 text-lg font-medium leading-relaxed italic relative z-10">
               "A música não é o que fazemos, é quem somos. Pratique 15 minutos por dia e veja a mágica acontecer."
             </p>
             <div className="flex items-center gap-4 pt-8 border-t border-white/10 relative z-10">
                <img src="https://picsum.photos/seed/director/100/100" className="w-12 h-12 rounded-2xl border-2 border-white/10" alt="Director" />
                <div>
                  <h5 className="font-black text-sm">Mestre Claudio</h5>
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Diretor Artístico</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityView;


import React from 'react';

interface FinancialProps {
  student: string;
}

const FinancialView: React.FC<FinancialProps> = ({ student }) => {
  const invoices = [
    { id: '#INV-2025-05', month: 'Maio 2025', status: 'paid', amount: 'R$ 450,00', date: '05/05/2025', method: 'Cartão de Crédito' },
    { id: '#INV-2025-06', month: 'Junho 2025', status: 'pending', amount: 'R$ 450,00', date: '05/06/2025', method: '-' },
    { id: '#INV-2025-07', month: 'Julho 2025', status: 'upcoming', amount: 'R$ 450,00', date: '05/07/2025', method: '-' },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-10">
      <div className="flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-gray-900">Financeiro</h2>
          <p className="text-gray-500 font-bold mt-1">Gestão de mensalidades e materiais extras.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-6 py-2.5 bg-[#FFB800] text-white rounded-2xl text-xs font-black shadow-lg shadow-[#FFB800]/20 hover:scale-105 transition-all">PAGAR MÊS ATUAL</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Financial Summary */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex items-center justify-between">
              <h3 className="text-xl font-black text-gray-900">Histórico de Cobrança</h3>
              <i className="fa-solid fa-receipt text-gray-200"></i>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-8 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Fatura</th>
                    <th className="px-8 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Vencimento</th>
                    <th className="px-8 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Valor</th>
                    <th className="px-8 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                    <th className="px-8 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {invoices.map((inv, i) => (
                    <tr key={i} className="hover:bg-gray-50/30 transition-colors">
                      <td className="px-8 py-6">
                        <p className="font-extrabold text-gray-800 text-sm">{inv.month}</p>
                        <p className="text-[10px] font-bold text-gray-300">{inv.id}</p>
                      </td>
                      <td className="px-8 py-6 text-sm font-bold text-gray-500">{inv.date}</td>
                      <td className="px-8 py-6 text-sm font-black text-gray-900">{inv.amount}</td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                          inv.status === 'paid' ? 'bg-green-50 text-green-600' :
                          inv.status === 'pending' ? 'bg-orange-50 text-orange-600' : 'bg-gray-50 text-gray-400'
                        }`}>
                          {inv.status === 'paid' ? 'Pago' : inv.status === 'pending' ? 'Pendente' : 'Futuro'}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <button className="text-gray-300 hover:text-[#FFB800] transition-colors"><i className="fa-solid fa-download"></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Cards */}
        <div className="space-y-8">
          <div className="bg-[#1A1A1A] rounded-[40px] p-8 text-white shadow-2xl space-y-8 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
               <i className="fa-solid fa-credit-card text-9xl"></i>
             </div>
             <h3 className="text-xl font-black flex items-center gap-3">
               <i className="fa-solid fa-wallet text-[#FFB800]"></i> Pagamento
             </h3>
             <div className="space-y-4">
               <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <i className="fa-brands fa-cc-mastercard text-2xl"></i>
                    </div>
                    <div>
                      <p className="text-xs font-black">•••• 4582</p>
                      <p className="text-[10px] font-bold text-gray-500">Expira em 05/28</p>
                    </div>
                 </div>
                 <i className="fa-solid fa-circle-check text-green-500"></i>
               </div>
             </div>
             <button className="w-full py-4 bg-white/10 text-white border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all">Alterar Forma de Pagamento</button>
          </div>

          <div className="bg-white rounded-[40px] border border-gray-100 p-8 shadow-xl space-y-6">
             <h3 className="text-xl font-black text-gray-900">Matrícula 2025</h3>
             <div className="flex items-center gap-4 p-4 bg-blue-50/50 border border-blue-100 rounded-2xl">
                <i className="fa-solid fa-circle-info text-blue-500"></i>
                <p className="text-xs font-bold text-blue-700 leading-relaxed">
                  Garanta a vaga para o próximo semestre com 10% de desconto até 20/06.
                </p>
             </div>
             <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-blue-600/20">Renovar Agora</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialView;

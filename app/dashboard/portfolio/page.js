'use client';
import { useTrade } from '@/context/TradeContext';
import { FaShieldAlt, FaChartPie, FaWallet, FaArrowUp, FaArrowDown, FaLayerGroup } from 'react-icons/fa';

export default function PortfolioPage() {
  const { holdings, balance } = useTrade();

  // Calculate Real Totals on the fly
  const investedValue = holdings.reduce((acc, curr) => acc + (curr.amount * curr.avgPrice), 0);
  const currentValue = investedValue * 1.05; // Fake 5% profit simulation
  const totalProfit = currentValue - investedValue;
  const isProfit = totalProfit >= 0;

  return (
    <div className="space-y-8 animate-[slideUp_0.5s_ease-out] relative">
      
      {/* 🌟 Ambient Background Glow */}
      <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Portfolio Analysis</h1>
        <p className="text-trade-muted">Detailed breakdown of your asset allocation and performance.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Total Balance Card */}
        <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-[50px] -mr-10 -mt-10 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
               <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                 <FaWallet className="text-xl" />
               </div>
               <span className="text-xs font-bold bg-blue-500/10 text-blue-400 px-2 py-1 rounded-lg border border-blue-500/20">
                 Liquid
               </span>
            </div>
            <h3 className="text-trade-muted text-sm font-medium uppercase tracking-wider">Total Balance</h3>
            <p className="text-4xl font-bold mt-2 text-white tracking-tight">
               ${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </p>
            <p className="text-xs text-trade-muted mt-2 opacity-80">Available Cash</p>
          </div>
        </div>

        {/* Invested Value Card */}
        <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-[50px] -mr-10 -mt-10 pointer-events-none"></div>
          <div className="relative z-10">
             <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                   <FaChartPie className="text-xl" />
                </div>
                <span className="text-xs font-bold bg-purple-500/10 text-purple-400 px-2 py-1 rounded-lg border border-purple-500/20">
                   Locked
                </span>
             </div>
             <h3 className="text-trade-muted text-sm font-medium uppercase tracking-wider">Invested Value</h3>
             <p className="text-4xl font-bold mt-2 text-white tracking-tight">
                ${investedValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
             </p>
             <p className="text-xs text-trade-muted mt-2 opacity-80">Assets at Cost</p>
          </div>
        </div>
        
        {/* P&L Card (Dynamic Color) */}
        <div className={`glass-panel p-6 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 border-l-4 ${isProfit ? 'border-l-trade-success' : 'border-l-trade-danger'}`}>
           <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] -mr-10 -mt-10 pointer-events-none ${isProfit ? 'bg-green-600/20' : 'bg-red-600/20'}`}></div>
           <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                 <div className={`p-3 rounded-xl ${isProfit ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    <FaShieldAlt className="text-xl" />
                 </div>
                 <span className={`text-xs font-bold px-2 py-1 rounded-lg border flex items-center gap-1 ${isProfit ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                    {isProfit ? <FaArrowUp /> : <FaArrowDown />} 5.0%
                 </span>
              </div>
              <h3 className="text-trade-muted text-sm font-medium uppercase tracking-wider">Unrealized P&L</h3>
              <p className={`text-4xl font-bold mt-2 tracking-tight ${isProfit ? 'text-trade-success' : 'text-trade-danger'}`}>
                 {isProfit ? '+' : '-'}${Math.abs(totalProfit).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-trade-muted mt-2 opacity-80">Simulated Market Move</p>
           </div>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="glass-panel p-8 rounded-3xl">
          <h2 className="font-bold text-lg mb-6 flex items-center gap-2">
             <div className="p-2 bg-trade-primary/20 rounded-lg text-trade-primary">
                <FaLayerGroup />
             </div>
             Current Holdings
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-trade-muted text-xs uppercase tracking-wider border-b border-white/10">
                  <th className="pb-4 pl-4">Asset</th>
                  <th className="pb-4">Amount</th>
                  <th className="pb-4">Avg Buy Price</th>
                  <th className="pb-4">Total Value</th>
                  <th className="pb-4 pr-4 text-right">Performance</th>
                </tr>
              </thead>
              <tbody>
                {holdings.length === 0 ? (
                  <tr><td colSpan="5" className="text-center py-10 text-trade-muted">No holdings found in your portfolio.</td></tr>
                ) : (
                  holdings.map((item, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors group last:border-0">
                      <td className="py-5 pl-4 font-bold text-white flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-trade-primary border border-white/10">
                            {item.symbol[0]}
                         </div>
                         {item.symbol}
                      </td>
                      <td className="py-5 text-trade-muted font-mono">{Number(item.amount).toFixed(4)}</td>
                      <td className="py-5 text-trade-muted">${item.avgPrice.toLocaleString()}</td>
                      <td className="py-5 font-bold text-white text-lg">
                        ${(item.amount * item.avgPrice).toLocaleString()}
                      </td>
                      <td className="py-5 pr-4 text-right">
                         <span className="inline-block px-3 py-1 rounded-full bg-trade-success/10 text-trade-success text-xs font-bold border border-trade-success/20">
                            +5.00%
                         </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
}
'use client';
import Link from 'next/link';
import { FaWallet, FaArrowUp, FaChartLine, FaLayerGroup } from 'react-icons/fa';
import ChartMock from '@/components/ChartMock';
import { useTrade } from '@/context/TradeContext';
import { MARKET_MOVERS } from '@/data/markets';

export default function DashboardPage() {
  const { balance, holdings } = useTrade();

  // Real Stats Calculation
  const investedValue = holdings.reduce((acc, curr) => acc + (curr.amount * curr.avgPrice), 0);
  const currentValue = investedValue * 1.05; // Fake 5% profit simulation
  const totalProfit = currentValue - investedValue;
  const totalBalance = balance + currentValue;
  const dayChange = totalProfit * 0.1; 

  return (
    <div className="space-y-8 animate-[slideUp_0.5s_ease-out]">
      
      {/* Page Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-trade-muted">Welcome back, here is your portfolio status.</p>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-xs text-trade-muted">Market Status</p>
          <p className="text-trade-success flex items-center gap-1 text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-trade-success animate-pulse"></span> Live
          </p>
        </div>
      </div>

      {/* 1. Top Stats Row (Premium Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Total Net Worth (Hero Card) */}
        <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-[50px] -mr-10 -mt-10 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
               <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                 <FaWallet className="text-xl" />
               </div>
               <div className="flex items-center text-xs font-bold text-trade-success bg-trade-success/10 px-2 py-1 rounded-lg border border-trade-success/20">
                 <FaArrowUp className="mr-1" /> +${Math.abs(dayChange).toFixed(2)}
               </div>
            </div>
            <h3 className="text-trade-muted text-sm font-medium">Net Worth</h3>
            <p className="text-3xl font-bold mt-1 text-white tracking-tight">
              ${totalBalance.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>
        </div>

        {/* Real Cash Balance */}
        <div className="glass-panel p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start mb-4">
             <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
               <FaLayerGroup className="text-xl" />
             </div>
          </div>
          <h3 className="text-trade-muted text-sm font-medium">Available Cash</h3>
          <p className="text-2xl font-bold mt-1 text-white">${balance.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
        </div>

        {/* Active Trades */}
        <div className="glass-panel p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start mb-4">
             <div className="p-3 bg-yellow-500/20 rounded-xl text-yellow-400">
               <FaChartLine className="text-xl" />
             </div>
             <Link href="/dashboard/portfolio" className="text-xs text-trade-primary hover:text-white transition-colors">
                View &rarr;
             </Link>
          </div>
          <h3 className="text-trade-muted text-sm font-medium">Open Positions</h3>
          <p className="text-2xl font-bold mt-1 text-white">{holdings.length}</p>
        </div>

        {/* Real Profit */}
        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-trade-success hover:-translate-y-1 transition-transform duration-300">
          <div className="mb-4">
            <h3 className="text-trade-muted text-sm font-medium">Unrealized P&L</h3>
            <p className={`text-2xl font-bold mt-1 ${totalProfit >= 0 ? 'text-trade-success' : 'text-trade-danger'}`}>
              {totalProfit >= 0 ? '+' : '-'}${Math.abs(totalProfit).toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="w-full bg-trade-border h-1.5 rounded-full overflow-hidden">
            <div className="bg-trade-success h-full w-[70%]"></div>
          </div>
        </div>
      </div>

      {/* 2. Main Chart & Watchlist Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Main Chart */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl min-h-[450px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-trade-primary rounded-full"></span>
              Portfolio Performance
            </h2>
          </div>
          <div className="flex-1 w-full">
             <ChartMock symbol="Portfolio Value" />
          </div>
        </div>

        {/* Right: Market Movers */}
        <div className="glass-panel p-6 rounded-2xl">
          <h2 className="font-bold mb-6 text-lg">Top Market Movers</h2>
          <div className="space-y-4">
            {MARKET_MOVERS.slice(0, 3).map((asset) => (
              <div key={asset.symbol} className="flex justify-between items-center p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg ${asset.type === 'gainer' ? 'bg-gradient-to-br from-green-500/20 to-green-900/20 text-green-400' : 'bg-gradient-to-br from-red-500/20 to-red-900/20 text-red-400'}`}>
                    {asset.symbol[0]}
                  </div>
                  <div>
                    <p className="font-bold text-white group-hover:text-trade-primary transition-colors">{asset.symbol}</p>
                    <p className="text-xs text-trade-muted">{asset.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-white">${asset.price}</p>
                  <p className={`text-xs font-bold ${asset.change > 0 ? 'text-trade-success' : 'text-trade-danger'}`}>
                    {asset.change > 0 ? '+' : ''}{asset.change}%
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/dashboard/markets" className="block text-center text-sm font-bold text-trade-primary mt-6 hover:text-white transition-colors border border-trade-border rounded-lg py-3 hover:bg-white/5">
            View All Markets
          </Link>
        </div>
      </div>

      {/* 3. Recent Holdings Table */}
      <div className="glass-panel p-6 rounded-2xl">
        <h2 className="font-bold text-lg mb-6 flex items-center gap-2">
           <span className="w-1 h-6 bg-purple-500 rounded-full"></span> Your Holdings
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-trade-muted text-xs uppercase tracking-wider border-b border-white/10">
                <th className="pb-4 pl-4">Asset</th>
                <th className="pb-4">Amount</th>
                <th className="pb-4">Avg Price</th>
                <th className="pb-4">Current Value</th>
                <th className="pb-4 pr-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {holdings.length === 0 ? (
                 <tr><td colSpan="5" className="py-8 text-center text-trade-muted">No trades yet. Start trading to see data here.</td></tr>
              ) : (
                holdings.map((item, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors group last:border-0">
                    <td className="py-4 pl-4 font-bold text-white flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-trade-border flex items-center justify-center text-xs text-trade-muted">
                        {item.symbol[0]}
                      </div>
                      {item.symbol}
                    </td>
                    <td className="py-4 text-trade-muted font-mono">{Number(item.amount).toFixed(4)}</td>
                    <td className="py-4 text-trade-muted">${item.avgPrice.toLocaleString()}</td>
                    <td className="py-4 font-bold text-white">
                      ${(item.amount * item.avgPrice).toLocaleString()}
                    </td>
                    <td className="py-4 pr-4 text-right">
                      <Link href={`/dashboard/trading?asset=${item.symbol}`} className="text-xs font-bold bg-trade-primary/20 text-trade-primary hover:bg-trade-primary hover:text-white px-4 py-2 rounded-lg transition-all">
                        Trade
                      </Link>
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
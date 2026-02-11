'use client';
import { useState, useEffect, Suspense } from 'react'; // 👈 Import Suspense
import { useSearchParams } from 'next/navigation';
import ChartMock from '@/components/ChartMock';
import TradePanel from '@/components/TradePanel';
import { MARKET_DATA } from '@/data/markets';
import { FaArrowUp, FaArrowDown, FaListAlt, FaSignal } from 'react-icons/fa';

// Separate component for content that uses search params
function TradingContent() {
  const searchParams = useSearchParams();
  const symbolParam = searchParams.get('asset');
  
  // Helper to find asset
  const getAsset = (symbol) => {
    if (!symbol) return MARKET_DATA[0].assets[0];
    for (const cat of MARKET_DATA) {
      const found = cat.assets.find(a => a.symbol === symbol);
      if (found) return found;
    }
    return MARKET_DATA[0].assets[0];
  };

  const [activeAsset, setActiveAsset] = useState(getAsset(symbolParam));
  const [currentPrice, setCurrentPrice] = useState(activeAsset.price);
  
  useEffect(() => {
    const newAsset = getAsset(symbolParam);
    setActiveAsset(newAsset);
    setCurrentPrice(newAsset.price);
  }, [symbolParam]);

  useEffect(() => {
    const interval = setInterval(() => {
      const volatility = activeAsset.price * 0.0005; 
      const change = (Math.random() - 0.5) * volatility;
      setCurrentPrice(p => p + change);
    }, 2000); 
    return () => clearInterval(interval);
  }, [activeAsset]);

  const isPositive = activeAsset.change >= 0;

  return (
    <div className="flex flex-col lg:flex-row gap-6 pb-20 min-h-screen animate-[slideUp_0.5s_ease-out] relative">
      
      {/* 🌟 Ambient Background Glow */}
      <div className="fixed top-20 left-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* LEFT SIDE: Charts & Data */}
      <div className="flex-1 flex flex-col gap-6">
        
        {/* 1. Header Strip */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
          <div className={`absolute top-0 left-0 w-1 h-full ${isPositive ? 'bg-trade-success' : 'bg-trade-danger'}`}></div>
          
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-lg">
               <span className="text-2xl font-bold text-white">{activeAsset.symbol[0]}</span>
            </div>
            <div>
              <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                     {activeAsset.symbol}
                     <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-trade-muted border border-white/5">USD</span>
                  </h1>
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-trade-success/10 text-trade-success text-[10px] font-bold border border-trade-success/20 animate-pulse">
                     <span className="w-1.5 h-1.5 rounded-full bg-trade-success"></span> LIVE
                  </span>
              </div>
              <div className="flex items-baseline gap-3 mt-1">
                  <span className={`text-4xl font-bold font-mono tracking-tighter ${isPositive ? 'text-trade-success' : 'text-trade-danger'}`}>
                     ${currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  <span className={`flex items-center text-sm font-bold ${isPositive ? 'text-trade-success' : 'text-trade-danger'}`}>
                     {isPositive ? <FaArrowUp className="mr-1 text-xs" /> : <FaArrowDown className="mr-1 text-xs" />}
                     {activeAsset.change}%
                  </span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-8 mt-6 md:mt-0 w-full md:w-auto border-t md:border-t-0 border-white/10 pt-4 md:pt-0 justify-between md:justify-end">
              <div className="text-right">
                <p className="text-[10px] text-trade-muted uppercase font-bold tracking-wider">24h High</p>
                <p className="font-mono font-medium text-white">${(activeAsset.price * 1.02).toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-trade-muted uppercase font-bold tracking-wider">24h Low</p>
                <p className="font-mono font-medium text-white">${(activeAsset.price * 0.98).toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-trade-muted uppercase font-bold tracking-wider">Volume</p>
                <p className="font-mono font-medium text-white">{activeAsset.volume}</p>
              </div>
          </div>
        </div>

        {/* 2. Main Chart Area */}
        <div className="h-[550px] w-full glass-panel rounded-2xl border border-white/5 overflow-hidden relative shadow-2xl"> 
          <div className="absolute top-4 left-4 z-10 flex gap-2">
              {['1H', '4H', '1D', '1W'].map((tf) => (
                 <button key={tf} className="px-3 py-1 text-xs font-bold rounded hover:bg-white/10 text-trade-muted hover:text-white transition-colors">
                    {tf}
                 </button>
              ))}
          </div>
          <ChartMock symbol={activeAsset.symbol} />
        </div>

        {/* 3. Order Book & Sentiment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-panel p-5 rounded-2xl border border-white/5">
            <div className="flex justify-between items-center mb-4">
               <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <FaListAlt className="text-trade-muted" /> Order Book
               </h3>
               <span className="text-[10px] text-trade-muted bg-white/5 px-2 py-1 rounded">Spread: 0.02</span>
            </div>
            
            <div className="grid grid-cols-3 text-[10px] uppercase font-bold text-trade-muted mb-2 border-b border-white/5 pb-2">
               <span>Price (USD)</span>
               <span className="text-center">Amount</span>
               <span className="text-right">Total</span>
            </div>
            
            <div className="space-y-0.5 font-mono text-xs">
               {/* Sells */}
               {[1,2,3,4].map(i => (
                  <div key={`sell-${i}`} className="grid grid-cols-3 py-1 text-trade-danger hover:bg-trade-danger/5 cursor-pointer transition-colors relative">
                     <span className="relative z-10">{(currentPrice + i * 5).toFixed(2)}</span>
                     <span className="text-center text-white/60 relative z-10">{(Math.random() * 2).toFixed(4)}</span>
                     <span className="text-right text-white relative z-10">{(Math.random() * 50000).toFixed(0)}</span>
                     <div className="absolute top-0 right-0 h-full bg-trade-danger/10" style={{ width: `${Math.random() * 40}%` }}></div>
                  </div>
               ))}
                
               {/* Current Price Divider */}
               <div className="py-3 flex justify-center items-center gap-2 font-bold text-lg text-white my-1 border-y border-white/5 bg-white/5">
                  {currentPrice.toFixed(2)} 
                  {isPositive ? <FaArrowUp className="text-xs text-trade-success" /> : <FaArrowDown className="text-xs text-trade-danger" />}
               </div>

               {/* Buys */}
               {[1,2,3,4].map(i => (
                  <div key={`buy-${i}`} className="grid grid-cols-3 py-1 text-trade-success hover:bg-trade-success/5 cursor-pointer transition-colors relative">
                     <span className="relative z-10">{(currentPrice - i * 5).toFixed(2)}</span>
                     <span className="text-center text-white/60 relative z-10">{(Math.random() * 2).toFixed(4)}</span>
                     <span className="text-right text-white relative z-10">{(Math.random() * 50000).toFixed(0)}</span>
                     <div className="absolute top-0 right-0 h-full bg-trade-success/10" style={{ width: `${Math.random() * 40}%` }}></div>
                  </div>
               ))}
            </div>
          </div>
          
          {/* Market Sentiment */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col">
              <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                 <FaSignal className="text-trade-muted" /> Sentiment
              </h3>
              
              <div className="flex-1 flex flex-col justify-center">
                 <div className="flex justify-between text-xs mb-2 font-bold">
                   <span className="text-trade-success">65% Buy</span>
                   <span className="text-trade-danger">35% Sell</span>
                 </div>
                 
                 <div className="h-4 bg-black/40 rounded-full overflow-hidden flex mb-6 relative">
                   <div className="w-[65%] bg-gradient-to-r from-green-600 to-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                   <div className="w-[35%] bg-gradient-to-r from-red-500 to-rose-600 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                   <div className="absolute left-[65%] top-0 bottom-0 w-0.5 bg-white shadow-lg"></div>
                 </div>

                 <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <p className="text-[10px] text-trade-muted uppercase font-bold tracking-wider mb-1 text-center">Technical Analysis</p>
                    <p className="text-sm font-bold text-center text-trade-success">Strong Buy</p>
                    <p className="text-[10px] text-trade-muted text-center mt-1">Based on MA(50) and RSI(14)</p>
                 </div>
              </div>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE: Trade Panel */}
      <div className="w-full lg:w-96 flex-shrink-0">
        <div className="lg:sticky lg:top-6">
          <TradePanel symbol={activeAsset.symbol} price={currentPrice.toFixed(2)} />
        </div>
      </div>

    </div>
  );
}

// 🛑 Wrap in Suspense to fix build error
export default function TradingPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-white">Loading Trading Data...</div>}>
      <TradingContent />
    </Suspense>
  );
}
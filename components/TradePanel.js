'use client';
import { useState, useEffect } from 'react';
import { FaWallet, FaInfoCircle, FaBolt } from 'react-icons/fa';
import { useTrade } from '@/context/TradeContext';

export default function TradePanel({ symbol = "BTC", price }) {
  const { buyAsset, sellAsset, balance } = useTrade();
  
  const [side, setSide] = useState('buy');
  const [amountUSD, setAmountUSD] = useState('');
  const [leverage, setLeverage] = useState(1);
  const [estimatedQty, setEstimatedQty] = useState(0);

  // Parse price safely
  const currentPrice = parseFloat(price);

  // Update estimate when input changes
  useEffect(() => {
    if (!amountUSD || !currentPrice) {
      setEstimatedQty(0);
      return;
    }
    const val = parseFloat(amountUSD);
    const qty = (val * leverage) / currentPrice;
    setEstimatedQty(qty);
  }, [amountUSD, leverage, currentPrice]);

  const handleTrade = () => {
    if (!amountUSD) return;
    
    // Calculate Asset Amount
    const assetAmount = parseFloat(amountUSD) / currentPrice;

    if (side === 'buy') {
      buyAsset(symbol, currentPrice, assetAmount);
    } else {
      sellAsset(symbol, currentPrice, assetAmount);
    }
    
    setAmountUSD(''); 
  };

  const isBuy = side === 'buy';

  return (
    <div className="glass-panel p-6 rounded-2xl h-full flex flex-col relative overflow-hidden border border-white/5">
      
      {/* Background Gradient based on Side */}
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none transition-colors duration-500 ${isBuy ? 'bg-green-500/10' : 'bg-red-500/10'}`}></div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <h2 className="font-bold text-lg text-white flex items-center gap-2">
           <FaBolt className={isBuy ? 'text-trade-success' : 'text-trade-danger'} /> 
           Place Order
        </h2>
        <div className="flex bg-black/40 rounded-lg p-1 border border-white/5">
           <button className="px-3 py-1 rounded-md text-xs font-bold bg-white/10 text-white shadow-sm">Market</button>
           <button className="px-3 py-1 rounded-md text-xs font-bold text-trade-muted hover:text-white transition-colors">Limit</button>
        </div>
      </div>

      {/* Buy/Sell Toggle */}
      <div className="bg-black/40 p-1 rounded-xl flex mb-6 border border-white/5 relative z-10">
         <button 
           onClick={() => setSide('buy')}
           className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all duration-300 ${isBuy ? 'bg-trade-success text-white shadow-lg shadow-green-500/20' : 'text-trade-muted hover:text-white'}`}
         >
           Buy / Long
         </button>
         <button 
           onClick={() => setSide('sell')}
           className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all duration-300 ${!isBuy ? 'bg-trade-danger text-white shadow-lg shadow-red-500/20' : 'text-trade-muted hover:text-white'}`}
         >
           Sell / Short
         </button>
      </div>

      {/* Inputs */}
      <div className="space-y-6 flex-1 relative z-10">
         
         {/* Amount Input */}
         <div className="group">
            <div className="flex justify-between mb-2">
               <label className="text-xs font-bold text-trade-muted uppercase tracking-wider group-focus-within:text-white transition-colors">Amount (USD)</label>
               <span className="text-xs text-trade-muted flex items-center gap-1">
                  <FaWallet className="text-[10px]" /> ${balance.toLocaleString()}
               </span>
            </div>
            <div className="relative">
               <span className="absolute left-4 top-1/2 -translate-y-1/2 text-trade-muted font-bold">$</span>
               <input 
                  type="number" 
                  value={amountUSD}
                  onChange={(e) => setAmountUSD(e.target.value)}
                  className={`w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-8 pr-16 text-white font-bold outline-none focus:bg-black/40 transition-all ${isBuy ? 'focus:border-trade-success' : 'focus:border-trade-danger'}`}
                  placeholder="0.00" 
               />
               <button 
                  onClick={() => setAmountUSD(balance)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold bg-white/10 hover:bg-white/20 text-trade-primary px-2 py-1 rounded uppercase transition-colors"
               >
                  MAX
               </button>
            </div>
         </div>

         {/* Leverage Slider */}
         <div>
            <div className="flex justify-between mb-2">
               <label className="text-xs font-bold text-trade-muted uppercase tracking-wider">Leverage</label>
               <span className="text-xs font-bold text-white bg-white/10 px-2 py-0.5 rounded border border-white/5">{leverage}x</span>
            </div>
            <input 
               type="range" 
               min="1" max="100" 
               value={leverage} 
               onChange={(e) => setLeverage(e.target.value)}
               className={`w-full h-1.5 rounded-lg appearance-none cursor-pointer ${isBuy ? 'accent-trade-success bg-white/10' : 'accent-trade-danger bg-white/10'}`}
            />
            <div className="flex justify-between text-[10px] text-trade-muted mt-2 font-bold uppercase">
               <span>1x</span>
               <span>25x</span>
               <span>50x</span>
               <span>75x</span>
               <span>100x</span>
            </div>
         </div>

         {/* Order Summary */}
         <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
            <div className="flex justify-between text-xs">
               <span className="text-trade-muted">Est. Quantity</span>
               <span className="font-mono text-white">{estimatedQty.toFixed(6)} {symbol}</span>
            </div>
            <div className="flex justify-between text-xs">
               <span className="text-trade-muted">Est. Fees (0.1%)</span>
               <span className="font-mono text-white">${(parseFloat(amountUSD || 0) * 0.001).toFixed(2)}</span>
            </div>
            <div className="border-t border-white/5 my-2"></div>
            <div className="flex justify-between text-xs font-bold">
               <span className="text-trade-muted">Total Cost</span>
               <span className="font-mono text-white text-sm">${amountUSD || '0.00'}</span>
            </div>
         </div>
      </div>

      {/* Action Button */}
      <button 
        onClick={handleTrade}
        disabled={!amountUSD}
        className={`w-full py-4 mt-6 rounded-xl font-bold text-lg shadow-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group ${
           isBuy 
             ? 'bg-gradient-to-r from-green-600 to-emerald-500 hover:shadow-green-500/30 text-white' 
             : 'bg-gradient-to-r from-red-600 to-rose-500 hover:shadow-red-500/30 text-white'
        }`}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
           {isBuy ? 'Buy / Long' : 'Sell / Short'} {symbol}
        </span>
        {/* Shine Effect */}
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
      </button>

    </div>
  );
}
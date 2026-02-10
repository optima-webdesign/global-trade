'use client';
import { FaArrowUp, FaArrowDown, FaChartArea } from 'react-icons/fa';

export default function MarketCard({ asset, onClick }) {
  const isPositive = asset.change >= 0;
  
  // Generate a fake sparkline path based on trend
  const sparklineColor = isPositive ? '#10b981' : '#ef4444';
  const sparklineFill = isPositive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)';
  
  // Simple mock path data (just visual candy)
  const pathData = isPositive 
    ? "M0 30 C 20 30, 40 10, 60 15 S 90 5, 120 5 L 120 40 L 0 40 Z" // Up trend
    : "M0 10 C 20 10, 40 30, 60 25 S 90 35, 120 35 L 120 40 L 0 40 Z"; // Down trend

  const strokePath = isPositive
    ? "M0 30 C 20 30, 40 10, 60 15 S 90 5, 120 5"
    : "M0 10 C 20 10, 40 30, 60 25 S 90 35, 120 35";

  return (
    <div 
      onClick={onClick}
      className={`glass-panel p-5 rounded-2xl cursor-pointer transition-all duration-300 group relative overflow-hidden border border-white/5 hover:-translate-y-1 ${isPositive ? 'hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-green-500/30' : 'hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:border-red-500/30'}`}
    >
      {/* Background Gradient Splash */}
      <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-[50px] pointer-events-none transition-opacity opacity-0 group-hover:opacity-100 ${isPositive ? 'bg-green-500/10' : 'bg-red-500/10'}`}></div>

      {/* Top Row: Icon & Price */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center font-bold text-lg text-white border border-white/10 shadow-sm group-hover:scale-105 transition-transform">
             {asset.symbol[0]}
          </div>
          <div>
            <h3 className="font-bold text-white leading-tight group-hover:text-trade-primary transition-colors">{asset.symbol}</h3>
            <p className="text-[10px] text-trade-muted font-bold uppercase tracking-wider">{asset.name}</p>
          </div>
        </div>
      </div>

      {/* Middle: Big Price */}
      <div className="relative z-10">
        <p className="text-2xl font-bold text-white tracking-tight font-mono">
           ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </p>
      </div>

      {/* Bottom: Change & Volume */}
      <div className="flex justify-between items-end mt-4 relative z-10">
        <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-lg border ${isPositive ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
          {isPositive ? <FaArrowUp className="mr-1 text-[10px]" /> : <FaArrowDown className="mr-1 text-[10px]" />}
          {Math.abs(asset.change)}%
        </div>
        <p className="text-[10px] text-trade-muted font-medium">Vol: {asset.volume}</p>
      </div>

      {/* Chart Background Visualization */}
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none">
        <svg viewBox="0 0 120 40" className="w-full h-full" preserveAspectRatio="none">
           <path d={pathData} fill={sparklineFill} />
           <path d={strokePath} fill="none" stroke={sparklineColor} strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
  );
}
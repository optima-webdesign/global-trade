'use client';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

export default function Ticker() {
  const items = [
    { symbol: "BTC", price: "$64,230", change: "2.4%", isUp: true },
    { symbol: "ETH", price: "$3,450", change: "1.2%", isUp: false },
    { symbol: "SOL", price: "$145.20", change: "5.7%", isUp: true },
    { symbol: "AAPL", price: "$182.50", change: "1.1%", isUp: true },
    { symbol: "EUR/USD", price: "1.0850", change: "0.1%", isUp: false },
    { symbol: "GOLD", price: "$2,150", change: "1.5%", isUp: true },
    { symbol: "TSLA", price: "$175.40", change: "2.5%", isUp: false },
    { symbol: "NVDA", price: "$890.00", change: "3.2%", isUp: true },
  ];

  // Duplicate items to create a seamless loop
  const tickerItems = [...items, ...items, ...items];

  return (
    <div className="w-full h-10 bg-black/40 backdrop-blur-md border-y border-white/5 flex items-center overflow-hidden relative z-40">
      
      {/* Gradient Masks (Fade Effect) */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling Content */}
      <div className="animate-ticker flex gap-12 pl-12 whitespace-nowrap hover:pause-animation">
        {tickerItems.map((item, i) => (
          <div key={i} className="flex items-center gap-2 group cursor-default">
            <span className="text-xs font-bold text-white group-hover:text-trade-primary transition-colors">
              {item.symbol}
            </span>
            <span className="text-xs font-mono text-trade-muted">
              {item.price}
            </span>
            <span 
              className={`flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded ${
                item.isUp 
                  ? 'bg-green-500/10 text-green-400' 
                  : 'bg-red-500/10 text-red-400'
              }`}
            >
              {item.isUp ? <FaCaretUp /> : <FaCaretDown />} {item.change}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-ticker {
          animation: scroll 40s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Move half way because we duplicated data */
        }
      `}</style>
    </div>
  );
}
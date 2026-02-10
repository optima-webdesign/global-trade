'use client';
import Link from 'next/link';
import { 
  FaArrowRight, FaChartLine, FaShieldAlt, FaBolt, FaGlobe, 
  FaBitcoin, FaEthereum, FaCheckCircle, FaUserPlus 
} from 'react-icons/fa';

// 🆕 NEW DESIGN: Card Ticker Component
const MarketTicker = () => {
  const items = [
    { icon: <FaBitcoin className="text-yellow-500" />, symbol: "BTC", price: "$64,230", change: "+2.4%", color: "text-green-400", bg: "bg-yellow-500/10" },
    { icon: <FaEthereum className="text-blue-500" />, symbol: "ETH", price: "$3,450", change: "-1.2%", color: "text-red-400", bg: "bg-blue-500/10" },
    { icon: <FaGlobe className="text-purple-500" />, symbol: "SOL", price: "$145.20", change: "+5.7%", color: "text-green-400", bg: "bg-purple-500/10" },
    { icon: <FaChartLine className="text-green-500" />, symbol: "AAPL", price: "$182.50", change: "+1.1%", color: "text-green-400", bg: "bg-green-500/10" },
    { icon: <FaShieldAlt className="text-yellow-400" />, symbol: "GOLD", price: "$2,150", change: "+0.5%", color: "text-green-400", bg: "bg-yellow-400/10" },
    { icon: <FaBolt className="text-blue-400" />, symbol: "TSLA", price: "$175.40", change: "-2.5%", color: "text-red-400", bg: "bg-blue-400/10" },
  ];

  return (
    <div className="w-full bg-black/40 backdrop-blur-md border-y border-white/5 py-8 flex flex-col gap-6 overflow-hidden relative">
      
      {/* 👇 INTERNAL CSS: Ye 100% chalega */}
      <style jsx>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .ticker-container {
          display: flex;
          width: max-content;
          gap: 24px;
        }
        .animate-left {
          animation: scrollLeft 40s linear infinite;
        }
        .animate-right {
          animation: scrollRight 40s linear infinite;
        }
        .ticker-wrapper:hover .animate-left,
        .ticker-wrapper:hover .animate-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* 🟢 Line 1: Glass Cards Moving LEFT */}
      <div className="ticker-wrapper w-full overflow-hidden mask-gradient">
        <div className="ticker-container animate-left">
          {/* Double loop for seamless infinite scroll */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-6">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-3 rounded-xl backdrop-blur-md hover:bg-white/10 transition-colors w-64">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${item.bg}`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{item.symbol}</span>
                      <span className={`text-xs font-bold ${item.color}`}>{item.change}</span>
                    </div>
                    <div className="text-gray-400 text-sm font-medium">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 🔵 Line 2: Glass Cards Moving RIGHT */}
      <div className="ticker-wrapper w-full overflow-hidden mask-gradient">
        <div className="ticker-container animate-right">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-6">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-3 rounded-xl backdrop-blur-md hover:bg-white/10 transition-colors w-64">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${item.bg}`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{item.symbol}</span>
                      <span className={`text-xs font-bold ${item.color}`}>{item.change}</span>
                    </div>
                    <div className="text-gray-400 text-sm font-medium">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#050505] text-white selection:bg-trade-primary/30">
      
      {/* 🌌 Animated Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
         <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent blur-[100px]"></div>
      </div>

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
              <FaBolt className="text-lg" />
            </div>
            <span className="text-xl">Global<span className="text-blue-500">Trade</span></span>
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/auth/login" className="hidden sm:block text-sm font-bold text-gray-400 hover:text-white transition-colors">Log In</Link>
            <Link href="/auth/register" className="px-6 py-2.5 text-sm font-bold bg-white text-black rounded-full hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">Sign Up Free</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-blue-400 mb-8 animate-[slideUp_0.5s_ease-out] hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            V2.0 Live: AI-Powered Trading Signals
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 drop-shadow-2xl">
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Digital Trading.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Institutional-grade execution with zero latency. Trade Crypto, Stocks, and Forex with <span className="text-white">real-time analytics</span> and AI precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24">
            <Link href="/dashboard" className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-full text-lg transition-all hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)] hover:-translate-y-1 flex items-center gap-3 group">
              Start Trading Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/dashboard/markets" className="px-10 py-4 glass-panel rounded-full text-lg font-bold hover:bg-white/10 transition-all hover:-translate-y-1 border border-white/10">
              View Live Markets
            </Link>
          </div>
          
          {/* 3D Dashboard Mockup */}
          <div className="relative mx-auto max-w-6xl perspective-[2000px] group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
            <FaBitcoin className="text-yellow-500 text-7xl absolute -top-16 -left-16 animate-[float_6s_ease-in-out_infinite] drop-shadow-[0_0_30px_rgba(234,179,8,0.5)] z-20" />
            <FaEthereum className="text-purple-500 text-6xl absolute top-10 -right-10 animate-[float_7s_ease-in-out_infinite_1s] drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] z-20" />
            <div className="glass-panel p-3 rounded-2xl border-t border-white/20 shadow-2xl transform rotate-x-[20deg] group-hover:rotate-x-[10deg] transition-transform duration-1000 ease-out overflow-hidden bg-[#0a0a0a]">
               <div className="h-full bg-black rounded-xl overflow-hidden border border-white/5 relative">
                  <div className="h-12 border-b border-white/5 flex items-center px-5 gap-2 bg-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <div className="ml-4 w-64 h-6 rounded-full bg-white/5"></div>
                  </div>
                  <div className="p-8 grid grid-cols-12 gap-6 h-[500px] bg-gradient-to-br from-gray-900 to-black relative">
                      <div className="col-span-2 hidden md:block bg-white/5 rounded-xl border border-white/5"></div>
                      <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
                         <div className="h-64 bg-white/5 rounded-xl border border-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-end px-4 pb-4">
                               <div className="w-full h-32 bg-gradient-to-t from-blue-500/20 to-transparent clip-path-polygon"></div>
                            </div>
                            <svg className="absolute bottom-10 left-0 w-full h-32 stroke-blue-500 stroke-2 fill-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                               <path d="M0 20 L10 15 L20 18 L30 10 L40 12 L50 5 L60 8 L70 2 L80 5 L90 0 L100 5" vectorEffect="non-scaling-stroke" />
                            </svg>
                         </div>
                         <div className="flex-1 bg-white/5 rounded-xl border border-white/5"></div>
                      </div>
                      <div className="col-span-3 hidden md:block bg-white/5 rounded-xl border border-white/5"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Link href="/dashboard" className="px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                      Launch Dashboard
                    </Link>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-24 left-10 right-10 h-32 bg-gradient-to-t from-blue-600/20 to-transparent blur-[60px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* 🟢 NEW TICKER COMPONENT HERE */}
      <MarketTicker />

      <section className="py-20 border-b border-white/5 relative bg-black/20">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><p className="text-4xl md:text-5xl font-bold text-white mb-2">$5B+</p><p className="text-trade-muted uppercase text-xs font-bold tracking-wider">Quarterly Volume</p></div>
            <div><p className="text-4xl md:text-5xl font-bold text-white mb-2">100K+</p><p className="text-trade-muted uppercase text-xs font-bold tracking-wider">Verified Users</p></div>
            <div><p className="text-4xl md:text-5xl font-bold text-white mb-2">0.05s</p><p className="text-trade-muted uppercase text-xs font-bold tracking-wider">Latency Speed</p></div>
            <div><p className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</p><p className="text-trade-muted uppercase text-xs font-bold tracking-wider">Support Online</p></div>
         </div>
      </section>

      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Win</span>.</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Our platform is built for speed, reliability, and precision. Whether you are a beginner or a pro, we have the tools for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-10 rounded-3xl md:col-span-2 relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
               <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] -mr-20 -mt-20 group-hover:bg-blue-600/20 transition-colors"></div>
               <div className="relative z-10">
                 <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20"><FaChartLine className="text-3xl text-blue-400" /></div>
                 <h3 className="text-3xl font-bold mb-4 text-white">Advanced Charting Engine</h3>
                 <p className="text-gray-400 text-lg max-w-lg leading-relaxed">Technical analysis tools powered by TradingView style engines. Access 100+ indicators, multiple timeframes, and drawing tools directly from your dashboard.</p>
               </div>
            </div>
            <div className="glass-panel p-10 rounded-3xl relative overflow-hidden group hover:border-green-500/30 transition-colors duration-500">
               <div className="relative z-10">
                 <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-8 border border-green-500/20"><FaShieldAlt className="text-3xl text-green-400" /></div>
                 <h3 className="text-2xl font-bold mb-4 text-white">Bank-Grade Security</h3>
                 <p className="text-gray-400 leading-relaxed">Your funds are stored in cold wallets and protected by 256-bit encryption. We never compromise on security.</p>
               </div>
            </div>
            <div className="glass-panel p-10 rounded-3xl relative overflow-hidden group hover:border-yellow-500/30 transition-colors duration-500">
               <div className="relative z-10">
                 <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-8 border border-yellow-500/20"><FaBolt className="text-3xl text-yellow-400" /></div>
                 <h3 className="text-2xl font-bold mb-4 text-white">Lightning Execution</h3>
                 <p className="text-gray-400 leading-relaxed">Zero latency order matching engine capable of 100,000 transactions per second.</p>
               </div>
            </div>
            <div className="glass-panel p-10 rounded-3xl md:col-span-2 relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
               <div className="relative z-10">
                 <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20"><FaGlobe className="text-3xl text-purple-400" /></div>
                 <h3 className="text-3xl font-bold mb-4 text-white">Global Market Access</h3>
                 <p className="text-gray-400 text-lg max-w-lg leading-relaxed">Trade 500+ assets across Crypto, Stocks, and Forex markets from a single unified account. One wallet, infinite possibilities.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">Ready to start?</h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join the fastest growing trading platform today. Setup takes less than 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Link href="/auth/register" className="px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-[0_0_60px_-15px_rgba(255,255,255,0.6)] flex items-center justify-center gap-3">
                 <FaUserPlus /> Create Free Account
               </Link>
               <Link href="/dashboard/markets" className="px-12 py-5 glass-panel rounded-full text-xl font-bold hover:bg-white/10 transition-colors">
                 Explore Markets
               </Link>
            </div>
            <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-500 font-medium">
               <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> No credit card required</span>
               <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Instant verification</span>
            </div>
         </div>
      </section>

      <footer className="border-t border-white/5 py-16 px-6 bg-black">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
               <div className="text-2xl font-bold flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white"><FaBolt /></div>
                  GlobalTrade
               </div>
               <p className="text-gray-500 max-w-xs leading-relaxed">The world's most advanced digital asset trading platform.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
               <div>
                  <h4 className="font-bold text-white mb-6">Platform</h4>
                  <ul className="space-y-4 text-gray-500 text-sm">
                     <li><Link href="/dashboard/markets" className="hover:text-blue-400 transition-colors">Markets</Link></li>
                     <li><Link href="/dashboard/trading" className="hover:text-blue-400 transition-colors">Trading</Link></li>
                     <li><Link href="/dashboard/advisory" className="hover:text-blue-400 transition-colors">AI Signals</Link></li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-white mb-6">Support</h4>
                  <ul className="space-y-4 text-gray-500 text-sm">
                     <li><Link href="/help" className="hover:text-blue-400 transition-colors">Help Center</Link></li>
                     <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                     <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-white mb-6">Connect</h4>
                  <ul className="space-y-4 text-gray-500 text-sm">
                     <li><a href="https://x.com/optimaweb12" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">X (Twitter)</a></li>
                     <li><a href="https://www.linkedin.com/in/optima-webdesign-28a011342/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">LinkedIn</a></li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>© 2026 GlobalTrade Inc. All rights reserved.</p>
            <p className="flex items-center gap-1">Powered by <Link href="https://optimawebdesign.in" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white font-bold transition-colors">Optima Web Design</Link></p>
         </div>
      </footer>

    </div>
  );
}
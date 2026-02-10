import Link from 'next/link';
import { MARKET_DATA } from '@/data/markets';
import MarketCard from '@/components/MarketCard';
import { FaArrowRight, FaGlobe, FaBitcoin, FaBuilding, FaLeaf, FaSearch } from 'react-icons/fa';

// Helper to assign icons/colors to categories
const getCategoryDetails = (category) => {
  const c = category.toLowerCase();
  if (c === 'crypto') return { icon: <FaBitcoin />, color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' };
  if (c === 'stocks') return { icon: <FaBuilding />, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' };
  if (c === 'forex') return { icon: <FaGlobe />, color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' };
  if (c === 'commodities') return { icon: <FaLeaf />, color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' };
  return { icon: <FaGlobe />, color: 'text-trade-primary', bg: 'bg-trade-primary/10', border: 'border-trade-primary/20' };
};

export default function MarketsPage() {
  return (
    <div className="space-y-12 animate-[slideUp_0.5s_ease-out] relative min-h-screen pb-20">
      
      {/* 🌟 Ambient Background Glows */}
      <div className="fixed top-40 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Global Markets</h1>
          <p className="text-trade-muted text-lg max-w-xl">
            Track real-time prices across major global exchanges.
          </p>
        </div>
        
        {/* Market Status Badge */}
        <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-3 border border-white/10">
           <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
           </div>
           <span className="text-sm font-bold text-white">Markets Open</span>
           <div className="h-4 w-px bg-white/10 mx-1"></div>
           <span className="text-xs text-trade-muted">24h Vol: $42.8B</span>
        </div>
      </div>

      {/* Search Bar Mockup */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="glass-panel p-1 rounded-2xl flex items-center relative bg-trade-card/80">
           <FaSearch className="text-trade-muted ml-4 text-lg" />
           <input 
             type="text" 
             placeholder="Search for an asset (e.g. BTC, Apple, Gold)..." 
             className="w-full bg-transparent border-none outline-none text-white p-4 placeholder-trade-muted font-medium"
           />
           <button className="bg-trade-primary hover:bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold transition-colors shadow-lg shadow-blue-500/20 mr-1">
             Search
           </button>
        </div>
      </div>

      {/* Categories Loop */}
      <div className="space-y-10">
        {MARKET_DATA.map((categoryData) => {
          const style = getCategoryDetails(categoryData.category);
          
          return (
            <div key={categoryData.category} className="space-y-6">
              
              {/* Category Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${style.bg} ${style.color} border ${style.border} shadow-lg backdrop-blur-sm`}>
                    {style.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{categoryData.category}</h2>
                    <p className="text-xs text-trade-muted uppercase tracking-wider font-bold">Top Performing Assets</p>
                  </div>
                </div>
                
                <Link 
                  href={`/dashboard/markets/${categoryData.category.toLowerCase()}`} 
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/5 hover:bg-white/5 hover:border-white/20 transition-all active:scale-95"
                >
                  <span className="text-sm font-bold text-trade-muted group-hover:text-white transition-colors">View All</span>
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-trade-primary group-hover:text-white transition-colors">
                     <FaArrowRight className="text-xs" />
                  </div>
                </Link>
              </div>

              {/* Assets Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryData.assets.map((asset) => (
                  <Link key={asset.id} href={`/dashboard/trading?asset=${asset.symbol}`}>
                     <div className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-trade-primary/5">
                        <MarketCard asset={asset} />
                     </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
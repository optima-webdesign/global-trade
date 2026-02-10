import Link from 'next/link';
import { MARKET_DATA } from '@/data/markets';
import MarketCard from '@/components/MarketCard';
import { FaArrowLeft, FaGlobe, FaBitcoin, FaChartBar, FaLeaf } from 'react-icons/fa';

// Helper to get icon based on category
const getCategoryIcon = (cat) => {
  const c = cat.toLowerCase();
  if (c === 'crypto') return <FaBitcoin className="text-4xl text-yellow-500" />;
  if (c === 'stocks') return <FaChartBar className="text-4xl text-blue-500" />;
  if (c === 'forex') return <FaGlobe className="text-4xl text-green-500" />;
  if (c === 'commodities') return <FaLeaf className="text-4xl text-orange-500" />;
  return <FaChartBar className="text-4xl text-trade-primary" />;
};

export default async function CategoryPage({ params }) {
  // Await params for Next.js 15+ compatibility
  const { category } = await params;
  
  // Find data
  const data = MARKET_DATA.find(
    (m) => m.category.toLowerCase() === category.toLowerCase()
  );

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4">
        <h2 className="text-3xl font-bold text-trade-muted">Market Not Found</h2>
        <Link href="/dashboard/markets" className="text-trade-primary hover:underline">Return to Markets</Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-[slideUp_0.5s_ease-out] relative min-h-screen pb-20">
      
      {/* 🌟 Ambient Background Glow */}
      <div className="fixed top-20 right-0 w-[400px] h-[400px] bg-trade-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Back Navigation */}
      <Link 
        href="/dashboard/markets" 
        className="inline-flex items-center gap-2 text-trade-muted hover:text-white transition-colors group px-4 py-2 rounded-full hover:bg-white/5 w-fit"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
        <span className="font-medium text-sm">Back to Overview</span>
      </Link>

      {/* Hero Header */}
      <div className="glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 border-t border-white/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
        
        {/* Icon Box */}
        <div className="w-20 h-20 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-md">
          {getCategoryIcon(category)}
        </div>

        <div className="text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-bold capitalize mb-2 tracking-tight text-white">
            {category} <span className="text-trade-muted font-light">Market</span>
          </h1>
          <p className="text-trade-muted text-lg max-w-xl">
            Real-time pricing, volume data, and performance metrics for top {category} assets.
          </p>
        </div>
      </div>

      {/* Assets Grid */}
      <div>
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="w-1.5 h-6 bg-trade-primary rounded-full"></span> 
            Available Assets
          </h2>
          <span className="text-xs font-bold bg-trade-primary/10 text-trade-primary px-3 py-1 rounded-full border border-trade-primary/20">
            {data.assets.length} Pairs Active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.assets.map((asset) => (
            <Link key={asset.id} href={`/dashboard/trading?asset=${asset.symbol}`}>
              <div className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-trade-primary/10">
                <MarketCard asset={asset} />
              </div>
            </Link>
          ))}
          
          {/* Premium Placeholders */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-dashed border-white/10 bg-white/5 rounded-3xl p-6 flex flex-col justify-center items-center text-trade-muted opacity-60 hover:opacity-100 hover:border-trade-muted/50 transition-all cursor-not-allowed min-h-[180px] group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                 <span className="text-2xl font-light text-trade-muted group-hover:text-white">+</span>
              </div>
              <span className="font-medium text-sm">Coming Soon</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
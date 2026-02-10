import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Ticker from '@/components/Ticker'; 

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-trade-bg text-trade-text overflow-hidden">
      {/* 1. Top Navigation */}
      <Navbar />

      <div className="flex flex-1 pt-16">
        {/* 2. Left Sidebar (Fixed) */}
        <Sidebar />

        {/* 3. Main Content Area (Scrollable) */}
        {/* 🔴 FIX: Added 'h-[calc(100vh-4rem)]' to force height calculation */}
        {/* 🔴 FIX: Added 'overflow-y-auto' to enable scrolling inside this box */}
        <main className="flex-1 lg:ml-64 h-[calc(100vh-4rem)] overflow-y-auto p-6 relative custom-scrollbar">
          
          {/* Market Ticker at Top */}
          <div className="mb-6 rounded-lg overflow-hidden border border-trade-border shrink-0">
             <div className="bg-trade-card py-2 px-4 text-sm font-mono whitespace-nowrap overflow-hidden">
               <span className="animate-pulse text-trade-success">BTC: $64,230 (+2.4%) &nbsp;&nbsp; ETH: $3,450 (-1.2%) &nbsp;&nbsp; NVDA: $890 (+3.2%)</span>
             </div>
          </div>

          {/* Page Content */}
          <div className="pb-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
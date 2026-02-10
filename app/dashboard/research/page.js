'use client';
import { NEWS, ECONOMIC_CALENDAR } from '@/data/research';
import { FaCalendarAlt, FaNewspaper, FaExternalLinkAlt, FaGlobeAmericas, FaClock } from 'react-icons/fa';

export default function ResearchPage() {
  return (
    <div className="space-y-8 animate-[slideUp_0.5s_ease-out] relative min-h-screen">
      
      {/* 🌟 Ambient Background Glow */}
      <div className="fixed top-20 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-20 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Market Intelligence</h1>
          <p className="text-trade-muted">Real-time news, analysis, and economic events.</p>
        </div>
        <div className="hidden md:flex gap-2">
           <span className="px-3 py-1 bg-trade-primary/10 text-trade-primary text-xs font-bold rounded-lg border border-trade-primary/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-trade-primary animate-pulse"></span> Live Feed
           </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: News Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2 mb-4">
             <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                <FaNewspaper /> 
             </div>
             <h2 className="font-bold text-lg">Latest Headlines</h2>
          </div>
          
          <div className="space-y-4">
            {NEWS.map((item) => (
              <div key={item.id} className="glass-panel p-6 rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-pointer group relative overflow-hidden border border-white/5">
                {/* Sentiment Glow Bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                  item.sentiment === 'positive' ? 'bg-trade-success' : 
                  item.sentiment === 'negative' ? 'bg-trade-danger' : 
                  'bg-trade-muted'
                }`}></div>

                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                       <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider border ${
                         item.sentiment === 'positive' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                         item.sentiment === 'negative' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 
                         'bg-gray-500/10 text-gray-400 border-gray-500/20'
                       }`}>
                         {item.sentiment}
                       </span>
                       <span className="text-xs text-trade-muted flex items-center gap-1">
                          <FaClock className="text-[10px]" /> {item.time}
                       </span>
                    </div>
                    
                    <h3 className="text-xl font-bold leading-snug text-white group-hover:text-trade-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs text-trade-muted font-medium">
                       <span className="text-white opacity-60">Source:</span> {item.source}
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-trade-muted opacity-0 group-hover:opacity-100 transition-all group-hover:bg-trade-primary group-hover:text-white">
                    <FaExternalLinkAlt className="text-xs" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-4 text-sm font-bold text-trade-muted hover:text-white transition-colors border border-dashed border-trade-border rounded-xl hover:bg-white/5 hover:border-white/20">
             Load More News
          </button>
        </div>

        {/* Right: Economic Calendar */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
             <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                <FaCalendarAlt /> 
             </div>
             <h2 className="font-bold text-lg">Economic Calendar</h2>
          </div>
          
          <div className="glass-panel rounded-3xl overflow-hidden p-1">
            <div className="bg-black/20 rounded-[20px] overflow-hidden">
               {ECONOMIC_CALENDAR.map((event, i) => (
                 <div key={i} className="p-5 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group relative">
                   <div className="flex justify-between items-start mb-2">
                     <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-bold text-white bg-white/10 px-2 py-1 rounded-md">{event.time}</span>
                        <div className="flex items-center gap-1 text-xs text-trade-muted bg-black/40 px-2 py-1 rounded-md">
                           <FaGlobeAmericas className="text-[10px]" /> {event.country}
                        </div>
                     </div>
                     <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        event.impact === 'High' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 
                        event.impact === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                        'bg-gray-500/10 text-gray-400 border-gray-500/20'
                     }`}>
                       {event.impact}
                     </span>
                   </div>
                   <p className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors pl-1 border-l-2 border-transparent group-hover:border-trade-primary">
                      {event.event}
                   </p>
                   <div className="mt-2 flex justify-between text-xs text-trade-muted">
                      <span>Previous: <span className="text-white">--</span></span>
                      <span>Forecast: <span className="text-white">--</span></span>
                   </div>
                 </div>
               ))}
            </div>
            <button className="w-full py-3 text-sm font-bold text-trade-primary hover:bg-white/5 transition-colors rounded-b-2xl mt-1">
              View Full Calendar
            </button>
          </div>

          {/* Mini Widget: Market Hours */}
          <div className="glass-panel p-6 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[40px] pointer-events-none -mr-10 -mt-10"></div>
             <h3 className="text-sm font-bold text-trade-muted uppercase tracking-wider mb-4">Market Status</h3>
             <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                   <span className="flex items-center gap-2 text-white"><span className="w-2 h-2 rounded-full bg-green-500"></span> New York</span>
                   <span className="text-green-400 font-bold text-xs bg-green-500/10 px-2 py-0.5 rounded">OPEN</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                   <span className="flex items-center gap-2 text-white"><span className="w-2 h-2 rounded-full bg-green-500"></span> London</span>
                   <span className="text-green-400 font-bold text-xs bg-green-500/10 px-2 py-0.5 rounded">OPEN</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                   <span className="flex items-center gap-2 text-trade-muted"><span className="w-2 h-2 rounded-full bg-red-500"></span> Tokyo</span>
                   <span className="text-red-400 font-bold text-xs bg-red-500/10 px-2 py-0.5 rounded">CLOSED</span>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
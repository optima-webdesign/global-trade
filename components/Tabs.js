'use client';

export default function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex items-center gap-1 p-1.5 bg-black/20 border border-white/10 rounded-2xl w-fit mb-8 backdrop-blur-md">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 overflow-hidden group ${
              isActive
                ? 'text-white shadow-lg shadow-blue-900/20'
                : 'text-trade-muted hover:text-white hover:bg-white/5'
            }`}
          >
            {/* Active Background Gradient & Glow */}
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl -z-10 animate-in fade-in zoom-in-95 duration-200">
                <div className="absolute inset-0 bg-white/20 blur-md"></div>
              </div>
            )}
            
            {/* Tab Text */}
            <span className="relative z-10">{tab}</span>
          </button>
        );
      })}
    </div>
  );
}
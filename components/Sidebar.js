'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaHome, FaChartLine, FaBriefcase, FaRobot, 
  FaNewspaper, FaWallet, FaGraduationCap, FaHeadset, FaSignOutAlt, FaExchangeAlt, FaBars, FaTimes
} from 'react-icons/fa';

const MENU_ITEMS = [
  { name: 'Dashboard', path: '/dashboard', icon: <FaHome /> },
  { name: 'Markets', path: '/dashboard/markets', icon: <FaChartLine /> },
  { name: 'Trading', path: '/dashboard/trading', icon: <FaExchangeAlt /> },
  { name: 'Portfolio', path: '/dashboard/portfolio', icon: <FaBriefcase /> },
  { name: 'Advisory', path: '/dashboard/advisory', icon: <FaRobot /> },
  { name: 'Research', path: '/dashboard/research', icon: <FaNewspaper /> },
  { name: 'Wallet', path: '/dashboard/wallet', icon: <FaWallet /> },
  { name: 'Education', path: '/dashboard/education', icon: <FaGraduationCap /> },
  { name: 'Support', path: '/dashboard/support', icon: <FaHeadset /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Don't show sidebar on auth pages or home landing page
  const isAuthPage = pathname.includes('/auth') || pathname === '/';

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  if (isAuthPage) return null;

  // Reusable Nav Links Component
  const NavLinks = () => (
    <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
      <p className="px-4 text-[10px] font-bold text-trade-muted uppercase tracking-wider mb-2 opacity-70">
        Main Menu
      </p>
      
      {MENU_ITEMS.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link 
            key={item.path} 
            href={item.path}
            className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 relative overflow-hidden ${
              isActive 
                ? 'bg-gradient-to-r from-trade-primary/20 to-transparent text-white shadow-[inset_2px_0_0_0_#3b82f6]' 
                : 'text-trade-muted hover:text-white hover:bg-white/5'
            }`}
          >
            {/* Active Glow Background */}
            {isActive && (
              <div className="absolute inset-0 bg-blue-500/5 blur-md"></div>
            )}

            <span className={`text-lg transition-transform group-hover:scale-110 ${isActive ? 'text-trade-primary' : 'text-trade-muted group-hover:text-white'}`}>
              {item.icon}
            </span>
            <span className="relative z-10">{item.name}</span>
            
            {/* Hover Arrow (Subtle) */}
            {!isActive && (
              <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      {/* 📱 MOBILE: Floating Toggle Button (Visible only on small screens) */}
      <button 
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-trade-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/40 hover:scale-110 transition-transform active:scale-95"
      >
        <FaBars className="text-xl" />
      </button>

      {/* 📱 MOBILE: Slide-out Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop Blur */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        ></div>

        {/* The Sidebar Drawer */}
        <aside 
          className={`absolute top-0 left-0 w-72 h-full bg-[#0a0a0a] border-r border-white/10 flex flex-col transition-transform duration-300 shadow-2xl ${
            isMobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
           {/* Mobile Header */}
           <div className="p-6 border-b border-white/10 flex justify-between items-center">
             <span className="text-xl font-bold tracking-tight text-white">
                Global<span className="text-trade-primary">Trade</span>
             </span>
             <button 
               onClick={() => setIsMobileOpen(false)}
               className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-trade-muted hover:text-white transition-colors"
             >
               <FaTimes />
             </button>
           </div>
           
           {/* Mobile Links */}
           <NavLinks />

           {/* Mobile Logout */}
           <div className="p-4 border-t border-white/5 bg-black/20">
            <Link 
              href="/auth/login" 
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold text-trade-muted hover:text-white hover:bg-red-500/10 hover:border-red-500/20 border border-transparent transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors">
                <FaSignOutAlt />
              </div>
              <span>Log Out</span>
            </Link>
          </div>
        </aside>
      </div>

      {/* 💻 DESKTOP: Static Sidebar (Hidden on Mobile) */}
      <aside className="w-64 h-[calc(100vh-5rem)] fixed top-20 left-0 border-r border-white/5 bg-black/40 backdrop-blur-xl hidden lg:flex flex-col z-40 transition-all duration-300">
        <NavLinks />
        <div className="p-4 border-t border-white/5 bg-black/20">
          <Link 
            href="/auth/login" 
            className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold text-trade-muted hover:text-white hover:bg-red-500/10 hover:border-red-500/20 border border-transparent transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors">
               <FaSignOutAlt />
            </div>
            <span>Log Out</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
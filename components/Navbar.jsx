'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBell, FaWallet, FaSearch, FaCog, FaSignOutAlt, FaUser, FaBolt, FaChevronDown } from 'react-icons/fa';
import { useTrade } from '@/context/TradeContext';

export default function Navbar() {
  const { balance, user, logoutUser } = useTrade();
  
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Dummy Notifications Data
  const notifications = [
    { id: 1, text: "Bitcoin is up by 5% today!", time: "2m ago", type: "success" },
    { id: 2, text: "Deposit of $5,000 successful.", time: "1h ago", type: "info" },
    { id: 3, text: "New device login detected.", time: "3h ago", type: "warning" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-black/40 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-[1920px] mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Left: Logo & Search */}
        <div className="flex items-center gap-10">
          <Link href="/dashboard" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
               <FaBolt />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Global<span className="text-trade-primary">Trade</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 w-80 focus-within:border-trade-primary/50 focus-within:bg-black/40 transition-all">
            <FaSearch className="text-trade-muted mr-3 text-sm" />
            <input 
              type="text" 
              placeholder="Search assets, markets, or news..." 
              className="bg-transparent border-none outline-none text-sm text-white w-full placeholder-trade-muted font-medium"
            />
            <span className="text-xs text-trade-muted border border-white/10 px-1.5 py-0.5 rounded">/</span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 relative">
          
          {/* Balance Display (Dynamic) */}
          <div className="hidden md:flex flex-col items-end mr-4">
            <span className="text-[10px] text-trade-muted uppercase font-bold tracking-wider">Total Balance</span>
            <span className="text-lg font-bold text-white font-mono tracking-tight">
              ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
          
          {/* Wallet Button */}
          <Link 
            href="/dashboard/wallet" 
            className="w-10 h-10 rounded-xl flex items-center justify-center text-trade-muted hover:text-white hover:bg-white/10 transition-all border border-transparent hover:border-white/5"
          >
            <FaWallet />
          </Link>

          {/* 🔔 Notifications Dropdown */}
          <div className="relative">
            <button 
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-trade-muted hover:text-white hover:bg-white/10 transition-all border border-transparent hover:border-white/5 relative"
            >
              <FaBell />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-trade-danger rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-4 w-80 glass-panel rounded-2xl shadow-2xl overflow-hidden animate-[slideUp_0.2s_ease-out] border border-white/10">
                <div className="p-4 border-b border-white/5 flex justify-between items-center bg-black/40">
                  <h3 className="font-bold text-sm text-white">Notifications</h3>
                  <span className="text-[10px] font-bold text-trade-primary cursor-pointer hover:underline">MARK ALL READ</span>
                </div>
                <div className="max-h-72 overflow-y-auto bg-black/20">
                  {notifications.map((note) => (
                    <div key={note.id} className="p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors relative group">
                      <div className={`absolute left-0 top-0 bottom-0 w-1 ${note.type === 'success' ? 'bg-green-500' : note.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
                      <p className="text-sm text-gray-200 font-medium">{note.text}</p>
                      <p className="text-xs text-trade-muted mt-1.5">{note.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center border-t border-white/5 bg-black/40 hover:bg-white/5 transition-colors cursor-pointer">
                  <span className="text-xs font-bold text-trade-muted">View Full History</span>
                </div>
              </div>
            )}
          </div>

          {/* 👤 Profile Dropdown */}
          <div className="relative pl-4 border-l border-white/10">
            <button 
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
              className="flex items-center gap-3 hover:bg-white/5 px-2 py-1.5 rounded-xl transition-all border border-transparent hover:border-white/5"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {user.name ? user.name.charAt(0).toUpperCase() : 'G'}
              </div>
              <div className="hidden sm:block text-left">
                 <p className="text-sm font-bold text-white leading-none">{user.name || 'Guest'}</p>
                 <p className="text-[10px] text-trade-muted mt-1 leading-none">Pro Plan</p>
              </div>
              <FaChevronDown className="text-xs text-trade-muted ml-1" />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-4 w-60 glass-panel rounded-2xl shadow-2xl overflow-hidden animate-[slideUp_0.2s_ease-out] border border-white/10">
                <div className="p-5 border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                  <p className="font-bold text-white text-lg">{user.name || 'Guest User'}</p>
                  <p className="text-xs text-trade-muted mt-1 truncate">{user.email || 'guest@example.com'}</p>
                  <div className="mt-3 inline-block px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-[10px] font-bold border border-green-500/20">
                     VERIFIED TRADER
                  </div>
                </div>
                
                <div className="p-2 space-y-1 bg-black/20">
                  <Link href="/dashboard/profile" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                    <FaUser className="text-trade-primary" /> My Profile
                  </Link>
                  <Link href="/dashboard/settings" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                    <FaCog className="text-trade-primary" /> Settings
                  </Link>
                  <Link href="/dashboard/wallet" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                    <FaWallet className="text-trade-primary" /> Billing
                  </Link>
                </div>
                
                <div className="p-2 border-t border-white/5 bg-black/40">
                  <button 
                    onClick={logoutUser}
                    className="w-full text-left flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-xl transition-colors font-medium"
                  >
                    <FaSignOutAlt /> Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}
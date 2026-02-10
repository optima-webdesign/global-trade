'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useTrade } from '@/context/TradeContext';
import { FaEnvelope, FaLock, FaArrowRight, FaBolt } from 'react-icons/fa';

export default function LoginPage() {
  const { loginUser } = useTrade();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* 🌟 Background Ambient Animation */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 animate-[float_10s_ease-in-out_infinite_reverse]"></div>

      {/* 💎 Glass Card */}
      <div className="glass-panel p-10 rounded-3xl w-full max-w-md relative z-10 shadow-2xl animate-[slideUp_0.5s_ease-out] border-t border-white/10">
        
        {/* Header Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 mb-6 shadow-lg shadow-blue-500/40">
            <FaBolt className="text-2xl text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-white tracking-tight">Welcome Back</h1>
          <p className="text-trade-muted">Enter your credentials to access the terminal.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email Input */}
          <div className="group">
            <label className="text-xs font-bold text-trade-muted uppercase tracking-wider mb-2 block group-focus-within:text-trade-primary transition-colors">Email Address</label>
            <div className="relative flex items-center">
              <FaEnvelope className="absolute left-4 text-trade-muted group-focus-within:text-trade-primary transition-colors" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-black/20 border border-trade-border rounded-xl py-3.5 pl-12 pr-4 text-white outline-none focus:border-trade-primary focus:bg-trade-primary/5 transition-all" 
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="group">
            <label className="text-xs font-bold text-trade-muted uppercase tracking-wider mb-2 block group-focus-within:text-trade-primary transition-colors">Password</label>
            <div className="relative flex items-center">
              <FaLock className="absolute left-4 text-trade-muted group-focus-within:text-trade-primary transition-colors" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-black/20 border border-trade-border rounded-xl py-3.5 pl-12 pr-4 text-white outline-none focus:border-trade-primary focus:bg-trade-primary/5 transition-all" 
              />
            </div>
          </div>

          {/* Action Button */}
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
          >
            Sign In to Dashboard <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center mt-8 text-sm text-trade-muted">
          Don't have an account? <Link href="/auth/register" className="text-trade-primary font-bold hover:text-white transition-colors">Create Free Account</Link>
        </p>
      </div>
    </div>
  );
}
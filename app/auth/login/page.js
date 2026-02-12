'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useTrade } from '@/context/TradeContext';
import { FaEnvelope, FaLock, FaArrowRight, FaBolt, FaArrowLeft } from 'react-icons/fa';

export default function LoginPage() {
  const { loginUser } = useTrade();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050505]">
      
      {/* 🌟 Background Ambient Animation */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 animate-[float_10s_ease-in-out_infinite_reverse]"></div>

      {/* 💎 Glass Card */}
      <div className="glass-panel p-10 rounded-3xl w-full max-w-md relative z-10 shadow-2xl animate-[slideUp_0.5s_ease-out] border border-white/10 bg-black/40 backdrop-blur-xl">
        
        {/* 🔙 Back Button (Top Left) */}
        <Link 
          href="/" 
          className="absolute top-6 left-6 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all group"
          title="Back to Home"
        >
          <FaArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
        </Link>

        {/* Header Logo */}
        <div className="text-center mb-10 mt-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 mb-6 shadow-lg shadow-blue-600/30 ring-1 ring-white/20">
            <FaBolt className="text-3xl text-white" />
          </div>
          <h1 className="text-3xl font-extrabold mb-2 text-white tracking-tight">Welcome Back</h1>
          <p className="text-gray-400 text-sm">Enter your credentials to access the terminal.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Email Input */}
          <div className="group">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block group-focus-within:text-blue-400 transition-colors">Email Address</label>
            <div className="relative flex items-center">
              <FaEnvelope className="absolute left-4 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all" 
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="group">
            <div className="flex justify-between items-center mb-2">
               <label className="text-xs font-bold text-gray-500 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">Password</label>
               <a href="#" className="text-xs text-blue-400 hover:text-white transition-colors">Forgot?</a>
            </div>
            <div className="relative flex items-center">
              <FaLock className="absolute left-4 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all" 
              />
            </div>
          </div>

          {/* Action Button */}
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group mt-2"
          >
            Sign In to Dashboard <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center mt-8 text-sm text-gray-500">
          Don't have an account? <Link href="/auth/register" className="text-blue-400 font-bold hover:text-white transition-colors">Create Free Account</Link>
        </p>
      </div>
    </div>
  );
}
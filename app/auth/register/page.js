'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useTrade } from '@/context/TradeContext';
import { FaUser, FaEnvelope, FaLock, FaArrowRight, FaBolt } from 'react-icons/fa';

export default function RegisterPage() {
  const { registerUser } = useTrade();
  
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password) return alert("Please fill details");
    
    // Combine names
    const fullName = `${formData.firstName} ${formData.lastName}`;
    registerUser(fullName, formData.email, formData.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* 🌟 Background Ambient Animation */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 animate-[float_10s_ease-in-out_infinite_reverse]"></div>

      {/* 💎 Glass Card */}
      <div className="glass-panel p-10 rounded-3xl w-full max-w-md relative z-10 shadow-2xl animate-[slideUp_0.5s_ease-out] border-t border-white/10">
        
        {/* Header Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-green-500 to-emerald-600 mb-6 shadow-lg shadow-green-500/40">
            <FaBolt className="text-2xl text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-white tracking-tight">Create Account</h1>
          <p className="text-trade-muted">Join the revolution. Start trading in seconds.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
               <FaUser className="absolute left-4 top-4 text-trade-muted" />
               <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full bg-black/20 border border-trade-border rounded-xl py-3.5 pl-12 pr-4 text-white outline-none focus:border-trade-primary focus:bg-trade-primary/5 transition-all"
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
               />
            </div>
            <div className="relative">
               <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full bg-black/20 border border-trade-border rounded-xl py-3.5 px-4 text-white outline-none focus:border-trade-primary focus:bg-trade-primary/5 transition-all"
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
               />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative flex items-center">
            <FaEnvelope className="absolute left-4 text-trade-muted" />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-black/20 border border-trade-border rounded-xl py-3.5 pl-12 pr-4 text-white outline-none focus:border-trade-primary focus:bg-trade-primary/5 transition-all"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {/* Password Input */}
          <div className="relative flex items-center">
            <FaLock className="absolute left-4 text-trade-muted" />
            <input 
              type="password" 
              placeholder="Create Password" 
              className="w-full bg-black/20 border border-trade-border rounded-xl py-3.5 pl-12 pr-4 text-white outline-none focus:border-trade-primary focus:bg-trade-primary/5 transition-all"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          {/* Action Button */}
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-600/30 hover:shadow-green-600/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
          >
            Get Started Free <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center mt-8 text-sm text-trade-muted">
          Already have an account? <Link href="/auth/login" className="text-trade-primary font-bold hover:text-white transition-colors">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
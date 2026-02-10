'use client';
import { useState } from 'react';
import { useTrade } from '@/context/TradeContext'; // Import Context Hook
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCamera, FaSave, FaCheckCircle, FaCrown } from 'react-icons/fa';

export default function ProfilePage() {
  const { user } = useTrade(); // Get Real User Data
  const [isSaving, setIsSaving] = useState(false);

  // Split name safely (fallback if name is undefined/null)
  const firstName = user.name ? user.name.split(' ')[0] : '';
  const lastName = user.name && user.name.split(' ').length > 1 ? user.name.split(' ')[1] : '';

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    // Fake API call simulation
    setTimeout(() => {
      setIsSaving(false);
      alert('Profile updated successfully!');
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-[slideUp_0.5s_ease-out] relative">
      
      {/* 🌟 Ambient Background Glow */}
      <div className="fixed top-40 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left: Profile Card */}
        <div className="glass-panel p-8 rounded-3xl text-center h-fit relative overflow-hidden group">
          {/* Card Background Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-trade-primary/10 rounded-full blur-[60px] pointer-events-none"></div>

          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl shadow-blue-500/20 border-4 border-white/5">
              {/* Dynamic Initials */}
              {user.name ? user.name.charAt(0).toUpperCase() : 'G'}
            </div>
            <button className="absolute bottom-0 right-0 bg-trade-card border border-trade-border p-3 rounded-full hover:text-trade-primary hover:border-trade-primary transition-colors shadow-lg">
              <FaCamera className="text-sm" />
            </button>
          </div>

          {/* Dynamic Name & Email */}
          <h2 className="text-2xl font-bold text-white">{user.name || 'Guest User'}</h2>
          <p className="text-trade-muted text-sm mt-1">{user.email || 'guest@example.com'}</p>
          
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1.5 bg-green-500/10 text-green-400 text-xs rounded-lg font-bold border border-green-500/20 flex items-center gap-1.5">
               <FaCheckCircle /> Verified
            </span>
            <span className="px-3 py-1.5 bg-yellow-500/10 text-yellow-400 text-xs rounded-lg font-bold border border-yellow-500/20 flex items-center gap-1.5">
               <FaCrown /> Pro Member
            </span>
          </div>
        </div>

        {/* Right: Edit Form */}
        <div className="md:col-span-2 glass-panel p-8 rounded-3xl relative">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
             <span className="w-1.5 h-6 bg-trade-primary rounded-full"></span> Personal Information
          </h2>
          
          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="text-xs font-bold text-trade-muted uppercase tracking-wider mb-2 block group-focus-within:text-trade-primary transition-colors">First Name</label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-3.5 text-trade-muted group-focus-within:text-trade-primary transition-colors" />
                  <input type="text" defaultValue={firstName} className="w-full bg-black/20 border border-trade-border rounded-xl py-3 pl-10 pr-4 text-white outline-none focus:border-trade-primary focus:bg-trade-primary/5 transition-all" />
                </div>
              </div>
              <div className="group">
                <label className="text-xs font-bold text-trade-muted uppercase tracking-wider mb-2 block group-focus-within:text-trade-primary transition-colors">Last Name</label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-3.5 text-trade-muted group-focus-within:text-trade-primary transition-colors" />
                  <input type="text" defaultValue={lastName} className="w-full bg-black/20 border border-trade-border rounded-xl py-3 pl-10 pr-4 text-white outline-none focus:border-trade-primary focus:bg-trade-primary/5 transition-all" />
                </div>
              </div>
            </div>

            <div className="group">
              <label className="text-xs font-bold text-trade-muted uppercase tracking-wider mb-2 block group-focus-within:text-trade-primary transition-colors">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-3.5 text-trade-muted group-focus-within:text-trade-primary transition-colors" />
                <input type="email" defaultValue={user.email} className="w-full bg-black/20 border border-trade-border rounded-xl py-3 pl-10 pr-4 text-white outline-none focus:border-trade-primary focus:bg-trade-primary/5 transition-all opacity-70 cursor-not-allowed" readOnly />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="text-xs font-bold text-trade-muted uppercase tracking-wider mb-2 block group-focus-within:text-trade-primary transition-colors">Phone Number</label>
                <div className="relative">
                  <FaPhone className="absolute left-4 top-3.5 text-trade-muted group-focus-within:text-trade-primary transition-colors" />
                  <input type="text" defaultValue="+1 (555) 000-0000" className="w-full bg-black/20 border border-trade-border rounded-xl py-3 pl-10 pr-4 text-white outline-none focus:border-trade-primary focus:bg-trade-primary/5 transition-all" />
                </div>
              </div>
              <div className="group">
                <label className="text-xs font-bold text-trade-muted uppercase tracking-wider mb-2 block group-focus-within:text-trade-primary transition-colors">Location</label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-3.5 text-trade-muted group-focus-within:text-trade-primary transition-colors" />
                  <input type="text" defaultValue="New York, USA" className="w-full bg-black/20 border border-trade-border rounded-xl py-3 pl-10 pr-4 text-white outline-none focus:border-trade-primary focus:bg-trade-primary/5 transition-all" />
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button 
                type="submit" 
                disabled={isSaving}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {isSaving ? 'Saving...' : <><FaSave /> Save Changes</>}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
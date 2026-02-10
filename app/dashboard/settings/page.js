'use client';
import { useState } from 'react';
import { FaToggleOn, FaToggleOff, FaLock, FaGlobe, FaBell, FaShieldAlt, FaMoon, FaFingerprint } from 'react-icons/fa';

export default function SettingsPage() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  const [biometric, setBiometric] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-[slideUp_0.5s_ease-out] relative">
      
      {/* 🌟 Ambient Background Glow */}
      <div className="fixed top-40 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="flex justify-between items-end">
        <div>
           <h1 className="text-3xl font-bold tracking-tight">Settings & Preferences</h1>
           <p className="text-trade-muted">Manage your security, notifications, and app experience.</p>
        </div>
      </div>

      {/* Security Section */}
      <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[60px] -mr-10 -mt-10 pointer-events-none"></div>
        
        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
          <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
             <FaShieldAlt /> 
          </div>
          Security & Login
        </h2>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center p-5 bg-black/20 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-4">
               <div className="p-2.5 bg-trade-bg rounded-xl text-trade-muted">
                  <FaLock />
               </div>
               <div>
                  <p className="font-bold text-white">Two-Factor Authentication (2FA)</p>
                  <p className="text-xs text-trade-muted">Add an extra layer of security to your account.</p>
               </div>
            </div>
            <button onClick={() => setTwoFactor(!twoFactor)} className={`text-4xl transition-colors ${twoFactor ? 'text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'text-trade-muted'}`}>
              {twoFactor ? <FaToggleOn /> : <FaToggleOff />}
            </button>
          </div>

          <div className="flex justify-between items-center p-5 bg-black/20 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-4">
               <div className="p-2.5 bg-trade-bg rounded-xl text-trade-muted">
                  <FaFingerprint />
               </div>
               <div>
                  <p className="font-bold text-white">Biometric Login</p>
                  <p className="text-xs text-trade-muted">Use FaceID or Fingerprint to sign in.</p>
               </div>
            </div>
            <button onClick={() => setBiometric(!biometric)} className={`text-4xl transition-colors ${biometric ? 'text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'text-trade-muted'}`}>
              {biometric ? <FaToggleOn /> : <FaToggleOff />}
            </button>
          </div>

          <div className="flex justify-between items-center p-5 bg-black/20 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-4">
               <div className="p-2.5 bg-trade-bg rounded-xl text-trade-muted">
                  <FaLock />
               </div>
               <div>
                  <p className="font-bold text-white">Change Password</p>
                  <p className="text-xs text-trade-muted">Last changed: 3 months ago</p>
               </div>
            </div>
            <button className="text-xs font-bold border border-trade-border px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">Update</button>
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
          <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
             <FaBell /> 
          </div>
          Notifications
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-5 bg-black/20 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <div>
              <p className="font-bold text-white">Email Alerts</p>
              <p className="text-xs text-trade-muted">Receive daily trade summaries and weekly reports.</p>
            </div>
            <button onClick={() => setEmailNotif(!emailNotif)} className={`text-4xl transition-colors ${emailNotif ? 'text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'text-trade-muted'}`}>
              {emailNotif ? <FaToggleOn /> : <FaToggleOff />}
            </button>
          </div>
          <div className="flex justify-between items-center p-5 bg-black/20 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <div>
              <p className="font-bold text-white">SMS Notifications</p>
              <p className="text-xs text-trade-muted">Instant alerts for margin calls and security events.</p>
            </div>
            <button onClick={() => setSmsNotif(!smsNotif)} className={`text-4xl transition-colors ${smsNotif ? 'text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'text-trade-muted'}`}>
              {smsNotif ? <FaToggleOn /> : <FaToggleOff />}
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
          <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
             <FaGlobe /> 
          </div>
          Global Preferences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-black/20 rounded-2xl border border-white/5">
               <label className="block text-xs font-bold uppercase tracking-wider text-trade-muted mb-3">Display Currency</label>
               <select className="w-full bg-trade-bg border border-trade-border rounded-xl p-3 text-white outline-none focus:border-trade-primary transition-colors cursor-pointer">
                 <option>USD ($)</option>
                 <option>EUR (€)</option>
                 <option>INR (₹)</option>
                 <option>GBP (£)</option>
               </select>
            </div>
            <div className="p-5 bg-black/20 rounded-2xl border border-white/5">
               <label className="block text-xs font-bold uppercase tracking-wider text-trade-muted mb-3">Language</label>
               <select className="w-full bg-trade-bg border border-trade-border rounded-xl p-3 text-white outline-none focus:border-trade-primary transition-colors cursor-pointer">
                 <option>English (US)</option>
                 <option>Spanish</option>
                 <option>Hindi</option>
                 <option>Japanese</option>
               </select>
            </div>
        </div>
      </div>

    </div>
  );
}
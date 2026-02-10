'use client';
import Link from 'next/link';
import { FaArrowLeft, FaShieldAlt, FaUserSecret, FaDatabase, FaCookieBite, FaLock } from 'react-icons/fa';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 relative overflow-hidden font-sans">
      
      {/* 🌌 Animated Cyberpunk Background Grid (Consistent Theme) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
         <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent blur-[100px]"></div>
      </div>

      {/* Navbar (Simplified) */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-3 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <FaShieldAlt />
            </div>
            <span>Global<span className="text-blue-500">Trade</span></span>
          </Link>
          <Link href="/" className="text-sm font-bold text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-400 mb-6 border border-purple-500/20">
              <FaUserSecret className="text-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-xl text-gray-400">Effective Date: February 11, 2026</p>
          </div>

          {/* Glass Document Container */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">
            
            <div className="prose prose-invert prose-lg max-w-none text-gray-300">
              <p className="lead text-xl text-white font-medium mb-8">
                At GlobalTrade, we value your privacy. This policy outlines how we collect, use, and protect your personal information when you use our trading platform.
              </p>

              <div className="space-y-12">
                
                {/* Section 1: Information Collection */}
                <section>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                      <FaDatabase className="text-sm" />
                    </div>
                    1. Information We Collect
                  </h3>
                  <p className="mb-4">
                    We collect information to provide better services to all our users. This includes:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                     <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                        <h4 className="font-bold text-white mb-2">Personal Identity</h4>
                        <p className="text-sm text-gray-400">Name, email address, phone number, and government-issued ID for KYC verification.</p>
                     </div>
                     <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                        <h4 className="font-bold text-white mb-2">Financial Data</h4>
                        <p className="text-sm text-gray-400">Bank account details, transaction history, and wallet addresses.</p>
                     </div>
                     <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                        <h4 className="font-bold text-white mb-2">Device Information</h4>
                        <p className="text-sm text-gray-400">IP address, browser type, operating system, and device identifiers.</p>
                     </div>
                     <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                        <h4 className="font-bold text-white mb-2">Usage Data</h4>
                        <p className="text-sm text-gray-400">Pages visited, time spent, and trading activity patterns.</p>
                     </div>
                  </div>
                </section>

                {/* Section 2: How We Use Data */}
                <section>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
                      <FaLock className="text-sm" />
                    </div>
                    2. How We Use Your Data
                  </h3>
                  <p>
                    Your information is used strictly for the following purposes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-green-500">
                    <li>To process transactions and maintain your account.</li>
                    <li>To comply with legal obligations (AML/KYC laws).</li>
                    <li>To improve platform security and prevent fraud.</li>
                    <li>To communicate with you regarding updates and support.</li>
                  </ul>
                </section>

                {/* Section 3: Cookies */}
                <section>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 border border-yellow-500/20">
                      <FaCookieBite className="text-sm" />
                    </div>
                    3. Cookies & Tracking
                  </h3>
                  <p>
                    We use cookies to enhance your experience. These small text files help us remember your preferences and understand how you use our site. You can control cookie settings through your browser.
                  </p>
                </section>

                {/* Section 4: Data Protection */}
                <section>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 border border-red-500/20">
                      <FaShieldAlt className="text-sm" />
                    </div>
                    4. Data Security
                  </h3>
                  <p>
                    We implement industry-leading security measures, including SSL encryption, two-factor authentication (2FA), and cold storage for digital assets, to protect your personal data from unauthorized access.
                  </p>
                </section>

              </div>
            </div>

            {/* Bottom Contact */}
            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400 mb-4">Concerns about your data?</p>
              <Link href="mailto:privacy@globaltrade.com" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors font-bold bg-blue-500/10 px-6 py-3 rounded-full hover:bg-blue-500/20">
                <FaUserSecret /> Contact Privacy Officer
              </Link>
            </div>

          </div>
        </div>
      </main>

      {/* Footer (Simple) */}
      <footer className="border-t border-white/5 py-8 bg-black text-center text-gray-600 text-sm">
        <p>&copy; 2026 GlobalTrade Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
'use client';
import Link from 'next/link';
import { FaArrowLeft, FaFileContract, FaShieldAlt, FaBolt, FaCheckCircle } from 'react-icons/fa';

export default function PublicTermsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 relative overflow-hidden font-sans">
      
      {/* 🌌 Animated Cyberpunk Background Grid (Same as Home) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
         <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent blur-[100px]"></div>
      </div>

      {/* Navbar (Simplified) */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-3 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <FaBolt />
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 mb-6 border border-blue-500/20">
              <FaFileContract className="text-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Terms of Service</h1>
            <p className="text-xl text-gray-400">Last Updated: February 11, 2026</p>
          </div>

          {/* Glass Document Container */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">
            
            <div className="prose prose-invert prose-lg max-w-none text-gray-300">
              <p className="lead text-xl text-white font-medium mb-8">
                Welcome to GlobalTrade. By accessing our website or using our services, you agree to be bound by the terms and conditions described herein.
              </p>

              <div className="space-y-12">
                
                {/* Section 1 */}
                <section>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm border border-white/10">1</span>
                    General Provisions
                  </h3>
                  <p className="mb-4">
                    GlobalTrade Inc. ("we", "us", "our") provides a digital asset trading platform. By registering an account, you confirm that you are at least 18 years old and reside in a jurisdiction where our services are legal.
                  </p>
                  <ul className="list-none space-y-2 pl-4 border-l-2 border-blue-500/30">
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-blue-500 mt-1 shrink-0" />
                      <span>You must provide accurate and complete registration information.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-blue-500 mt-1 shrink-0" />
                      <span>You are responsible for maintaining the security of your account credentials.</span>
                    </li>
                  </ul>
                </section>

                {/* Section 2 */}
                <section>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm border border-white/10">2</span>
                    Risk Disclosure
                  </h3>
                  <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl">
                    <p className="text-red-200 font-medium">
                      <strong className="text-red-400 block mb-2 text-lg">⚠️ High Risk Warning</strong>
                      Trading cryptocurrencies, stocks, and forex involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose. Past performance is not indicative of future results.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm border border-white/10">3</span>
                    Trading Rules
                  </h3>
                  <p>
                    Our platform executes orders based on your instructions. Once an order is executed, it cannot be reversed.
                  </p>
                  <p className="mt-4">
                    We reserve the right to suspend accounts engaging in:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-sm">
                      Market Manipulation / Wash Trading
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-sm">
                      Use of unauthorized automated bots
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-sm">
                      Money Laundering activities
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-sm">
                      Abuse of API rate limits
                    </div>
                  </div>
                </section>

                {/* Section 4 */}
                <section>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm border border-white/10">4</span>
                    Intellectual Property
                  </h3>
                  <p>
                    All content, design, graphics, and code on this website are the intellectual property of GlobalTrade Inc. You may not copy, reproduce, or distribute any part of this site without permission.
                  </p>
                </section>

              </div>
            </div>

            {/* Bottom Contact */}
            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400 mb-4">Have questions about these terms?</p>
              <Link href="/dashboard/support" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors font-bold">
                <FaShieldAlt /> Contact Legal Department
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
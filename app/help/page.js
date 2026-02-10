'use client';
import { useState } from 'react';
import Link from 'next/link';
// 👇 Yahan FaArrowRight add kiya hai
import { 
  FaArrowLeft, FaArrowRight, FaSearch, FaBolt, FaUserShield, FaWallet, 
  FaChartBar, FaCode, FaQuestionCircle, FaChevronDown, FaHeadset 
} from 'react-icons/fa';

export default function HelpCenterPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const categories = [
    { icon: <FaBolt />, title: "Getting Started", desc: "Account setup, verification, and first steps." },
    { icon: <FaWallet />, title: "Deposit & Withdraw", desc: "Funding methods, crypto transfers, and limits." },
    { icon: <FaChartBar />, title: "Trading Guides", desc: "How to place orders, leverage, and margin." },
    { icon: <FaUserShield />, title: "Security", desc: "2FA, password resets, and account protection." },
    { icon: <FaCode />, title: "API Documentation", desc: "Connect trading bots and external apps." },
    { icon: <FaQuestionCircle />, title: "Troubleshooting", desc: "Common errors and platform status." },
  ];

  const faqs = [
    { question: "How long does verification take?", answer: "Identity verification is automated and usually takes less than 2 minutes. In some cases, manual review may take up to 24 hours." },
    { question: "What are the trading fees?", answer: "We offer a flat 0.1% fee for takers and 0.05% for makers. Fees can be further reduced by holding our native token or trading in high volumes." },
    { question: "Is my crypto secure?", answer: "Yes. 98% of user funds are stored in offline cold wallets with multi-signature access. We also carry insurance against system breaches." },
    { question: "Can I trade on mobile?", answer: "Absolutely. Our platform is fully responsive for mobile browsers, and we have native iOS and Android apps available for download." },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 relative overflow-hidden font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
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

      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">help?</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">Search our knowledge base or browse categories below.</p>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-[#0a0a0a] border border-white/10 rounded-2xl p-2 shadow-2xl">
              <FaSearch className="text-gray-500 ml-4 text-xl" />
              <input type="text" placeholder="Search for answers (e.g., 'Reset Password', 'API Keys')" className="w-full bg-transparent border-none outline-none text-white px-4 py-3 text-lg placeholder-gray-600" />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-bold transition-colors">Search</button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 pl-2 border-l-4 border-blue-500">Browse Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {categories.map((cat, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-white/5 transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400 mb-6">Can't find what you're looking for? Check out our most popular articles.</p>
              <Link href="/dashboard/support" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-white transition-colors">
                Visit Live Chat <FaArrowRight />
              </Link>
            </div>
            <div className="lg:col-span-8 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="glass-panel border border-white/5 rounded-xl overflow-hidden">
                  <button onClick={() => toggleFaq(i)} className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors">
                    <span className="font-bold text-lg text-gray-200">{faq.question}</span>
                    <FaChevronDown className={`text-gray-500 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 p-10 rounded-3xl relative overflow-hidden text-center">
             <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-md border border-white/10"></div>
             <div className="relative z-10">
               <FaHeadset className="text-5xl text-blue-400 mx-auto mb-6" />
               <h2 className="text-3xl font-bold text-white mb-4">Still need help?</h2>
               <p className="text-gray-300 mb-8 max-w-xl mx-auto">Our support team is available 24/7 to assist you with any issues regarding your account or transactions.</p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link href="/dashboard/support" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-colors shadow-lg shadow-blue-600/30">Start Live Chat</Link>
                 <a href="mailto:support@globaltrade.com" className="px-8 py-3 glass-panel hover:bg-white/10 text-white font-bold rounded-full transition-colors border border-white/10">Email Support</a>
               </div>
             </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-white/5 py-8 bg-black text-center text-gray-600 text-sm"><p>&copy; 2026 GlobalTrade Inc. All rights reserved.</p></footer>
    </div>
  );
}
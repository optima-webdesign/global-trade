'use client';
import { useState } from 'react';
import { useTrade } from '@/context/TradeContext'; // Import Context
import { FaBitcoin, FaHistory, FaPlus, FaMinus, FaWallet, FaExchangeAlt } from 'react-icons/fa';

export default function WalletPage() {
  const { balance, addFunds, withdrawFunds, transactions } = useTrade();
  const [amount, setAmount] = useState('');

  const handleTransaction = (type) => {
    if (!amount) return;
    if (type === 'deposit') {
      addFunds(amount);
    } else {
      withdrawFunds(amount);
    }
    setAmount('');
  };

  return (
    <div className="space-y-8 animate-[slideUp_0.5s_ease-out]">
      
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Wallet & Funding</h1>
          <p className="text-trade-muted">Manage your funds and view transaction history.</p>
        </div>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main Balance Card (Premium Gradient) */}
        <div className="md:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden group">
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-trade-primary/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8">
             {/* Left: Balance Info */}
             <div>
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
                      <FaWallet className="text-trade-primary" />
                   </div>
                   <span className="text-trade-muted font-medium text-sm uppercase tracking-wider">USD Balance</span>
                </div>
                <p className="text-5xl font-bold text-white tracking-tight mb-6">
                   ${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </p>
                
                {/* Input Area */}
                <div className="max-w-sm space-y-4">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-trade-muted font-bold">$</span>
                    <input 
                      type="number" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter Amount" 
                      className="w-full bg-black/20 border border-trade-border rounded-xl py-3 pl-8 pr-4 text-white outline-none focus:border-trade-primary focus:bg-trade-primary/5 transition-all"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleTransaction('deposit')}
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 transition-all hover:-translate-y-1"
                    >
                      <FaPlus /> Deposit
                    </button>
                    <button 
                      onClick={() => handleTransaction('withdraw')}
                      className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
                    >
                      <FaMinus /> Withdraw
                    </button>
                  </div>
                </div>
             </div>

             {/* Right: Decorative / Info (Hidden on small screens) */}
             <div className="hidden md:flex flex-col justify-center items-end opacity-80">
                <div className="text-right mb-4">
                   <p className="text-xs text-trade-muted uppercase">Status</p>
                   <p className="text-trade-success font-bold flex items-center justify-end gap-2">
                      <span className="w-2 h-2 rounded-full bg-trade-success animate-pulse"></span> Active
                   </p>
                </div>
                <div className="text-right">
                   <p className="text-xs text-trade-muted uppercase">Limit</p>
                   <p className="text-white font-bold">$1,000,000 / Day</p>
                </div>
             </div>
          </div>
        </div>

        {/* Crypto Value Card */}
        <div className="glass-panel p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden">
           <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-[60px] -ml-10 -mb-10 pointer-events-none"></div>
           <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mb-4 text-yellow-500 text-2xl">
                 <FaBitcoin />
              </div>
              <p className="text-trade-muted text-sm font-medium">Est. Crypto Value</p>
              <div className="flex items-baseline gap-2 mt-2">
                 <p className="text-3xl font-bold text-white">~ 0.45</p>
                 <span className="text-lg font-bold text-yellow-500">BTC</span>
              </div>
              <p className="text-xs text-trade-muted mt-4 pt-4 border-t border-white/5">
                 Based on real-time market rates from your portfolio holdings.
              </p>
           </div>
        </div>
      </div>

      {/* Transaction History Table */}
      <div className="glass-panel p-8 rounded-3xl">
        <h2 className="font-bold text-lg mb-6 flex items-center gap-3">
           <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
             <FaHistory /> 
           </div>
           Transaction History
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-trade-muted text-xs uppercase tracking-wider border-b border-white/10">
                <th className="pb-4 pl-4">Type</th>
                <th className="pb-4">Asset</th>
                <th className="pb-4">Amount</th>
                <th className="pb-4">Value/Price</th>
                <th className="pb-4 pr-4">Time</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length === 0 ? (
                 <tr><td colSpan="5" className="py-8 text-center text-trade-muted">No transactions yet.</td></tr>
              ) : (
                transactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group last:border-0">
                    <td className="py-4 pl-4">
                       <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg text-xs font-bold ${
                          tx.type === 'Deposit' || tx.type === 'Sell' 
                             ? 'bg-trade-success/10 text-trade-success' 
                             : 'bg-white/5 text-white'
                       }`}>
                          {tx.type === 'Deposit' || tx.type === 'Sell' ? <FaPlus className="text-[10px]" /> : <FaExchangeAlt className="text-[10px]" />}
                          {tx.type}
                       </span>
                    </td>
                    <td className="py-4 text-sm font-bold text-white">{tx.symbol}</td>
                    <td className="py-4 font-mono text-trade-muted">{Number(tx.amount).toFixed(4)}</td>
                    <td className="py-4 font-bold text-white">${tx.price.toLocaleString()}</td>
                    <td className="py-4 pr-4 text-sm text-trade-muted">{tx.date}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
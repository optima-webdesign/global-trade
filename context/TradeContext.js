'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const TradeContext = createContext();

export function TradeProvider({ children }) {
  const router = useRouter();

  // 1. User State (Auth)
  const [user, setUser] = useState({
    name: "Guest User",
    email: "guest@example.com",
    isLoggedIn: false
  });

  // 2. Trading Data
  const [balance, setBalance] = useState(45250.75);
  const [holdings, setHoldings] = useState([
    { symbol: "BTC", amount: 0.45, avgPrice: 55000 },
    { symbol: "AAPL", amount: 50, avgPrice: 150 },
  ]);
  const [transactions, setTransactions] = useState([]);

  // ✅ AUTH FUNCTIONS
  const registerUser = (name, email, password) => {
    // Real app mein yahan API call hoti
    const newUser = { name, email, isLoggedIn: true };
    setUser(newUser);
    alert("Account Created Successfully! Welcome " + name);
    router.push('/dashboard');
  };

  const loginUser = (email, password) => {
    // Dummy check (Accept any email/password for demo)
    const name = email.split('@')[0]; // Email se naam nikal lo
    const loggedInUser = { 
      name: name.charAt(0).toUpperCase() + name.slice(1), // Capitalize 
      email: email, 
      isLoggedIn: true 
    };
    setUser(loggedInUser);
    alert("Login Successful!");
    router.push('/dashboard');
  };

  const logoutUser = () => {
    setUser({ name: "Guest", email: "", isLoggedIn: false });
    router.push('/auth/login');
  };

  // ✅ TRADING FUNCTIONS (Same as before)
  const addFunds = (amount) => {
    const value = parseFloat(amount);
    if (isNaN(value) || value <= 0) return alert("Invalid Amount");
    setBalance((prev) => prev + value);
    addTransaction("Deposit", "USD", value, 1);
  };

  const withdrawFunds = (amount) => {
    const value = parseFloat(amount);
    if (value > balance) return alert("Insufficient Balance");
    setBalance((prev) => prev - value);
    addTransaction("Withdraw", "USD", value, 1);
  };

  const buyAsset = (symbol, price, amount) => {
    const totalCost = price * amount;
    if (totalCost > balance) return false;
    setBalance((prev) => prev - totalCost);
    setHoldings((prev) => {
      const existing = prev.find((h) => h.symbol === symbol);
      if (existing) return prev.map((h) => h.symbol === symbol ? { ...h, amount: Number(h.amount) + Number(amount) } : h);
      return [...prev, { symbol, amount: Number(amount), avgPrice: price }];
    });
    addTransaction("Buy", symbol, amount, price);
    return true;
  };

  const sellAsset = (symbol, price, amount) => {
    const asset = holdings.find((h) => h.symbol === symbol);
    if (!asset || asset.amount < amount) return false;
    const totalValue = price * amount;
    setBalance((prev) => prev + totalValue);
    setHoldings((prev) => {
      return prev.map((h) => h.symbol === symbol ? { ...h, amount: h.amount - amount } : h).filter(h => h.amount > 0);
    });
    addTransaction("Sell", symbol, amount, price);
    return true;
  };

  const addTransaction = (type, symbol, amount, price) => {
    setTransactions(prev => [{
      id: Date.now(), type, symbol, amount, price, date: new Date().toLocaleTimeString()
    }, ...prev]);
  };

  return (
    <TradeContext.Provider value={{ 
      user, registerUser, loginUser, logoutUser, // Auth Exports
      balance, holdings, transactions, buyAsset, sellAsset, addFunds, withdrawFunds 
    }}>
      {children}
    </TradeContext.Provider>
  );
}

export const useTrade = () => useContext(TradeContext);
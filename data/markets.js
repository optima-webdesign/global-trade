export const MARKET_DATA = [
  {
    category: "Crypto",
    assets: [
      { id: "btc", symbol: "BTC", name: "Bitcoin", price: 64230.50, change: 2.4, volume: "24B", trend: "up" },
      { id: "eth", symbol: "ETH", name: "Ethereum", price: 3450.12, change: -1.2, volume: "12B", trend: "down" },
      { id: "sol", symbol: "SOL", name: "Solana", price: 145.60, change: 5.8, volume: "4B", trend: "up" },
      { id: "xrp", symbol: "XRP", name: "Ripple", price: 0.62, change: 0.5, volume: "1B", trend: "up" },
    ]
  },
  {
    category: "Stocks",
    assets: [
      { id: "aapl", symbol: "AAPL", name: "Apple Inc.", price: 182.50, change: 1.1, volume: "50M", trend: "up" },
      { id: "tsla", symbol: "TSLA", name: "Tesla", price: 175.40, change: -2.5, volume: "30M", trend: "down" },
      { id: "nvda", symbol: "NVDA", name: "NVIDIA", price: 890.00, change: 3.2, volume: "45M", trend: "up" },
      { id: "amzn", symbol: "AMZN", name: "Amazon", price: 178.20, change: 0.8, volume: "20M", trend: "up" },
    ]
  },
  {
    category: "Forex",
    assets: [
      { id: "eurusd", symbol: "EUR/USD", name: "Euro / US Dollar", price: 1.0850, change: -0.1, volume: "100B", trend: "down" },
      { id: "gbpusd", symbol: "GBP/USD", name: "British Pound", price: 1.2640, change: 0.2, volume: "80B", trend: "up" },
      { id: "usdjpy", symbol: "USD/JPY", name: "US Dollar / Yen", price: 151.20, change: 0.05, volume: "90B", trend: "up" },
    ]
  },
  {
    category: "Commodities",
    assets: [
      { id: "gold", symbol: "XAU", name: "Gold", price: 2150.80, change: 1.5, volume: "10B", trend: "up" },
      { id: "oil", symbol: "WTI", name: "Crude Oil", price: 82.40, change: -0.8, volume: "15B", trend: "down" },
    ]
  }
];

export const MARKET_MOVERS = [
  { symbol: "SOL", name: "Solana", change: 5.8, price: 145.60, type: "gainer" },
  { symbol: "NVDA", name: "NVIDIA", change: 3.2, price: 890.00, type: "gainer" },
  { symbol: "TSLA", name: "Tesla", change: -2.5, price: 175.40, type: "loser" },
  { symbol: "ETH", name: "Ethereum", change: -1.2, price: 3450.12, type: "loser" },
];
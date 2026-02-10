export const WALLET_BALANCE = {
  usd: 12500.00,
  btc: 0.005,
  eur: 450.00,
};

export const TRANSACTIONS = [
  { id: "TX1001", type: "Deposit", method: "Bank Transfer", amount: 5000, currency: "USD", status: "Completed", date: "2024-03-10" },
  { id: "TX1002", type: "Withdraw", method: "PayPal", amount: 200, currency: "USD", status: "Pending", date: "2024-03-12" },
  { id: "TX1003", type: "Trade", method: "Buy BTC", amount: 1500, currency: "USD", status: "Completed", date: "2024-03-11" },
  { id: "TX1004", type: "Deposit", method: "Crypto", amount: 0.5, currency: "ETH", status: "Completed", date: "2024-03-09" },
];
import { Inter } from "next/font/google";
import "./globals.css";
import { TradeProvider } from "@/context/TradeContext"; // Import Context

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "GlobalTrade | Professional Trading Platform",
  description: "Advanced dashboard for Stocks, Crypto, and Forex markets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-trade-bg text-trade-text antialiased`}>
        {/* Wrap everything inside TradeProvider */}
        <TradeProvider>
          <main className="min-h-screen flex flex-col">
            {children}
          </main>
        </TradeProvider>
      </body>
    </html>
  );
}
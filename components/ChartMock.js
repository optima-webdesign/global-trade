'use client';
import { useEffect, useRef, useState } from 'react';
import { FaExpand, FaCamera, FaCog } from 'react-icons/fa';

export default function ChartMock({ symbol = "BTC/USD" }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [activeTimeframe, setActiveTimeframe] = useState('1H');

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    
    // Data Generation (Simulated History)
    let dataPoints = [];
    const generateData = (width) => {
      if (width <= 0) return []; // Safety check for width
      const candleWidth = 8;
      const gap = 4;
      const totalCandles = Math.ceil(width / (candleWidth + gap));
      
      let price = 50000; // Starting base price
      let data = [];
      
      for (let i = 0; i < totalCandles; i++) {
        const volatility = price * 0.02; // 2% volatility
        const change = (Math.random() - 0.5) * volatility;
        const open = price;
        const close = price + change;
        const high = Math.max(open, close) + Math.random() * (volatility / 2);
        const low = Math.min(open, close) - Math.random() * (volatility / 2);
        
        data.push({ open, close, high, low, x: i * (candleWidth + gap) + 10 });
        price = close;
      }
      return data;
    };

    const draw = () => {
      if (!container || !canvas) return;

      // 1. Resize Canvas
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      const w = canvas.width;
      const h = canvas.height;

      // 🛑 SAFETY CHECK: Agar width 0 hai toh draw mat karo
      if (w === 0 || h === 0) return;

      // 2. Clear & Background
      ctx.clearRect(0, 0, w, h);
      
      // Gradient Background
      const gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.05)"); 
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // 3. Draw Grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;
      
      for (let x = 0; x < w; x += 80) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += 80) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // 4. Draw Candles
      if (dataPoints.length === 0 || Math.abs(dataPoints.length * 12 - w) > 100) {
         dataPoints = generateData(w);
      }

      // 🛑 SAFETY CHECK: Agar dataPoints abhi bhi empty hain toh return karo
      if (dataPoints.length === 0) return;

      // Find min/max price to scale chart
      const prices = dataPoints.map(d => d.high).concat(dataPoints.map(d => d.low));
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      const priceRange = maxPrice - minPrice || 1; // Avoid division by zero
      
      // Helper to map price to Y coordinate
      const getY = (p) => h - ((p - minPrice) / priceRange) * (h - 60) - 30; 

      const candleWidth = 6;

      dataPoints.forEach((d) => {
        const isUp = d.close >= d.open;
        const color = isUp ? '#10b981' : '#ef4444';
        
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;

        const x = d.x;
        const yOpen = getY(d.open);
        const yClose = getY(d.close);
        const yHigh = getY(d.high);
        const yLow = getY(d.low);

        ctx.beginPath();
        ctx.moveTo(x + candleWidth / 2, yHigh);
        ctx.lineTo(x + candleWidth / 2, yLow);
        ctx.stroke();

        const bodyHeight = Math.max(Math.abs(yClose - yOpen), 1);
        ctx.fillRect(x, Math.min(yOpen, yClose), candleWidth, bodyHeight);
        
        ctx.shadowBlur = 0;
      });

      // 5. Current Price Line (Pulsing)
      const lastCandle = dataPoints[dataPoints.length - 1];
      
      // 🛑 CRITICAL FIX: Ensure lastCandle exists before accessing properties
      if (lastCandle) {
        const lastY = getY(lastCandle.close);
        const lastColor = lastCandle.close >= lastCandle.open ? '#10b981' : '#ef4444';

        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, lastY);
        ctx.lineTo(w, lastY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Price Label Background
        ctx.fillStyle = lastColor;
        ctx.fillRect(w - 60, lastY - 10, 60, 20);
        
        // Price Label Text
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 10px monospace";
        ctx.fillText(lastCandle.close.toFixed(2), w - 55, lastY + 4);
      }
    };

    // Use ResizeObserver for responsive drawing
    const resizeObserver = new ResizeObserver(() => {
      window.requestAnimationFrame(draw);
    });
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [symbol]);

  return (
    <div ref={containerRef} className="w-full h-full relative group bg-black/20">
      
      {/* Chart Header (Floating) */}
      <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-4 pointer-events-none">
        <div className="flex bg-black/40 backdrop-blur-md rounded-lg border border-white/5 p-1 pointer-events-auto">
          {['15m', '1H', '4H', '1D', '1W'].map((tf) => (
            <button 
              key={tf}
              onClick={() => setActiveTimeframe(tf)}
              className={`px-3 py-1 text-xs font-bold rounded transition-all ${
                activeTimeframe === tf 
                  ? 'bg-white/10 text-white shadow-sm' 
                  : 'text-trade-muted hover:text-white hover:bg-white/5'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
        
        <div className="flex gap-2 pointer-events-auto">
           <button className="p-1.5 rounded hover:bg-white/10 text-trade-muted hover:text-white transition-colors">
              <FaCamera />
           </button>
           <button className="p-1.5 rounded hover:bg-white/10 text-trade-muted hover:text-white transition-colors">
              <FaCog />
           </button>
           <button className="p-1.5 rounded hover:bg-white/10 text-trade-muted hover:text-white transition-colors">
              <FaExpand />
           </button>
        </div>
      </div>

      {/* The Canvas */}
      <canvas ref={canvasRef} className="w-full h-full cursor-crosshair"></canvas>
      
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white/5 pointer-events-none select-none">
        GlobalTrade
      </div>
    </div>
  );
}
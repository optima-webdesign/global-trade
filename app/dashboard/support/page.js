'use client';
import { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaHeadset, FaRobot, FaUser } from 'react-icons/fa';

export default function SupportPage() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hello! Welcome to GlobalTrade Premium Support. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add User Message
    const userMsg = { id: Date.now(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Fake Reply Simulation
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        sender: 'bot', 
        text: "Thank you for your message. Our AI agents are analyzing your request. A human specialist will review this shortly." 
      }]);
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto h-[calc(100vh-140px)] flex flex-col relative animate-[slideUp_0.5s_ease-out]">
      
      {/* 🌟 Ambient Background Glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="glass-panel flex-1 flex flex-col rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
        
        {/* 🟢 Header */}
        <div className="p-6 border-b border-white/5 bg-black/20 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <FaHeadset className="text-white text-xl" />
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-trade-card rounded-full"></span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-white">Priority Support</h1>
              <div className="flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 <p className="text-xs text-green-400 font-medium">Agents Online</p>
              </div>
            </div>
          </div>
          <div className="text-right hidden sm:block">
             <p className="text-xs text-trade-muted">Average Response Time</p>
             <p className="font-bold text-white text-sm">~ 2 Minutes</p>
          </div>
        </div>

        {/* 💬 Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-transparent to-black/20">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              
              {/* Avatar */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                 msg.sender === 'user' ? 'bg-white/10' : 'bg-blue-500/20 text-blue-400'
              }`}>
                 {msg.sender === 'user' ? <FaUser className="text-sm" /> : <FaRobot className="text-lg" />}
              </div>

              {/* Message Bubble */}
              <div className={`max-w-[75%] px-6 py-4 rounded-2xl text-sm leading-relaxed shadow-lg ${
                msg.sender === 'user' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-sm' 
                  : 'bg-white/5 border border-white/5 text-gray-100 rounded-tl-sm backdrop-blur-sm'
              }`}>
                {msg.text}
                <div className={`text-[10px] mt-2 opacity-60 ${msg.sender === 'user' ? 'text-blue-100' : 'text-trade-muted'}`}>
                   Just now
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
             <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                   <FaRobot className="text-lg" />
                </div>
                <div className="bg-white/5 border border-white/5 px-6 py-4 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                   <span className="w-2 h-2 bg-trade-muted rounded-full animate-bounce"></span>
                   <span className="w-2 h-2 bg-trade-muted rounded-full animate-bounce delay-100"></span>
                   <span className="w-2 h-2 bg-trade-muted rounded-full animate-bounce delay-200"></span>
                </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* ⌨️ Input Area */}
        <form onSubmit={handleSend} className="p-4 bg-black/20 border-t border-white/5 backdrop-blur-md">
          <div className="relative flex items-center gap-3">
             <input 
               type="text" 
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Type your message..." 
               className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-trade-muted focus:border-trade-primary focus:bg-white/10 outline-none transition-all"
             />
             <button 
               type="submit" 
               disabled={!input.trim()}
               className="bg-trade-primary hover:bg-blue-500 text-white p-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
             >
               <FaPaperPlane />
             </button>
          </div>
          <p className="text-center text-[10px] text-trade-muted mt-3">
             GlobalTrade support chats are end-to-end encrypted.
          </p>
        </form>

      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { getFitnessAdvice } from '../services/geminiService';
import { Message } from '../types';

const IronAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Greetings, athlete. I am Iron AI. How can I optimize your workout today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getFitnessAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-[350px] h-[500px] glass-card rounded-2xl flex flex-col shadow-2xl overflow-hidden border border-red-500/30">
          <div className="bg-red-600 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="font-syncopate text-xs font-bold tracking-widest">IRON AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-70">
              ✕
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl ${
                  m.role === 'user' ? 'bg-red-600 text-white' : 'bg-zinc-800 text-gray-200'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-xl text-gray-400 animate-pulse">
                  Analyzing performance...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 border-t border-white/10 bg-black/40">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Iron AI..."
                className="flex-1 bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-600"
              />
              <button 
                onClick={handleSend}
                className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                ➔
              </button>
            </div>
            <p className="text-[10px] text-gray-500 mt-2 text-center">Powered by Gemini High-Speed Engine</p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform glow-red group"
        >
          <span className="text-2xl group-hover:rotate-12 transition-transform">🤖</span>
          <div className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold px-1.5 rounded-full">AI</div>
        </button>
      )}
    </div>
  );
};

export default IronAI;

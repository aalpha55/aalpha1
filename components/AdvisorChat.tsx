import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { generateFinancialAdvice } from '../services/geminiService';
import { ChatMessage, MessageRole } from '../types';

export const AdvisorChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: MessageRole.MODEL,
      text: "Hello. I am your FinVantage Advisor. How can I assist you with your financial goals today?",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: MessageRole.USER,
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await generateFinancialAdvice(userMessage.text);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: MessageRole.MODEL,
        text: responseText,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: MessageRole.MODEL,
        text: "I apologize, but I'm having trouble connecting to the network right now.",
        timestamp: new Date(),
        isError: true
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-[600px] flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/5">
      {/* Chat Header */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 p-4 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-600">
            <Bot size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">FinVantage Advisor</h3>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-medium text-slate-500">Online & Ready</span>
            </div>
          </div>
        </div>
        <div className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
          Powered by Gemini 2.5
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-slate-50 p-4 space-y-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${
              msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`flex max-w-[85%] gap-3 ${
                msg.role === MessageRole.USER ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Avatar */}
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  msg.role === MessageRole.USER
                    ? 'bg-slate-900 text-white'
                    : 'bg-white shadow-sm text-brand-600 border border-slate-100'
                }`}
              >
                {msg.role === MessageRole.USER ? <User size={14} /> : <Sparkles size={14} />}
              </div>

              {/* Bubble */}
              <div
                className={`group relative rounded-2xl px-5 py-3.5 text-sm leading-relaxed shadow-sm ${
                  msg.role === MessageRole.USER
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-700 border border-slate-100'
                } ${msg.isError ? 'bg-red-50 text-red-700 border-red-200' : ''}`}
              >
                <div className="whitespace-pre-wrap">{msg.text}</div>
                <div
                  className={`mt-1 text-[10px] opacity-0 transition-opacity group-hover:opacity-100 ${
                    msg.role === MessageRole.USER ? 'text-slate-300' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
           <div className="flex w-full justify-start">
             <div className="flex max-w-[85%] gap-3 flex-row">
               <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm text-brand-600 border border-slate-100">
                  <Sparkles size={14} />
               </div>
               <div className="flex items-center space-x-2 rounded-2xl bg-white px-5 py-4 text-slate-500 shadow-sm border border-slate-100">
                 <Loader2 size={16} className="animate-spin text-brand-500" />
                 <span className="text-xs font-medium">Analyzing market data...</span>
               </div>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-slate-100 bg-white p-4">
        <div className="relative flex items-center gap-2 rounded-xl bg-slate-50 p-2 shadow-inner ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-brand-500 focus-within:ring-offset-2 transition-all">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about retirement, ETFs, or market trends..."
            className="flex-1 resize-none bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none scrollbar-hide"
            rows={1}
            style={{ minHeight: '44px', maxHeight: '120px' }}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white transition-colors hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="mt-2 text-center text-[10px] text-slate-400">
          FinVantage AI can make mistakes. Consider checking important information. Not professional advice.
        </p>
      </div>
    </div>
  );
};
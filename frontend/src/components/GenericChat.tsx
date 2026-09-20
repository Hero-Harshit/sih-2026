"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Loader2, Bot } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function GenericChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      role: "assistant",
      content: "Hello! I am your AI Legal Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    // Add user message to state
    setMessages((prev) => [...prev, newUserMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, newUserMsg].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await response.json();

      const newAssistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: data.role || "assistant",
        content: data.content,
      };

      setMessages((prev) => [...prev, newAssistantMsg]);
    } catch (error) {
      console.error("Error communicating with chat API:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again later.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col min-h-0 formal-panel">
      {/* Header */}
      <div className="bg-brand-50/50 px-4 py-2 border-b border-brand-100 flex items-center justify-center gap-2 text-xs text-brand-700 font-medium">
        <Bot size={14} />
        AI Legal Assistant
      </div>

      {/* Messages Area */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 bg-white/40 dark:bg-slate-800/40"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] p-5 rounded-2xl shadow-sm border ${msg.role === "user"
                  ? "bg-gradient-to-br from-brand-500 to-brand-accent border-brand-600 text-white rounded-tr-sm"
                  : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-sm"
                }`}
            >
              <div className="whitespace-pre-wrap leading-relaxed text-[15px] prose prose-slate">
                {msg.content}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start animate-in fade-in">
            <div className="max-w-[80%] p-3 px-5 rounded-xl bg-white dark:bg-slate-900 border border-brand-100 text-brand-600 shadow-sm flex items-center gap-3">
              <Loader2 className="animate-spin" size={16} />
              <span className="text-sm font-semibold animate-pulse">
                Thinking...
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-brand-100">
        <div className="relative flex items-center max-w-4xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message here..."
            className="w-full formal-input rounded-xl py-4 pl-5 pr-14 text-slate-900 focus:outline-none shadow-inner bg-white/50"
            disabled={isTyping}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="absolute right-2 p-2.5 rounded-lg bg-gradient-to-r from-brand-500 to-brand-accent text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md hover:scale-105 transition-all"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

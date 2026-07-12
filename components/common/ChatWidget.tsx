"use client";

import { useState } from "react";
import axiosInstance from "../hooks/axiosInstance";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return; // Prevent sending empty messages or double-clicking while loading

    const userMsg: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMsg];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axiosInstance.post("/chat/ai", {
        message: userMsg.content,
        history: messages, // Sending previous chat history
      });
      const data = res.data; // Fixed: Removed redundant 'await'
      setMessages([...updatedMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "Sorry, ekhon reply dite parchi na." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-18 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all"
      >
        💬 Ask About Mohibullah
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col border border-gray-200">
      {/* Header */}
      <div className="p-3 bg-blue-600 text-white rounded-t-xl flex justify-between items-center">
        <span className="font-medium">Ask Mohim&apos;s AI</span>
        <button 
          onClick={() => setOpen(false)}
          className="text-white hover:text-gray-200 text-sm font-bold px-2"
        >
          ✕
        </button>
      </div>

      {/* Messages Box */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
            <span
              className={`inline-block px-3 py-2 rounded-lg text-sm max-w-[85%] wrap-break-word ${
                m.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {m.content}
            </span>
          </div>
        ))}
        {loading && <div className="text-sm text-gray-400 italic">Typing...</div>}
      </div>

      {/* Input Field */}
      <div className="p-2 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask About Mohibullah..."
          className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm outline-none focus:border-blue-600"
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-3 py-1.5 rounded text-sm transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}
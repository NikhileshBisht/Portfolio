"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";

export default function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm Nikhilesh's AI assistant. Ask me about my projects, skills, education, or experience.",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const userMessage = {
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentMessage = input;
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentMessage,
          history: messages.slice(-5),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Failed to get response"
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#111] border border-gray-800 rounded-3xl shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-3 rounded-full">
              <FaRobot className="text-white text-lg" />
            </div>

            <div>
              <h2 className="text-white font-bold text-lg">
                Ask Nikhilesh
              </h2>

              <p className="text-gray-400 text-xs">
                Powered by Gemini AI
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-sm text-gray-300">
            <p className="font-semibold mb-2">
              Ask me about:
            </p>

            <div className="grid grid-cols-2 gap-2">
              <span>• Projects</span>
              <span>• Skills</span>
              <span>• Education</span>
              <span>• Experience</span>
            </div>
          </div>

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user"
                ? "justify-end"
                : "justify-start"
                }`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-100"
                  }`}
              >
                <p className="whitespace-pre-wrap break-words">
                  {msg.content}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 p-3 rounded-2xl">
                <FaSpinner className="animate-spin text-white" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSend}
          className="p-4 border-t border-gray-800"
        >
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              disabled={isLoading}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 bg-gray-900 text-white rounded-xl px-4 py-3 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />

            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white px-5 rounded-xl transition"
            >
              {isLoading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <FaPaperPlane />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
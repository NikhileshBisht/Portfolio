'use client';

import { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaRobot } from 'react-icons/fa';
import Chatbot from './Chatbot';

export default function FloatingActions() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[9999]">
        
        {/* Call */}
        <a
          href="tel:+919999999999"
          className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition"
        >
          <FaPhoneAlt size={22} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition"
        >
          <FaWhatsapp size={26} />
        </a>

        {/* AI Chatbot - same style as About component */}
        <button
          onClick={() => setShowChatbot(true)}
          className="bg-blue-500 p-3 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 border-2 border-white"
        >
          <FaRobot className="text-white text-2xl" />
        </button>
      </div>

      {showChatbot && (
        <Chatbot
          onClose={() => setShowChatbot(false)}
          modelProvider="ollama"
        />
      )}
    </>
  );
}
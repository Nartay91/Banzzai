"use client";
import { useChatStore } from "../store/useChatStore";
import { useState } from "react";

export default function ChatBox() {
  const { isOpen, toggleChat, getAnswer } = useChatStore();
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "bot",
      text: "Здравствуйте! Я AI-ассистент IT-школы. Могу рассказать о наших курсах и помочь с выбором направления. Как я могу к вам обращаться?"
    }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      const userMsg = { sender: "user", text: message };
      const answer = getAnswer(message);
      const botMsg = { sender: "bot", text: answer };

      setChatHistory((prev) => [...prev, userMsg, botMsg]);
      setMessage("");
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-[#0071e3] text-white p-4 rounded-full shadow-lg hover:bg-[#0071e3]/90 transition-all z-50 flex items-center justify-center"
        aria-label="Открыть чат с ИИ-ассистентом"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] bg-[#fff] rounded-lg shadow-xl border border-[#d2d2d7] flex flex-col z-50 overflow-hidden">
          <div className="p-4 bg-[#0071e3] text-white flex justify-between items-center">
            <div className="font-medium">Banzzai Education</div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Закрыть чат"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-[#f5f5f7]/30">
          {chatHistory.map((item, index) => (
            <div
            key={index}
            className={`mb-4 max-w-[85%] ${item.sender === "user" ? "ml-auto" : "mr-auto"}`}
            > 
                <div
                className={`p-3 rounded-lg border border-[#d2d2d7] rounded-bl-none ${
                item.sender === "user"
                ? "bg-[#0071e3] text-white"
                : "bg-[#fff] text-black"
                }`}
                >
                    <p>{item.text}</p>
                </div>
            </div>
            ))}

          </div>

          <div className="p-3 border-t border-[#d2d2d7] bg-[#fff]">
            <div className="flex items-end">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Введите сообщение..."
                className="flex-1 py-2 px-3 outline-none border border-[#d2d2d7] rounded-lg resize-none focus:border-[#0071e3] transition-colors max-h-32"
                rows={1}
              ></textarea>
              <button
                onClick={handleSend}
                className={`ml-2 p-2 rounded-full ${
                  message.trim()
                    ? "text-blue-500 cursor-pointer hover:bg-gray-200"
                    : "text-gray-400 cursor-not-allowed"
                } transition-colors`}
                disabled={!message.trim()}
                aria-label="Отправить сообщение"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
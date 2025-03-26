"use client";

import { useState } from "react";
import { Clock, UserPlus } from "lucide-react";
import { initialMessages } from "@/data/signalMessages";
import { Message } from "@/types/messages";
import { Send } from "lucide-react";

const nameColorMap: { [key: string]: string } = {
  pink: "text-pink-500",
  orange: "text-orange-500",
  purple: "text-purple-600",
  green: "text-green-700",
  lime: "text-lime-600",
  red: "text-red-600",
};

export default function SignalGroupChat() {
  const [messages] = useState(initialMessages);

  const renderSystemIcon = (icon: Message["icon"]) => {
    switch (icon) {
      case "user-plus":
        return <UserPlus size={16} className="mr-1 text-gray-500" />;
      case "clock":
        return <Clock size={16} className="mr-1 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto h-screen flex flex-col bg-white border rounded-2xl shadow overflow-hidden">
      {/* Header */}
      <div className="border-b px-4 py-3 font-semibold text-gray-800">
        Houthi PC small group
        <div className="text-sm text-gray-500">19 members</div>
      </div>

      {/* Messages */}
      <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, id) => {
          if (msg.type === "system") {
            return (
              <div
                key={id}
                className="flex justify-center text-gray-500 text-sm items-center"
              >
                {renderSystemIcon(msg.icon)}
                <span>{msg.text}</span>
              </div>
            );
          }

          return (
            <div key={id} className="flex justify-start">
              <div className="bg-gray-200 text-gray-900 rounded-2xl shadow p-3 max-w-md">
                <p
                  className={`text-sm font-semibold mb-1 ${
                    msg.color ? nameColorMap[msg.color] : ""
                  }`}
                >
                  {msg.sender}
                </p>
                <p className="text-sm whitespace-pre-line">{msg.text}</p>
                <span className="text-xs opacity-60 block text-right mt-1">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className="border-t p-3 flex items-center gap-2">
        <input
          type="text"
          className="flex-1 rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Send a message..."
          value="yo"
          onChange={(e) => console.log(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && console.log("yo")}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}

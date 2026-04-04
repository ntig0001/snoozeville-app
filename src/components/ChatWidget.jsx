import React, { useState } from 'react'
import { MessageCircle } from 'lucide-react';
import { X } from "lucide-react";

const ChatWidget = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: "bot", text: "Hello! How can we assist you?"}
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages([
            ...messages,
            {type: "user", text: input},
            {type: "bot", text: "Thanks for contacting us. We will get back to you shortly."},
        ]);
        setInput("");
    }

  return (
    <>
      {!open && (
        <button
            onClick={ () => setOpen(true)}
            className="fixed bottom-5 right-5 bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
         >
            <MessageCircle className="w-6 h-6 text-white" />
        </button>
      )}
      
      {open && (
        <div className="fixed bottom-5 right-5 w-80 bg-white border rounded shadow-lg">
            <div className="bg-gray-800 text-white p-2 flex justify-between">
                <span>Live Support</span>
                <button onClick={ () => setOpen(false)}>
                    <X className="w-6 h-6 text-white" />
                </button>
            </div>
            <div className="h-52 overflow-y-auto p-2 bg-gray-100">
                { messages.map((msg, i) => (
                    <div 
                        key={i}
                        className={`p-2 mb-1 rounded ${
                            msg.type === "user"
                                ? "bg-blue-500 text-white text-right"
                                : "bg-slate-200"

                        }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            <div className="flex border-t">
                <input 
                    className="flex-1 p-2 outline-none" 
                    value={input}
                    onChange={ (e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button 
                    onClick={sendMessage}
                    className="bg-blue-600 text-white px-3"
                >
                    Send
                </button>
            </div>
        </div>
      )}
    </>
  )
}

export default ChatWidget

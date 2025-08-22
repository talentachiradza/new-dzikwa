import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { searchKnowledgeBase } from '@/data/knowledgeBase';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I'm the Dzikwa Trust assistant. How can I help you learn about our mission today? You can ask about our programs, history, or how to get involved.",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleToggle = () => setIsOpen(!isOpen);

  const getBotResponse = (query) => {
    const response = searchKnowledgeBase(query);
    return response || "I'm sorry, I couldn't find specific information about that. You can try asking about our programs, our mission, how to donate, or how to contact us. For more detailed questions, please visit the relevant pages on our website.";
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputValue,
    };

    const botResponse = {
      id: Date.now() + 1,
      sender: 'bot',
      text: getBotResponse(inputValue),
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputValue('');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[100]">
        <Button
          onClick={handleToggle}
          size="icon"
          className="rounded-full w-14 h-14 bg-primary-custom hover:bg-primary-hover shadow-lg"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-[100]"
          >
            <div className="p-4 bg-primary-custom text-white rounded-t-2xl flex items-center space-x-2">
              <Bot className="w-6 h-6" />
              <h3 className="font-bold">Dzikwa Trust Assistant</h3>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-2.5 ${
                    message.sender === 'bot' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-primary-custom/20 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-primary-custom" />
                    </div>
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`max-w-[85%] p-3 rounded-xl ${
                      message.sender === 'bot'
                        ? 'bg-gray-100 text-gray-800 rounded-tl-none'
                        : 'bg-primary-custom text-white rounded-br-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </motion.div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-gray-200 flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-custom"
              />
              <Button onClick={handleSend} size="icon" className="bg-primary-custom hover:bg-primary-hover">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
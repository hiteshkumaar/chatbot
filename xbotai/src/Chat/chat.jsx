import React, { useState, useEffect } from 'react';

const staticResponses = {
  "Can you explain RESTful APIs?":
    "RESTful APIs are designed around the REST (Representational State Transfer) architecture, which uses HTTP requests to access and manipulate data. They follow a stateless, client-server, cacheable communications protocol.",
  "Hi, what is the weather?": "The weather today is sunny with a chance of rain in the evening.",
};

function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('conversations')) || [];
    setMessages(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('conversations', JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { from: 'User', text: input };
    const responseText = staticResponses[input] || 'Sorry, Did not understand your query!';
    const botMsg = { from: 'Soul AI', text: responseText };

    const updated = [...messages, userMsg, botMsg];
    setMessages(updated);
    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Message Bot AI..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="buttons">Send</button>
      </form>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <span>{msg.from === 'Soul AI' ? 'Soul AI' : 'You'}</span>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Chat from './Chat/chat';
import History from './History/history';

function App() {
  return (
    <Router>
      <header>
        <h1>Bot AI</h1>
        <nav>
          <Link to="/">New Chat</Link> | <Link to="/history">Past Conversations</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
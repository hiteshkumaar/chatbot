import React from 'react';

function History() {
  const conversations = JSON.parse(localStorage.getItem('conversations')) || [];

  return (
    <div>
      <h2>Past Conversations</h2>
      {conversations.map((msg, index) => (
        <div key={index}>{msg.text}</div>
      ))}
    </div>
  );
}

export default History;

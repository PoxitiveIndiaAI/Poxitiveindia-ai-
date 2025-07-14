import React, { useState } from 'react';
import './AIBox.css';

const AIBox = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulated response
    setTimeout(() => {
      setAnswer("This is a sample answer based on the POX ecosystem. Real-time integration coming soon!");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="ai-box">
      <h2>Ask Anything about the POX Ecosystem</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Eg: What is SR income from 10,000 POX votes?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <button type="submit">Get Answer</button>
      </form>
      <div className="answer-box">
        {loading ? <p className="loading">Fetching response...</p> : answer && <p>{answer}</p>}
      </div>
    </div>
  );
};

export default AIBox;

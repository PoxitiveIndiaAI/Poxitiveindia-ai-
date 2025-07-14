import React from 'react'
import './App.css'
import AIBox from './components/AIBox'

function App() {
  return (
    <>
      <div className="app-container">
        <h1>Welcome to PoxitiveIndiaAI</h1>
        <p>Your POX Ecosystem Assistant</p>
        <p>Get real-time info, staking guides, token insights & more...</p>
      </div>
      <AIBox />
    </>
  )
}

export default App

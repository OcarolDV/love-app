import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import Photos from './components/Photos'; // Import the Photos component
import LovePage from './components/LovePage'; // Import the LovePage component
import Message from './components/Message'; // Import the Message component

function Home({ handleYesClick, handleNoClick, yesSize, noSize }) {
  return (
    <div className="main-page">
      <h1>Do you love me?</h1>
      <button
        className="yes-button"
        style={{ transform: `scale(${yesSize})` }}
        onClick={handleYesClick}
      >
        Yes
      </button>
      {noSize > 0.1 && (
        <button
          className="no-button"
          style={{ transform: `scale(${noSize})` }}
          onClick={handleNoClick}
        >
          No
        </button>
      )}
    </div>
  );
}

function App() {
  const [showLovePage, setShowLovePage] = useState(false);
  const [yesSize, setYesSize] = useState(1);
  const [noSize, setNoSize] = useState(1);

  const handleNoClick = () => {
    setYesSize(prevSize => prevSize * 1.1);
    setNoSize(prevSize => prevSize * 0.9);
  };

  const handleYesClick = () => {
    setShowLovePage(true);
  };

  const handleBackToMainPage = () => {
    setShowLovePage(false);
    setYesSize(1);
    setNoSize(1);
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/message">Message</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            showLovePage ? (
              <LovePage handleBackToMainPage={handleBackToMainPage} />
            ) : (
              <Home
                handleYesClick={handleYesClick}
                handleNoClick={handleNoClick}
                yesSize={yesSize}
                noSize={noSize}
              />
            )
          } />
          <Route path="/photos" element={<Photos />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
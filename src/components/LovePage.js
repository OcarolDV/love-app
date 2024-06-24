import React from 'react';
import { motion } from 'framer-motion';

function LovePage({ handleBackToMainPage }) {
  return (
    <motion.div
      className="love-page"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
    >
      <h1>I LOVE YOU MOREEEEEEEEE!!<br></br>Happy Monthsary Dahlia!</h1>
      <button className="yipee-button" onClick={handleBackToMainPage}>
        YIPEEEEE
      </button>
    </motion.div>
  );
}

export default LovePage;
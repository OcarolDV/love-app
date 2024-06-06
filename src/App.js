import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

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

    if (showLovePage) {
        return (
            <motion.div
                className="love-page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h1>I LOVE YOU MOREEEEEEEE!!</h1>
                <button className="yipee-button" onClick={handleBackToMainPage}>
                    YIPEEEEE
                </button>
            </motion.div>
        );
    }

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

export default App;
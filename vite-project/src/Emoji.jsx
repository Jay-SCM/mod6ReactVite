/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import happyEmoji from './happy.png';
import sadEmoji from './sad.png';
const Emoji = () => {
    const [isHappy, setIsHappy] = useState(true);
    const toggleMood = () => {
        setIsHappy((prevIsHappy) => !prevIsHappy);
    };
    return (
        <div>
            <img
                src={isHappy ? happyEmoji : sadEmoji}
                alt={isHappy ? 'Happy Emoji' : 'Sad Emoji'}
                style={{ width: '100px', height: '100px' }}
            />
            <button onClick={toggleMood}>Change Mood</button>
        </div>
    );
};
export default Emoji;


//emoji.jsx
import React, { useState } from 'react';
import happyEmoji from '../assets/happy.jpg';
import sadEmoji from '../assets/sad.jpg';
const Emoji = () => {
    const [isHappy, setIsHappy] = useState(true);
    const toggleMood = () => {
        setIsHappy((prevIsHappy) => !prevIsHappy);};
    return (
        <div>
            <img
                src={isHappy ? happyEmoji : sadEmoji}
                alt={isHappy ? 'Happy Emoji' : 'Sad Emoji'}
                style={{ width: '100px', height: '100px' }}
            />
            <button onClick={toggleMood}>CHANGEEMOJI</button>
        </div>);};
export default Emoji;

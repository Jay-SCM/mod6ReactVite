//emoji.js
import React, { useState } from 'react';
import happyEmoji from '../assets/happy.jpg';
import sadEmoji from '../assets/sad.jpg';
import './HappySad.css';
const Emoji = () => {
    const [isHappy, setIsHappy] = useState(true);
    const toggleMood = () => {
        setIsHappy((prevIsHappy) => !prevIsHappy);};
    return (
        <div className="happyCard">
            <img
                src={isHappy ? happyEmoji : sadEmoji}
                alt={isHappy ? 'Happy Emoji' : 'Sad Emoji'}
                style={{ width: '100px', height: '100px' }}
            />
            <button className="ChangeBttn" onClick={toggleMood}>CHANGEEMOJI</button>
        </div>);};
export default Emoji;

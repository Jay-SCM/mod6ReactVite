
// Greeting.jsx
import React from 'react';
import './Greetings.css';
const Greeting = ({ name, children }) => {
    const greetingText = name ? `Hello ${name}` : 'Hello World';
    return (
        <div className="greeting-card">
            <p className="greeting">{greetingText}</p>
            {children && <div>{children}</div>}
        </div>);};
export default Greeting;



// Greeting.jsx
// Import the CSS file for styling the Greeting component.
// Import the React library for creating React components.
import React from 'react';
import './Greetings.css';
// Greeting component takes 'name' and 'children' as props.
const Greeting = ({ name, children }) => {
    // greeting text if name provided.
    const greetingText = name ? `Hello ${name}` : 'Hello World';
    // JSX structure for greetinf.
    return (
        <div className="greeting-card">
            {/* Display the greeting text inside paragraph with 'greeting' class. */}
            <p className="greeting">{greetingText}</p>
            {/* Conditionally render a div for additional children for prop */}
            {children && <div>{children}</div>}
        </div>);};
export default Greeting;// Export the Greeting component
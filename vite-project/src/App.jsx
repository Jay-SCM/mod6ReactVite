//---------
//App.jsx
// SoManYImPoRtS.
import React, { useState } from 'react';
import Greeting from './components/Greeting.jsx';
import BigCats from './components/BigCats.jsx';
import HAPPYSADCHANGER from './components/HAPPYSADCHANGER.jsx';
import Calculator from './components/calc.jsx';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';
import './App.css';
function App() {
    // Declare a state variable 'count' and a function 'setCount' to update it.
    const [count, setCount] = useState(0);
    // Return JSX structure for componenets.
    return (
        <div>
            <h1>Vite + React</h1>
            {/* Render Greeting component with name prop */}
            <Greeting name="John" />
            {/* Render Greeting component with name prop and children */}
            <Greeting name="Alice">PqlawoksiejdurfhtgalskdjF</Greeting>
            {/* Render a bunch of react logos by using links */}
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" /></a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" /></a>
            </div>
            {/* heading with inline styles */}
            <h3 style={{ color: 'red', textTransform: 'uppercase' }}>Welcome!</h3>
            {/* Render BigCats component*/}
            <BigCats />
            {/*HAPPYSADCHANGER component*/}
            <HAPPYSADCHANGER />
            {/*Calculator component*/}
            <Calculator />
            {/*card with a button to update the counter*/}
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
            </div>
            {/*react ptag with a class */}
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </div>);}
export default App;
























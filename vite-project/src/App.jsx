

import React, { useState } from 'react';
import Greeting from './Greeting.jsx';
import BigCats from './BigCats.jsx';
import HAPPYSADCHANGER from './HAPPYSADCHANGER.jsx';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';
import './App.css';
function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Vite + React</h1>
            {/* make Greeting component */}
            <Greeting name="John" />
            <Greeting name="Alice">laskjdf</Greeting>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h3 style={{ color: 'red', textTransform: 'uppercase' }}>Welcome!</h3>
            {/* make BigCats component */}
            <BigCats />
            {/* make emoji component */}
            <HAPPYSADCHANGER />
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>);}
export default App;








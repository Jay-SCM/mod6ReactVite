//exercise 6
// calc.jsx
// Imports
import React, { useState } from 'react';
const Calculator = () => {
    // Declare  variables for numbers, operator, and result, add function to update them
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState(0);
    // Function to handle changes in the input for Number 1.
    const handleNum1Change = (e) => {
        setNum1(Number(e.target.value));};
    // Function to handle changes in the input for Number 2.
    const handleNum2Change = (e) => {
        setNum2(Number(e.target.value));};
    // Function to handle changes in the operator selection.
    const handleOperatorChange = (e) => {
        setOperator(e.target.value);};
    // Function to calculate the result based on the selected operator.
    const calculateResult = () => {
        switch (operator) {
            case '+':
                setResult(num1 + num2);
                break;
            case '-':
                setResult(num1 - num2);
                break;
            case '*':
                setResult(num1 * num2);
                break;
            case '/':
                setResult(num1 / num2);
                break;
            default:
                setResult(0);}};
    // Return the JSX structure for the Calculator component.
    return (
        <div>
            <h2>Calculator</h2>
            {/* Input for Number 1 with an onChange event handler */}
            <label>
                Number 1:
                <input type="number" value={num1} onChange={handleNum1Change} />
            </label>
            <br />
            {/* Dropdown for selecting the operator with an onChange event handler */}
            <label>
                Operator:
                <select value={operator} onChange={handleOperatorChange}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            </label>
            <br />
            {/* Input for Number 2 with an onChange event handler */}
            <label>
                Number 2:
                <input type="number" value={num2} onChange={handleNum2Change} />
            </label>
            <br />
            {/* Button to trigger the calculation */}
            <button onClick={calculateResult}>Calculate</button>
            <br />
            {/* Input for displaying the result (read-only) */}
            <label>
                Result:
                <input type="text" value={result} readOnly />
            </label>
        </div>);};
export default Calculator;
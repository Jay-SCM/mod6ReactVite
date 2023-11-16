import React, { useState } from 'react';
const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState(0);
    const handleNum1Change = (e) => {
        setNum1(Number(e.target.value));
    };
    const handleNum2Change = (e) => {
        setNum2(Number(e.target.value));};
    const handleOperatorChange = (e) => {
        setOperator(e.target.value);};
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
    return (
        <div>
            <h2>Calculator</h2>
            <label>
                Number 1:
                <input type="number" value={num1} onChange={handleNum1Change} />
            </label>
            <br />
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
            <label>
                Number 2:
                <input type="number" value={num2} onChange={handleNum2Change} />
            </label>
            <br />
            <button onClick={calculateResult}>Calculate</button>
            <br />
            <label>
                Result:
                <input type="text" value={result} readOnly />
            </label>
        </div>);};

export default Calculator;

//Create Simple Calculator App in React JS.

import React, { useState } from 'react';
import './q3.css';
const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (event) => {
    setResult(result.concat(event.target.name));
  };

  const handleClear = () => {
    setResult('');
  };

  const handleBackspace = () => {
    setResult(result.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="screen">
        <input type="text" value={result} />
      </div>
      <div className="buttons">
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" onClick={handleClick}>+</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClick}>-</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="*" onClick={handleClick}>*</button>
        <button name="." onClick={handleClick}>.</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="/" onClick={handleClick}>/</button>
        <button className="clear" onClick={handleClear}>Clear</button>
        <button className="backspace" onClick={handleBackspace}>C</button>
        <button className="equal" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;

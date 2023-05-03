// create Increment /decrement button with css

import React, { useState } from 'react';
import './q13.css';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={handleDecrement}>
        -
      </button>
      <span className="counter-count">{count}</span>
      <button className="counter-button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default Counter;

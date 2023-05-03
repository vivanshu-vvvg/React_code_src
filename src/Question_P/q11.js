//  Demonstrate the use of useRef,useContext and useReducer hook through your code.


import React, { useContext, useReducer, useRef } from 'react';
import { MyContext } from './q11_b';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter1() {
  const inputRef = useRef(null);
  const { count, dispatch } = useContext(MyContext);

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <br />
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}

export default Counter1;

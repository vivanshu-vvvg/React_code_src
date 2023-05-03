import React, { createContext, useReducer } from 'react';

export const MyContext = createContext();

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

export function MyContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={{ count: state.count, dispatch }}>
      {props.children}
    </MyContext.Provider>
  );
}

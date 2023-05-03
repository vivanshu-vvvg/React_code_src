// Demonstrate the use of useEffect and useMemo hook through your code.


import React, { useState, useEffect, useMemo } from 'react';

function Function() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    // This function runs after every render of the component
    console.log('Component rendered');

    // Here you could make an API call or do other asynchronous work
    // and then update the state with the results
    const newData = ['apple', 'banana', 'orange'];
    setData(newData);

    // This function runs after every unmount of the component
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  // This function only runs when the count state changes
  const doubledCount = useMemo(() => {
    console.log('Count doubled');
    return count * 2;
  }, [count]);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <h1>Doubled count: {doubledCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Function;


/*In this code, we have a count state and a data state. We also have a useEffect hook that runs after every render of the component and updates the data state with some new data. We use the empty dependency array ([]) to ensure that the useEffect hook only runs once when the component mounts.

We also have a useMemo hook that calculates the double of the count state and memoizes the result. This means that the function passed to useMemo only runs when the count state changes. This can improve performance because it avoids unnecessary recalculations of the same value.

In the JSX, we display the count and doubledCount states and provide a button to increment the count state. We also display the data state in a list using the map method.

You can try this code in your React project to see how useEffect and useMemo hooks work.*/
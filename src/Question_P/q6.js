// Create a Digital Clock using React JS
import React, { useState, useEffect } from 'react';



const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="digital-clock">
      <h1>Digital Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default DigitalClock;

/* In this example, we use the useState hook to create a state variable time, which is initialized to the current time using the new Date() constructor. We use the useEffect hook to set up an interval that updates the time state every second using setInterval.

Finally, we render the Digital Clock component with a title "Digital Clock" and the current time formatted using the toLocaleTimeString() method.*/
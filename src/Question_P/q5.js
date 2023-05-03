//How to get Time on Refreshing and Clicking Button using useState Hook. 

import React, { useState } from 'react';

const TimeComponent = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const handleButtonClick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  // Set up an effect to update the time every second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Current time: {time}</p>
      <button onClick={handleButtonClick}>Get Current Time</button>
    </div>
  );
};

export default TimeComponent;

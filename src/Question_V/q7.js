//Display the countdown timer

import React, { useState, useEffect } from 'react';
import './q7.css';
function CountdownTimer({ hours = 0, minutes = 0, seconds = 0 }) {
  const [remainingTime, setRemainingTime] = useState({ hours, minutes, seconds });

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      if (remainingTime.seconds > 0) {
        setRemainingTime(prevTime => ({ ...prevTime, seconds: prevTime.seconds - 1 }));
      } else if (remainingTime.minutes > 0) {
        setRemainingTime(prevTime => ({ ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 }));
      } else if (remainingTime.hours > 0) {
        setRemainingTime(prevTime => ({ ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 }));
      } else {
        clearInterval(countdownTimer);
      }
    }, 1000);
    
    return () => clearInterval(countdownTimer);
  }, [remainingTime]);

  const { hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds } = remainingTime;

  return (
    <div className='countdown-timer'>
      <h2>Countdown Timer</h2>
      <p>{`${remainingHours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`}</p>
    </div>
  );
}

export default CountdownTimer;

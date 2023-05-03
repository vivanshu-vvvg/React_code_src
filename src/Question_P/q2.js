//Creating Simple Greeting Website using React JS. Use text boxes for the same. Website will greet you according to time. As if the time is from 5 am to 12 noon it says good morning and colour of good morning must be green. As if the time is from 12 noon to 3 pm it says good afternoon and colour of good morning must be red. And so on. 
// npm install moment- in terminal open folder by cd and ennter npm moment

import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Greeting = () => {
  const [time, setTime] = useState(moment().format('HH:mm:ss'));
  const [greeting, setGreeting] = useState('Good Morning');
  const [color, setColor] = useState('green');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hour = moment().hour();

    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning');
      setColor('green');
    } else if (hour >= 12 && hour < 15) {
      setGreeting('Good Afternoon');
      setColor('red');
    } else if (hour >= 15 && hour < 20) {
      setGreeting('Good Evening');
      setColor('orange');
    } else {
      setGreeting('Good Night');
      setColor('purple');
    }
  }, [time]);

  const styles = {
    backgroundColor: color,
    padding: '20px',
    textAlign: 'center',
    color: 'white',
    marginTop: '100px',
  };

  return (
    <div style={styles}>
      <h1>{greeting}</h1>
      <p>The time is {time}</p>
    </div>
  );
};

export default Greeting;

//Display Current Date and Time in JSX in React JS. Use two buttons for the date and time. While clicking it displays the data and time.
import { useState } from 'react';

function DateTime() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleDateClick = () => {
    const currentDate = new Date().toLocaleDateString();
    setDate(currentDate);
  };

  const handleTimeClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  return (
    <div>
      <h2>Date and Time</h2>
      <div>
        <button onClick={handleDateClick}>Get Date</button>
        {date && <p>{date}</p>}
      </div>
      <div>
        <button onClick={handleTimeClick}>Get Time</button>
        {time && <p>{time}</p>}
      </div>
    </div>
  );
}

export default DateTime;

/*In this example, we're using the useState hook to create two state variables, date and time, to store the current date and time respectively. We're also using two functions, handleDateClick and handleTimeClick, to get the current date and time and update the state variables.

When the user clicks the "Get Date" button, we call the handleDateClick function, which gets the current date using the toLocaleDateString method and updates the date state variable. Similarly, when the user clicks the "Get Time" button, we call the handleTimeClick function, which gets the current time using the toLocaleTimeString method and updates the time state variable.

Finally, we're rendering two buttons, one for the date and one for the time, and displaying the current date and time when the corresponding button is clicked. We're also using conditional rendering to only display the date or time when the corresponding state variable has a value.*/
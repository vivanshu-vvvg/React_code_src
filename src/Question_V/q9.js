//Display the progress bar   {Analysis of 5 student marks}

import React, { useState } from 'react';
import './q9.css';

function ProgressBar() {
  const [marks, setMarks] = useState([85, 72, 60, 19, 93]);

  const average = marks.reduce((acc, curr) => acc + curr, 0) / marks.length;
  const highest = Math.max(...marks);
  const lowest = Math.min(...marks);

  const percentage = {
    average: (average / 100) * 100,
    highest: (highest / 100) * 100,
    lowest: (lowest / 100) * 100
  };

  return (
    <div>
      <h2>Analysis of Student Marks</h2>
      <ul>
        <li>Average: {average}</li>
        <li>Highest: {highest}</li>
        <li>Lowest: {lowest}</li>
      </ul>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${percentage.average}%` }}>
          <span>Average percentage: {percentage.average}%</span>
        </div>
        <div className="progress-bar" style={{ width: `${percentage.highest}%`, backgroundColor: 'green' }}>
          <span>Highest percentage: {percentage.highest}%</span>
        </div>
        <div className="progress-bar" style={{ width: `${percentage.lowest}%`, backgroundColor: 'red' }}>
          <span>Lowest percentage: {percentage.lowest}%</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;

/*In this example, we have an array of 5 student marks stored in the marks state variable. We calculate the average, highest, and lowest marks using the reduce and Math functions.

We then convert these values to percentages and store them in the percentage object. This object is used to set the width of each progress bar using inline styles. We also use a green background color for the progress bar representing the highest mark, and a red background color for the progress bar representing the lowest mark.*/

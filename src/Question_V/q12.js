//Changing the color button and message of submit button
import React, { useState } from 'react';
import './q12.css';

function SubmitButton() {
  const [buttonColor, setButtonColor] = useState('#4CAF50');
  const [buttonText, setButtonText] = useState('Submit');

  const handleClick = () => {
    // perform form validation and submission logic here
    setButtonColor('red');
    setButtonText('Submitted!');
  };

  return (
    <button
      className="submit-button"
      style={{ backgroundColor: buttonColor }}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}

export default SubmitButton;

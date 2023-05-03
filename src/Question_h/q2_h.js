//Create a component by adding button sumbit 1 and 2 and 3 and render on user click it should alert which button should click.
import React from 'react';

const ButtonExample = () => {

  const handleClick = (buttonNum) => {
    alert(`You clicked button ${buttonNum}`);
  }

  return (
    <div>
      <button onClick={() => handleClick(1)}>Submit 1</button>
      <button onClick={() => handleClick(2)}>Submit 2</button>
      <button onClick={() => handleClick(3)}>Submit 3</button>
    </div>
  );
};

export default ButtonExample;

/* In this example, we define a functional component called ButtonExample. Inside this component, we define a function called handleClick that takes a buttonNum argument. This function will be called whenever the user clicks on any of the buttons.

We render three buttons, each with an onClick handler that calls the handleClick function with a different buttonNum argument. When the user clicks on a button, the handleClick function is called with the corresponding buttonNum. The function then uses alert to display a message telling the user which button they clicked.

You can add this component to your app and render it wherever you like. When the user clicks on any of the buttons, they will see an alert message telling them which button they clicked.*/

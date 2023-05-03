// Display the login form    -> landing page welcome to lpu

import React, { useState } from 'react';
import './q10.css';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);
    setUsername('');
    setPassword('');
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="landing-page">
      <h1>Welcome to LPU</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Log In</button>
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Welcome {username}!</h2>
            <p>You have successfully logged in.</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;

/*In this example, we create a functional component LoginForm that contains a form with two input fields for the username and password, as well as a submit button. The form's onSubmit handler function is handleSubmit, which logs the entered username and password to the console and clears the input fields.

The useState hook is used to create state variables username and password to keep track of the input field values. We also create two event handler functions handleUsernameChange and handlePasswordChange to update the state variables whenever the input field values change.*/
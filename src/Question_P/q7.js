//Create a login form with three entries. When you will click on the submit button on the form it must show form is submitted and all the values that you are storing tn the fields must be shown on the header. 

import React, { useState } from 'react';
import './q7.css'

const LoginFormField = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1>
        Submitted Data: Your Name: {formData.username},Your gmail:{formData.email}
      </h1>
    </div>
  );
};

export default LoginFormField;


/*In this example, we use the useState hook to create a state variable formData, which is an object with keys for each of the form fields (username, email, and password). We also define two functions: handleSubmit to handle form submission, and handleChange to handle changes to the form fields.

In the handleSubmit function, we prevent the default form submission behavior, display an alert message, and log the form data to the console. In the handleChange function, we use object spread syntax ({...formData}) to create a copy of the current form data object, and then update the value of the form field that was changed using the name and value properties of the event target.
*/
//Using api fetch the data.
import React, { useState, useEffect } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

/*In this example, we've defined the API_URL constant that contains the URL of the API that we want to fetch data from. Then, we define a UserList component that fetches the data from the API and stores it in the users state using the useState hook.

We use the useEffect hook to fetch the data from the API when the component mounts. The useEffect hook takes a callback function as an argument that runs when the component mounts. Inside the callback function, we define an async function fetchUsers that fetches the data from the API using the fetch method. We then use the await keyword to wait for the response to be returned and parse the response using the json method. We then set the state of users to the parsed data using the setUsers function.

Finally, we render the users array in an unordered list using the map method. For each user in the users array, we render a list item with the user's name property as the content and the id property as the key.

You can use this UserList component in another component or in the App component like this:*/
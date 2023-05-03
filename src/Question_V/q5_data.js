import React, { useState } from 'react';

function Table({ data }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

/*Here, we define a Table component that takes an array of data as a prop. We use the useState hook to keep track of the searchTerm entered by the user.

We define an event handler function handleChange that is called when the user types in the search input field. This function updates the searchTerm state with the current value of the input field.

We then use the filter method on the data array to create a new filteredData array that only includes items whose name property matches the searchTerm. We use the toLowerCase method to ensure case-insensitive matching.

Finally, we render the filteredData array in a table. We also render an input field that allows the user to enter a search term, and use the handleChange function to update the searchTerm state as the user types.

To use this component, you can render it in a parent component and pass an array of data as a prop:
*/
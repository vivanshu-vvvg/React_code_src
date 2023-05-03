//Create a react Js Component To perform A filter operation on an array , take your array of your on
import React, { useState } from 'react';

const data = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Bob Johnson', age: 35 },
  { id: 4, name: 'Alice Lee', age: 40 },
  { id: 5, name: 'David Brown', age: 45 },
];

const FilterExample = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name} ({item.age})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterExample;

/* In this example, we start by defining an array of objects called data. Then, we define a functional component called FilterExample. Inside this component, we use the useState hook to create a state variable called searchTerm, which will hold the value of the search input. We then create a new variable called filteredData, which is the result of filtering the data array based on the searchTerm.

We render an input field that will allow the user to enter a search term. We set the value of this input field to the searchTerm state variable, and we update the state variable whenever the user types in the input field.

Finally, we render a list of items based on the filteredData array. We map over this array and render a list item for each object in the array, displaying the name and age of the person. The key prop is used to uniquely identify each list item. */
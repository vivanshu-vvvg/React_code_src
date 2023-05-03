//Implement a search functionality in react that alolow s user to filter the list of items based on search query enterd in input field 
import React, { useState } from 'react';




const SearchableList = ({ items=["apple","banana","cherry","date","elderberry","fig","grape","honeydew","kiwi","lemon","mango",    "nectarine",    "orange",    "peach",    "quince",    "raspberry",    "strawberry","tangerine",    "ugli fruit",    "watermelon"  ]}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  let filteredItems = [];

  if (items) {
    filteredItems = items.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search..."
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;

/* In this example, we define a functional component called SearchableList. This component takes a prop called items, which is an array of strings representing the list items.

Inside the component, we use the useState hook to create a state variable called searchQuery, which will hold the user's search query. We define a function called handleSearchInputChange that will be called whenever the user types in the search input field. This function updates the searchQuery state variable to reflect the user's search query.

We use the filter method to create a new array called filteredItems that contains only the list items that match the user's search query. We use the includes method to check if each list item includes the search query. We use toLowerCase to make the search case-insensitive.

We render an input element that allows the user to enter a search query. We set the value attribute to the searchQuery state variable, and we attach an onChange event handler to the input element that calls the handleSearchInputChange function whenever the user types in the input field. We also set the placeholder attribute to "Search..." to provide a hint to the user.

Finally, we render a ul element that contains the filtered list items. We use the map method to create a li element for each filtered item, and we set the key attribute to the index variable to ensure that each li element has a unique key.

When the user types in the search input field, the list items will be filtered based on the user's search query, and the filtered items will be displayed in the browser. */
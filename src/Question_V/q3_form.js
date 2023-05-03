//Create a react form to make a new item in the table.
import React, { useState } from 'react';

function AddItemForm({ addItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem({ name, quantity });
    setName('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Quantity:
        <input type="text" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;

/*Here, we define a AddItemForm component that takes a addItem function as a prop. This function is responsible for adding the new item to the table. The form has two input fields: one for the item name and one for the item quantity. We use the useState hook to keep track of the values of these fields.

In the handleSubmit function, we prevent the default form submission behavior, call the addItem function with the current values of name and quantity, and reset the form input values to empty strings.

Finally, we render the form with the two input fields and a submit button. When the user submits the form, the handleSubmit function is called and the new item is added to the table.*/
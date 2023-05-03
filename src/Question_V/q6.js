//Display the shopping cart before the online delivery {Add to cart functionality}

import React, { useState } from 'react';

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: {cartTotal}</h3>
      <div>
        <h2>Products</h2>
        <ul>
          <li>
            Product 1 - Rs 10
            <button onClick={() => handleAddToCart({ id: 1, name: 'Product 1', price: 10 })}>Add to Cart</button>
          </li>
          <li>
            Product 2 - Rs 20
            <button onClick={() => handleAddToCart({ id: 2, name: 'Product 2', price: 20 })}>Add to Cart</button>
          </li>
          <li>
            Product 3 - Rs 30
            <button onClick={() => handleAddToCart({ id: 3, name: 'Product 3', price: 30 })}>Add to Cart</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShoppingCart;

/*Here, we define a ShoppingCart component that has an empty cart state, which is an array of items that the user has added to their cart.

We define two event handler functions: handleAddToCart and handleRemoveFromCart. The handleAddToCart function takes an item object as an argument and adds it to the cart state by spreading the current cart array and appending the new item to it. The handleRemoveFromCart function removes an item from the cart state by filtering the cart array and returning all items except for the one that matches the clicked item.

We calculate the total cost of the cart by using the reduce method on the cart array to add up the price property of each item.

We then render a shopping cart section that displays the current cart items with a "Remove" button for each item. We also display the total cost of the cart.

We render a product section that has a list of products with their name and price, and an "Add to Cart" button that calls the handleAddToCart function with the respective product object as an argument.

To use this component, you can render it in a parent component like this:
*/


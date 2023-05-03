//Display the slide show of image.

import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/300x150/FF0000/FFFFFF',
  'https://plus.unsplash.com/premium_photo-1668130718429-7abf7b186f2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80',
  'https://via.placeholder.com/300x150/0000FF/FFFFFF',
];

function Slideshow() {
  const [index, setIndex] = useState(0);

  const handleClickPrev = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleClickNext = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <button onClick={handleClickPrev}>Prev</button>
      <img src={images[index]} alt={`Image ${index + 1}`} />
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
}

export default Slideshow;

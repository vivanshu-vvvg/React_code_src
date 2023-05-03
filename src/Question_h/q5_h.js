//craete a componet that display the carousel of images allow the user to navigate threw images through previous and next button use UseState hook ,to manage the current image index and the use effect hook to fetch the images when the component get mount

import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch images when component is mounted
    // This is just an example, replace with your own fetch logic
    fetch('https://example.com/images')
      .then(response => response.json())
      .then(data => {
        // Set images state here
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  const previousImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const nextImage = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <div>
      <button onClick={previousImage}>Previous</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageCarousel;

/*In this example, the ImageCarousel component takes a prop images which is an array of image URLs. It uses the useState hook to manage the current image index, which starts at 0. It uses the useEffect hook to fetch the images when the component is mounted. This is just an example, and you should replace the fetch logic with your own logic to fetch the images.

The previousImage and nextImage functions are called when the user clicks the previous and next buttons, respectively. They update the current image index using setCurrentImageIndex, and handle the case when the current image index is at the beginning or end of the array using a ternary operator.

The component renders a previous button, an image with the src attribute set to the current image URL, and a next button. The alt attribute of the image is set to a string that indicates the current image index.

This is just a basic example of how you can create a carousel component in React. You can customize this component to fit your specific needs, such as adding more buttons, captions, or animations.*/
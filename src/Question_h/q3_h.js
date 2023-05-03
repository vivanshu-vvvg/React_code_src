//Create a copmponent to upload only images , display the uploaded image in a square box and dispkay in a browser , you can use multiple images at a same time.
import React, { useState } from 'react';

const ImageUploader = () => {
  const [files, setFiles] = useState([]);

  const handleFileInputChange = (event) => {
    const { files } = event.target;

    const validFileTypes = ['image/jpeg', 'image/png', 'image/gif'];

    const selectedFiles = Array.from(files).filter((file) =>
      validFileTypes.includes(file.type)
    );

    setFiles(selectedFiles);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileInputChange}
      />

      {files.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: 20,
          }}
        >
          {files.map((file) => (
            <div
              key={file.name}
              style={{
                width: 150,
                height: 150,
                margin: 10,
                overflow: 'hidden',
              }}
            >
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;

/*In this example, we start by defining a functional component called ImageUploader. Inside this component, we use the useState hook to create a state variable called files, which will hold the uploaded images.

We define a function called handleFileInputChange that will be called whenever the user selects a file using the input element. This function checks each selected file to see if it is a valid image file (JPEG, PNG, or GIF) and adds it to the files state variable.

We render an input element that allows the user to select multiple image files. We set the accept attribute to "image/*" to ensure that the user can only select image files. We also attach an onChange event handler to the input element that calls the handleFileInputChange function whenever the user selects a file.

Finally, we render a square box for each uploaded image using the files.map method. We use the URL.createObjectURL function to create a URL for each image file, which we then use as the src attribute of an img element. We also set the alt attribute to the name of the file, and we use CSS to ensure that each image is displayed in a square box with a width and height of 150 pixels.

When the user selects one or more image files, the uploaded images will be displayed in a square box below the input element, and a preview of each uploaded image will be displayed in the browser.*/
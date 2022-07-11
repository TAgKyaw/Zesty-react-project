import "./styles.css";
import React, { useState } from "react";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import avocado from "./assets/image3.jpeg";
import tomato from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import apple from "./assets/image6.jpeg";

const images = [cabbage, mango, avocado, tomato, peach, apple];

const App = () => {
  const [currentImageIndex, setCurrentImage] = useState(0);
  const length = images.length - 1;

  const handleClick = () => {
    setCurrentImage((currentImageIndex) => {
      //ternary statment -> condition ? do if true : do if false;
      return currentImageIndex < length ? currentImageIndex + 1 : 0;
    });
  };

  return (
    <div className="App">
      <div>
        <h1>Zesty</h1>
        <h2>
          A photography project
          <br /> by Ella Fieldling
        </h2>
      </div>
      <div className="image-container">
        <img alt="" src={images[currentImageIndex]} onClick={handleClick} />
      </div>
    </div>
  );
};

export default App;

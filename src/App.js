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
  const [currentImageIndex, setCurrentImage] = useState(200);
  console.log(currentImageIndex);

  const handelClick = () => {
    alert("Hello World!");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <div>
        <h1>Zesty</h1>
        <h2>
          A photography project
          <br /> by Ella Fieldling
        </h2>
        <button onClick={handelClick}> Click Here </button>
        <input
          type="text"
          name="example"
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <div className="image-container">
        <img alt="" src={images[2]} />
      </div>
    </div>
  );
};

export default App;

import "./styles.css";
import React, { useState } from "react";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import avocado from "./assets/image3.jpeg";
import tomato from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import apple from "./assets/image6.jpeg";

const images = [cabbage, mango, avocado, tomato, peach, apple];

const Loading = () => (
  <aside>
    <div className="loading-bar">
      <label>Loading all your favorite images...</label>
      <progress></progress>
    </div>
  </aside>
);
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
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project
          <br /> by Ella Fieldling
        </h2>
      </header>
      <figure>
        <figcaption>
          {currentImageIndex + 1} / {images.length}{" "}
        </figcaption>
        <img alt="" src={images[currentImageIndex]} onClick={handleClick} />
      </figure>
    </section>
  );
};

export default App;

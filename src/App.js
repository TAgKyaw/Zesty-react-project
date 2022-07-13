import "./styles.css";
import React, { useState } from "react";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import avocado from "./assets/image3.jpeg";
import tomato from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import apple from "./assets/image6.jpeg";

const images = [cabbage, mango, avocado, tomato, peach, apple];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);
const App = () => {
  const [currentImageIndex, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;
    setCurrentImage((currentImageIndex) => {
      //ternary statment -> condition ? do if true : do if false;
      return currentImageIndex < length ? currentImageIndex + 1 : 0;
    });
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
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
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}
        <figcaption>
          {currentImageIndex + 1} / {images.length}{" "}
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            onClick={handleClick}
            onLoad={handleImageLoad}
            // style={{ opacity: currentImageIndex === index ? 1 : 0 }}
            className={currentImageIndex === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;

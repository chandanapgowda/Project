import React, { useState, useEffect } from 'react';
import './Slider.css'; 

function Slider() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "resize17026377891902040811banner1image.png",
    "dog.jpeg",
    "resize17026379531610710432104.png"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="slider">
      <figure style={{ transform: `translateX(${-currentImage * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </figure>
    </div>
  );
}

export default Slider;



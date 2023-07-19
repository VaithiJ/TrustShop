import React, { useRef, useEffect } from "react";
import "./Carousel.css";
import carsvalley from "./Logo/cars-valley.png";
import vastra from "./Logo/vastra.png";
import block from "./Logo/blocklisting.png";
import art from "./Logo/Artchain.png";
import realchain from "./Logo/realchain.png";
import petchain from "./Logo/petchain.png";
import verified from "./Logo/verified.png";
import thrustshop from "./Logo/thrustshop.png";

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollInterval;
    let scrollAmount = 1; // Adjust the scroll increment as needed

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        carousel.scrollLeft += scrollAmount;

        // Check if the scroll position has reached the end and reset if necessary
        if (
          carousel.scrollLeft >=
          carousel.scrollWidth - carousel.clientWidth
        ) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 10); // Adjust the scroll interval as needed
    };

    startScrolling();

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <img className="logoimage" src={carsvalley} alt="Logo 1" />
      <img className="logoimage" src={vastra} alt="Logo 2" />
      <img className="logoimage" src={block} alt="Logo 3" />
      <img className="logoimage" src={art} alt="Logo 4" />
      <img className="logoimage" src={realchain} alt="Logo 5" />
      <img className="logoimage" src={petchain} alt="Logo 6" />
      <img className="logoimage" src={verified} alt="Logo 7" />
      <img className="logoimage" src={thrustshop} alt="Logo 8" />
      {/* Add duplicate images if you want the scrolling to be continuous */}
    </div>
  );
};

export default Carousel;

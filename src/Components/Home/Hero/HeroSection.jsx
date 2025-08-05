import React, { useState } from "react";
import { Link } from "react-router-dom";

import insta10 from "../../../Assets/Instagram/yun.jpg";
import insta11 from "../../../Assets/Instagram/car1.jpg";
import insta12 from "../../../Assets/Instagram/insta12.jpg";

import "./HeroSection.css";

const HeroSection = () => {
  const [carColor, setCarColor] = useState("red");
  const [currentImage, setCurrentImage] = useState(insta10); // default image

  const changeColor = (color) => {
    setCarColor(color);

    // Optionally change image based on color
    switch (color) {
      case "#353933":
        setCurrentImage(insta11);
        break;
      case "#EFBD4E":
        setCurrentImage(insta12);
        break;
      case "#726DE7":
        setCurrentImage(insta10);
        break;
      default:
        setCurrentImage(insta10);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="heroMain">
      <div className="sectionleft">
        <p>New Cars</p>
        <h1>Deen Show Room</h1>
        <span>Limited Time Offer - Up to 60% off & Super Cars From Deen</span>
        <div className="heroLink">
          <Link to="/shop" onClick={scrollToTop}>
            <h5>Discover More</h5>
          </Link>
        </div>
      </div>

      <div className="sectionright">
        <img
          src={currentImage}
          alt="Car"
          className="heroCarImage"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          }}
        />

        <div className="heroColorBtn">
          <button
            onClick={() => changeColor("#353933")}
            style={{ backgroundColor: "#353933" }}
          ></button>
          <button
            onClick={() => changeColor("#EFBD4E")}
            style={{ backgroundColor: "#EFBD4E" }}
          ></button>
          <button
            onClick={() => changeColor("#726DE7")}
            style={{ backgroundColor: "#726DE7" }}
          ></button>
          <button
            onClick={() => changeColor("red")}
            style={{ backgroundColor: "red" }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

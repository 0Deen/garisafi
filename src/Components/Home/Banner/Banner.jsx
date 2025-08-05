import React from "react";
import "./Banner.css";

import { Link } from "react-router-dom";

const Banner = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="banner">
        <div className="bannerLeft">
          <h6 className="bannerh6">Starting At $19k</h6>
          <h3 className="bannerh3">McLaren 720S</h3>
          <h5 className="bannerh5">
            <Link to="/shop" onClick={scrollToTop} style={{ color: "white" }}>
              Super Car Shop Now
            </Link>
          </h5>
        </div>
        <div className="bannerRight">
          <h6 className="bannerh6" style={{ color: "black" }}>
            Starting At $39k
          </h6>
          <h3 className="bannerh3" style={{ color: "black" }}>
            Maserati MC20
          </h3>
          <h5 className="bannerh5">
            <Link to="/shop" onClick={scrollToTop} style={{ color: "black" }}>
              Super Car Shop Now
            </Link>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Banner;

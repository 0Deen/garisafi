import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Features/Cart/cartSlice";

// Replacing missing car images with available Instagram images
import car1 from "../../../Assets/Instagram/insta1.jpg";
import car2 from "../../../Assets/Instagram/insta2.jpg";
import car3 from "../../../Assets/Instagram/insta3.jpg";
import car4 from "../../../Assets/Instagram/insta4.jpg";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { PiShareNetworkLight } from "react-icons/pi";

import { Link } from "react-router-dom";

import toast from "react-hot-toast";

import "./Product.css";

const Product = () => {
  const productImg = [car1, car2, car3, car4];
  const [currentImg, setCurrentImg] = useState(0);

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? productImg.length - 1 : currentImg - 1);
  };

  const nextImg = () => {
    setCurrentImg(currentImg === productImg.length - 1 ? 0 : currentImg + 1);
  };

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const [clicked, setClicked] = useState(false);

  const handleWishClick = () => {
    setClicked(!clicked);
  };

  const trims = ["Base", "Sport", "Luxury", "GT", "Track"];
  const trimNames = [
    "Base Model",
    "Sport Package",
    "Luxury Edition",
    "Grand Touring",
    "Track Edition",
  ];
  const [selectedTrim, setSelectedTrim] = useState("Sport");

  const [highlightedColor, setHighlightedColor] = useState("#C8393D");
  const colors = ["#000000", "#C8393D", "#E4E4E4"];
  const colorsName = ["Black", "Red", "Silver"];

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    const productDetails = {
      productID: 101,
      productName: "2025 Veloce Supercar",
      productPrice: 245000,
      frontImg: productImg[0],
      productReviews: "1.2k+ reviews",
    };

    const productInCart = cartItems.find(
      (item) => item.productID === productDetails.productID
    );

    if (productInCart && productInCart.quantity >= 5) {
      toast.error("Purchase limit reached", {
        duration: 2000,
        style: { backgroundColor: "#ff4b4b", color: "white" },
        iconTheme: { primary: "#fff", secondary: "#ff4b4b" },
      });
    } else {
      dispatch(addToCart(productDetails));
      toast.success(`Car added to cart!`, {
        duration: 2000,
        style: { backgroundColor: "#07bc0c", color: "white" },
        iconTheme: { primary: "#fff", secondary: "#07bc0c" },
      });
    }
  };

  return (
    <>
      <div className="productSection">
        <div className="productShowCase">
          <div className="productGallery">
            <div className="productThumb">
              <img src={car1} onClick={() => setCurrentImg(0)} alt="" />
              <img src={car2} onClick={() => setCurrentImg(1)} alt="" />
              <img src={car3} onClick={() => setCurrentImg(2)} alt="" />
              <img src={car4} onClick={() => setCurrentImg(3)} alt="" />
            </div>
            <div className="productFullImg">
              <img src={productImg[currentImg]} alt="" />
              <div className="buttonsGroup">
                <button onClick={prevImg} className="directionBtn">
                  <GoChevronLeft size={18} />
                </button>
                <button onClick={nextImg} className="directionBtn">
                  <GoChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <div className="productDetails">
            <div className="productBreadcrumb">
              <div className="breadcrumbLink">
                <Link to="/">Home</Link>&nbsp;/&nbsp;
                <Link to="/shop">Cars</Link>
              </div>
              <div className="prevNextLink">
                <Link to="/product">
                  <GoChevronLeft />
                  <p>Prev</p>
                </Link>
                <Link to="/product">
                  <p>Next</p>
                  <GoChevronRight />
                </Link>
              </div>
            </div>
            <div className="productName">
              <h1>2025 Veloce Supercar GT</h1>
            </div>
            <div className="productRating">
              <FaStar color="#FEC78A" size={10} />
              <FaStar color="#FEC78A" size={10} />
              <FaStar color="#FEC78A" size={10} />
              <FaStar color="#FEC78A" size={10} />
              <FaStar color="#FEC78A" size={10} />
              <p>1.2k+ reviews</p>
            </div>
            <div className="productPrice">
              <h3>$245,000</h3>
            </div>
            <div className="productDescription">
              <p>
                Designed for speed and luxury, the 2025 Veloce GT offers cutting-edge performance with a sleek aerodynamic profile. Equipped with a hybrid twin-turbo V8 and adaptive suspension.
              </p>
            </div>
            <div className="productSizeColor">
              <div className="productSize">
                <p>Trim Levels</p>
                <div className="sizeBtn">
                  {trims.map((trim, index) => (
                    <Tooltip
                      key={trim}
                      title={trimNames[index]}
                      placement="top"
                      TransitionComponent={Zoom}
                      enterTouchDelay={0}
                      arrow
                    >
                      <button
                        style={{
                          borderColor: selectedTrim === trim ? "#000" : "#e0e0e0",
                        }}
                        onClick={() => setSelectedTrim(trim)}
                      >
                        {trim}
                      </button>
                    </Tooltip>
                  ))}
                </div>
              </div>
              <div className="productColor">
                <p>Color</p>
                <div className="colorBtn">
                  {colors.map((color, index) => (
                    <Tooltip
                      key={color}
                      title={colorsName[index]}
                      placement="top"
                      enterTouchDelay={0}
                      TransitionComponent={Zoom}
                      arrow
                    >
                      <button
                        className={highlightedColor === color ? "highlighted" : ""}
                        style={{
                          backgroundColor: color.toLowerCase(),
                          border:
                            highlightedColor === color
                              ? "0px solid #000"
                              : "0px solid white",
                          padding: "8px",
                          margin: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => setHighlightedColor(color)}
                      />
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>
            <div className="productCartQuantity">
              <div className="productQuantity">
                <button onClick={decrement}>-</button>
                <input
                  type="text"
                  value={quantity}
                  onChange={handleInputChange}
                />
                <button onClick={increment}>+</button>
              </div>
              <div className="productCartBtn">
                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="productWishShare">
              <div className="productWishList">
                <button onClick={handleWishClick}>
                  <FiHeart color={clicked ? "red" : ""} size={17} />
                  <p>Add to Wishlist</p>
                </button>
              </div>
              <div className="productShare">
                <PiShareNetworkLight size={22} />
                <p>Share</p>
              </div>
            </div>
            <div className="productTags">
              <p>
                <span>VIN: </span>N/A
              </p>
              <p>
                <span>CATEGORIES: </span>Sports Cars, Supercars, 2025
              </p>
              <p>
                <span>TAGS: </span>turbo, performance, carbon fiber, luxury
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

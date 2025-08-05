import React, { useState } from "react";
import "./AdditionalInfo.css";

import user1 from "../../../Assets/Users/user1.jpeg";
import user2 from "../../../Assets/Users/user2.jpeg";

import { FaStar } from "react-icons/fa";
import Rating from "@mui/material/Rating";

const AdditionalInfo = () => {
  const [activeTab, setActiveTab] = useState("aiTab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="productAdditionalInfo">
      <div className="productAdditonalInfoContainer">
        <div className="productAdditionalInfoTabs">
          <div className="aiTabs">
            <p
              onClick={() => handleTabClick("aiTab1")}
              className={activeTab === "aiTab1" ? "aiActive" : ""}
            >
              Overview
            </p>
            <p
              onClick={() => handleTabClick("aiTab2")}
              className={activeTab === "aiTab2" ? "aiActive" : ""}
            >
              Specifications
            </p>
            <p
              onClick={() => handleTabClick("aiTab3")}
              className={activeTab === "aiTab3" ? "aiActive" : ""}
            >
              Reviews (2)
            </p>
          </div>
        </div>

        <div className="productAdditionalInfoContent">
          {/* Tab 1 - Overview */}
          {activeTab === "aiTab1" && (
            <div className="aiTabDescription">
              <div className="descriptionPara">
                <h3>Performance, Comfort & Safety</h3>
                <p>
                  Experience the power and precision of the all-new 2024 TurboDrive GT, crafted for speed lovers and comfort seekers. Featuring enhanced aerodynamics, a twin-turbo V6 engine, and smart cabin tech, it delivers thrilling performance without compromising fuel efficiency. Ideal for city and highway cruising, it's the perfect blend of elegance and muscle.
                </p>
              </div>
              <div className="descriptionParaGrid">
                <div className="descriptionPara">
                  <h3>Why Choose This Car?</h3>
                  <ul>
                    <li>Turbocharged V6 with 400hp</li>
                    <li>Adaptive cruise control and lane assist</li>
                    <li>Premium leather interior and panoramic sunroof</li>
                    <li>Wireless CarPlay and Android Auto</li>
                  </ul>
                </div>
                <div className="descriptionPara">
                  <h3>Included Features</h3>
                  <ol>
                    <li>Automatic climate control</li>
                    <li>Hands-free tailgate</li>
                    <li>12-speaker surround sound system</li>
                  </ol>
                </div>
              </div>
              <div className="descriptionPara">
                <h3>Warranty</h3>
                <p style={{ marginTop: "-10px" }}>
                  5 Years / 100,000 km (whichever comes first)
                </p>
              </div>
            </div>
          )}

          {/* Tab 2 - Specifications */}
          {activeTab === "aiTab2" && (
            <div className="aiTabAdditionalInfo">
              <div className="additionalInfoContainer">
                <h6>Engine</h6>
                <p>3.0L Twin-Turbocharged V6</p>
              </div>
              <div className="additionalInfoContainer">
                <h6>Horsepower</h6>
                <p>400 HP @ 6,000 RPM</p>
              </div>
              <div className="additionalInfoContainer">
                <h6>Transmission</h6>
                <p>8-Speed Automatic with Paddle Shifters</p>
              </div>
              <div className="additionalInfoContainer">
                <h6>Fuel Efficiency</h6>
                <p>12.5 km/L (city), 15.3 km/L (highway)</p>
              </div>
              <div className="additionalInfoContainer">
                <h6>Dimensions</h6>
                <p>Length: 4800mm, Width: 1900mm, Height: 1450mm</p>
              </div>
              <div className="additionalInfoContainer">
                <h6>Weight</h6>
                <p>1,750 kg</p>
              </div>
            </div>
          )}

          {/* Tab 3 - Reviews */}
          {activeTab === "aiTab3" && (
            <div className="aiTabReview">
              <div className="aiTabReviewContainer">
                <h3>Reviews</h3>
                <div className="userReviews">
                  {/* Review 1 */}
                  <div
                    className="userReview"
                    style={{ borderBottom: "1px solid #e4e4e4" }}
                  >
                    <div className="userReviewImg">
                      <img src={user1} alt="" />
                    </div>
                    <div className="userReviewContent">
                      <div className="userReviewTopContent">
                        <div className="userNameRating">
                          <h6>Deen Ramah</h6>
                          <div className="userRating">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} color="#FEC78A" size={10} />
                            ))}
                          </div>
                        </div>
                        <div className="userDate">
                          <p>March 10, 2025</p>
                        </div>
                      </div>
                      <div
                        className="userReviewBottomContent"
                        style={{ marginBottom: "30px" }}
                      >
                        <p>
                          Absolutely love the TurboDrive! It’s smooth, responsive, and has the latest tech. Worth every coin!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Review 2 */}
                  <div className="userReview">
                    <div className="userReviewImg">
                      <img src={user2} alt="" />
                    </div>
                    <div className="userReviewContent">
                      <div className="userReviewTopContent">
                        <div className="userNameRating">
                          <h6>Brian Kibet</h6>
                          <div className="userRating">
                            {[...Array(4)].map((_, i) => (
                              <FaStar key={i} color="#FEC78A" size={10} />
                            ))}
                          </div>
                        </div>
                        <div className="userDate">
                          <p>March 22, 2025</p>
                        </div>
                      </div>
                      <div className="userReviewBottomContent">
                        <p>
                          Great ride and very quiet inside. The fuel economy could be better, but overall amazing quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Leave a Review */}
                <div className="userNewReview">
                  <div className="userNewReviewMessage">
                    <h5>Be the first to review “TurboDrive GT 2024”</h5>
                    <p>Your email address will not be published. Required fields are marked *</p>
                  </div>
                  <div className="userNewReviewRating">
                    <label>Your rating *</label>
                    <Rating name="simple-controlled" size="small" />
                  </div>
                  <div className="userNewReviewForm">
                    <form>
                      <textarea cols={30} rows={8} placeholder="Your Review" />
                      <input
                        type="text"
                        placeholder="Name *"
                        required
                        className="userNewReviewFormInput"
                      />
                      <input
                        type="email"
                        placeholder="Email address *"
                        required
                        className="userNewReviewFormInput"
                      />
                      <div className="userNewReviewFormCheck">
                        <label>
                          <input type="checkbox" />
                          Save my info for next time.
                        </label>
                      </div>
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;

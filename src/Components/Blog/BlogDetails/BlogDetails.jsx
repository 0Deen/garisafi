import React from "react";

import "./BlogDetails.css";

import blogdetail1 from "../../../Assets/Blog/blogDetail1.jpg";
import blogimage1 from "../../../Assets/Blog/blogDetail2.jpg";
import blogimage2 from "../../../Assets/Blog/blogDetail3.jpg";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const BlogDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="blogDetailsSection">
        <div className="blogDetailsSectionContainer">
          <div className="blogDetailsHeading">
            <h2>5 Smart Tips to Help You Buy Your Dream Car</h2>
            <div className="blogDetailsMetaData">
              <span>by Deen Car Show</span>
              <span>July 30, 2025</span>
              <span>Car Buying Tips</span>
            </div>
          </div>
          <div className="blogDetailsFeaturedImg">
            <img src={blogdetail1} alt="" />
          </div>
          <div className="blogDetailsContent">
            <p>
              Buying a car is a big deal — whether it’s your first ride or an upgrade.
              At Deen Car Show, we’re here to make it easy. From understanding your budget
              to knowing what to look for during a test drive, this guide breaks down
              what every smart car buyer needs to know.
            </p>
            <h5>Understand What You Really Need</h5>
            <p>
              Don’t just go for the flashiest model — think about your daily life.
              Do you need more space for family? Better fuel efficiency? A powerful engine?
              This will guide your decision more than the color or brand ever could.
            </p>
            <div className="blogDetailsContentBullets">
              <div className="blogDetailsContentBulletscontent">
                <h5>Why buy from Deen Car Show?</h5>
                <p>
                  <ul>
                    <li>Handpicked, certified cars with full history</li>
                    <li>Flexible payment plans and trade-ins welcome</li>
                    <li>Nationwide delivery and test drive options</li>
                  </ul>
                </p>
              </div>
              <div className="blogDetailsContentBulletscontent">
                <h5>Top 3 Buying Tips</h5>
                <p>
                  <ol>
                    <li>Set a budget and stick to it</li>
                    <li>Check for verified car history and mileage</li>
                    <li>Take a proper test drive — feel the ride</li>
                  </ol>
                </p>
              </div>
            </div>
            <p>
              We believe everyone deserves a fair deal and a reliable car. Our team works
              day and night to inspect, list, and deliver only the best pre-owned and new models.
              Join thousands who found their perfect car with us — confidently.
            </p>
          </div>
          <div className="blogDetailsContentImg">
            <img src={blogimage1} alt="" />
            <img src={blogimage2} alt="" />
          </div>
          <div className="blogDetailsContent">
            <p>
              Ready to roll? Whether you’re hunting for a sporty coupe, a rugged SUV, or a fuel-saving hybrid,
              Deen Car Show has something for you. We bring variety, reliability, and a team that actually listens.
            </p>
            <p>
              Your dream car is closer than you think — with transparent pricing,
              easy financing, and a smooth process from search to delivery.
              It’s time to ride with confidence.
            </p>
          </div>
          <div className="share-buttons">
            <button className="share-button facebook">
              <FaFacebookF /> Share on Facebook
            </button>
            <button className="share-button twitter">
              <FaXTwitter />
              Share on Twitter
            </button>
            <button className="share-button pinterest">
              <FaPinterest /> Share on Pinterest
            </button>
            <button className="share-button more">
              <FaPlus size={20} />
            </button>
          </div>
          <div className="blogDetailsNextPrev">
            <div className="blogDetailsNextPrevContainer">
              <div
                className="blogDetailsNextPrevContainerIcon"
                onClick={scrollToTop}
              >
                <GoChevronLeft size={20} />
                <p>PREVIOUS POST</p>
              </div>
              <p>How to Trade In Your Old Car for Maximum Value</p>
            </div>
            <div className="blogDetailsNextPrevContainer">
              <div
                className="blogDetailsNextPrevContainerIcon2"
                onClick={scrollToTop}
              >
                <p>NEXT POST</p>
                <GoChevronRight size={20} />
              </div>
              <p style={{ textAlign: "right" }}>
                Best Family Cars of 2025 — Top 5 You Should Test Drive
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;

import React from "react";
import "./AboutPage.css";

import about1 from "../../Assets/About/about-1.jpg";
import about2 from "../../Assets/About/about-2.jpg";

import Services from "../../Components/Home/Services/Services";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import brand1 from "../../Assets/Brands/brand1.png";
import brand2 from "../../Assets/Brands/brand2.png";
import brand3 from "../../Assets/Brands/brand3.png";
import brand4 from "../../Assets/Brands/brand4.png";
import brand5 from "../../Assets/Brands/brand5.png";
import brand6 from "../../Assets/Brands/brand6.png";
import brand7 from "../../Assets/Brands/brand7.png";

const AboutPage = () => {
  return (
    <>
      <div className="aboutSection">
        <h2>About Deen Car Show</h2>
        <img src={about1} alt="" />
        <div className="aboutContent">
          <h3>Our Story</h3>
          <h4>
           Born from a passion for cars and a frustration with the traditional
           car-buying experience,our platform was created to make buying 
           and selling cars easier, safer, and more transparent.
          </h4>
          <p>
           We started with one goal: to connect real people to
           real cars, without the hassle. What began as a small
           project has grown into a trusted hub where thousands
           come to find their next ride. From sleek sedans to rugged SUVs,
           we’ve built a place where quality meets convenience.
          </p>
          <div className="content1">
            <div className="contentBox">
              <h5>Our Mission</h5>
              <p>
                             To be the most trusted and user-friendly car
               marketplace in the region — a digital showroom
               where every buyer finds confidence, and every seller finds value.
              </p>
            </div>
            <div className="contentBox">
              <h5>Our Vision</h5>
              <p>
              To simplify the car ownership journey by providing a seamless
              platform that offers verified listings, honest pricing,
              and helpful support from start to finish. We’re here to put
              you in the driver’s seat — fast, fair, and stress-free.
              </p>
            </div>
          </div>
          <div className="content2">
            <div className="imgContent">
              <img src={about2} alt="" />
            </div>
            <div className="textContent">
              <h5>The Company</h5>
              <p>
              We’re not just a car platform — we’re a movement redefining
              how people buy and sell cars. Built with simplicity, trust,
              and speed at its core, our company blends technology with human
              connection to give you full control over your car journey. Whether
              you're upgrading, downsizing, or buying your very first ride, we’re
              here to make it seamless. Backed by industry experts and a growing
              community of happy users, we’re the company that puts you first — always.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <div className="companyPartners">
        <h5>Company Partners</h5>
        <Swiper
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },

            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand6} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand7} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default AboutPage;

import React from "react";
import "./Feature.css";
import House1 from "../../assets/house1.jpg";
import Bad1 from "../../assets/bed1.jpg";
import Bad2 from "../../assets/bed2.jpg";
import Kitchen from "../../assets/kitchen.jpg";
import Bathroom from "../../assets/bath1.jpg";

import House2 from "../../assets/house2.jpg";
import Bed3 from "../../assets/bed3.jpg";
import Bed4 from "../../assets/bed4.jpg";
import Bathroom2 from "../../assets/bath2.jpg";
import Livingroom from "../../assets/living-room.jpg";

const Feature = () => {
  return (
    <div className="featured">
      <h1 className="featured-text">Top Rated Listings</h1>
      <p className="  featured-text">
        Selected Listings by City, State, and Zip based on views.
      </p>
      <div className="container">
        <img className="span-3 image-grid-row-2" src={House1} alt="" />
        <img src={Bad1} alt="" />
        <img src={Bad2} alt="" />
        <img src={Kitchen} alt="" />
        <img src={Bathroom} alt="" />
        <div className="span-3 img-details">
          <div className="top">
            <h2>123 Acme St. Dallas, TX</h2>
            <p>House for sale</p>
            <p className="price">$2,667,000</p>
          </div>
          <div className="info-grid">
            <div className="info">
              <p className="bold">Bedrooms:</p>
              <p>5</p>
            </div>
            <div className="info">
              <p className="bold">Bathrooms:</p>
              <p>3</p>
            </div>
            <div className="info">
              <p className="bold">Square Feets:</p>
              <p>8,138</p>
            </div>
            <div className="info">
              <p className="bold">Est Payment:</p>
              <p>$14,797/month</p>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>
            A beautiful modern day home in the city with a full-size pool.A
            beautiful modern day home in the city with a full-size pool.
          </p>
          <button className="btn">View List</button>
        </div>
      </div>
      {/* Section section */}
      <div className="container">
        <img className="order-2" src={Bed3} alt="" />
        <img className="order-3" src={Bed4} alt="" />

        <img className="span-3 image-grid-row-2 order-1" src={House2} alt="" />

        <img className="order-4" src={Bathroom2} alt="" />
        <img className="order-5" src={Livingroom} alt="" />

        <div className="span-2 right-img-details order-7">
          <p>
            A beautiful modern day home in the city with a full-size pool.A
            beautiful modern day home in the city with a full-size pool.
          </p>
          <button className="btn">View List</button>
        </div>

        <div className="span-3 img-details order-6">
          <div className="top">
            <h2>123 Acme St. Dallas, TX</h2>
            <p>House for sale</p>
            <p className="price">$2,667,000</p>
          </div>
          <div className="info-grid">
            <div className="info">
              <p className="bold">Bedrooms:</p>
              <p>5</p>
            </div>
            <div className="info">
              <p className="bold">Bathrooms:</p>
              <p>4</p>
            </div>
            <div className="info">
              <p className="bold">Square Feets:</p>
              <p>8,138</p>
            </div>
            <div className="info">
              <p className="bold">Est Payment:</p>
              <p>$14,797/month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;

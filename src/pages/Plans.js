import React from 'react';
import '../Styles/Plans.css';
import heroVideo from '../assets/images/v.mp4';


import Basic from "../assets/images/Basic.png";
import Medium from "../assets/images/Medium.png";
import stand from "../assets/images/stand.png";
import pre from "../assets/images/pre.png";
import delux from "../assets/images/Delux.png";
import elite from "../assets/images/elite.png";

const PricingPlans = () => {
  return (
    <>


     <section className="hero-wrapper">
            <div className="hero-content">
              <div className="hero-text">
                <h2 className="hero-heading">Plans</h2>
                <p className="hero-breadcrumb">
                  Home <span className="divider">/</span>{' '}
                  <span className="current-page">Plans</span>
                </p>
              </div>
              <div className="hero-media">
                <video
                  className="hero-video"
                  src={heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </section>



    <div class="pricing-section">
    <h3>Our Plans</h3>
    <h2>The Best Price just For You</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  
    <div class="pricing-container">

      <div class="pricing-card basic">
       
        <img src={Basic} alt="SEO" />
        <button class="contact-btn basic-btn">Contact US</button>
      </div>
  
      <div class="pricing-card medium">
      <img src={Medium} alt="SEO" />
        <button class="contact-btn medium-btn">Contact US</button>
      </div>
  
      <div class="pricing-card standard">
      <img src={stand} alt="SEO" />
        <button class="contact-btn standard-btn">Contact US</button>
      </div>


      <div class="pricing-card pre">
      <img src={pre} alt="SEO" />
        <button class="contact-btn pre-btn">Contact US</button>
      </div>

      <div class="pricing-card delux">
      <img src={delux} alt="SEO" />
        <button class="contact-btn delux-btn">Contact US</button>
      </div>

      <div class="pricing-card elite">
      <img src={elite} alt="SEO" />
        <button class="contact-btn elite-btn">Contact US</button>
      </div>
    </div>
</div>






<div className="mailing-container">
  {/* Heading */}
  <h2 className="mailing-heading">Join Our Mailing List</h2>

  {/* Subtext */}
  <p className="mailing-subtext">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy text ever.
  </p>

  {/* Form Container */}
  <div className="mailing-form">
    {/* Input Field */}
    <input type="email" placeholder="Enter your mail" className="mailing-input" />

    {/* Button */}
    <button className="mailing-button">Get Started</button>
  </div>
</div>
  </>
  
  );
};

export default PricingPlans;

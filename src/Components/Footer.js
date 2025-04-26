import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import logo from "../assets/images/advoize.png"; // Adjust the path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-section">
          <img src={logo} alt="Advoize Logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.
          </p>
          <div className="email-subscription">
  <label className="email-label">Your Email</label>
  <div className="email-box">
    <input type="email" placeholder="Enter Your Email" />
    <button>Sign Up</button>
  </div>
</div>



          <div className="social-icons">
          <FaYoutube />

            <FaInstagram />
            <FaFacebookF />
            <FaLinkedin />
          </div>
        </div>

        <div className="footer-section services-section">
          <div className="service">
  <h3>Service</h3>
  </div>
  <ul>
    <li><IoIosArrowForward className="arrow-icon" /> Web Development</li>
    <li><IoIosArrowForward className="arrow-icon" /> Branding</li>
    <li><IoIosArrowForward className="arrow-icon" /> Digital Marketing</li>
    <li><IoIosArrowForward className="arrow-icon" /> SEO</li>
    <li><IoIosArrowForward className="arrow-icon" /> App Design</li>
    <li><IoIosArrowForward className="arrow-icon" /> App Development</li>
    <li><IoIosArrowForward className="arrow-icon" /> Graphic Design</li>
    <li><IoIosArrowForward className="arrow-icon" /> Video Editing</li>
  </ul>
</div>

<div className="footer-section company-section">
  <h3>Company</h3>
  <ul>
    <li><IoIosArrowForward className="arrow-icon" /> Home</li>
    <li><IoIosArrowForward className="arrow-icon" /> About Us</li>
    <li><IoIosArrowForward className="arrow-icon" /> Services</li>
    <li><IoIosArrowForward className="arrow-icon" /> Plans</li>
    <li><IoIosArrowForward className="arrow-icon" /> Profile</li>
    <li><IoIosArrowForward className="arrow-icon" /> Contact Us</li>
  </ul>
</div>


        {/* Right Section - Location Map */}
        <div className="map-container">
          <h3>Location Map</h3>
          <iframe
            src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
          ></iframe>
        </div>
        
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="email">Copyright by <span>ADVOIZE</span></p>
        <p>   <FaMapMarkerAlt /> PRAJAY PRINCETION TOWERS<br></br>#502,5th Floor,500035 Lb Nagar,<br></br>Hyderabad, India</p>
        <p className="email"> <FaEnvelope /> enquiry@advoize.com   <FaPhoneAlt /> +91 8247547854 , +91 6309748979</p>
      </div>
    </footer>
  );
};

export default Footer;
 
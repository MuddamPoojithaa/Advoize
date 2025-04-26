import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import heroVideo from '../assets/images/v.mp4';
import mapImage from "../assets/images/mp.png"; // Adjust the path
import '../Styles/Contact.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

const contact = () => {
  return (
    <>
      
      <section className="hero-wrapper">
             <div className="hero-content">
               <div className="hero-text">
                 <h2 className="hero-heading"> Let’s talk to us</h2>
                 <p className="aboutcontent">
                
               Homes / Contact us
                 
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
     
           <div className="contactus-container">
      <div className="contactus-left">
        <h2 className="contactus-heading">Connect with us</h2>
        <p className="contactus-text">
          For all other enquiries, please complete this form and one of the team will be in touch.
        </p>

        <div className="contactus-emailbox">
          <div className="contactus-email">
            <span className="email-icon">✉️</span>
            <span className="email-text">advoize.com</span>
          </div>
        </div>

        <p className="contactus-availability">
          We’re available from 09 am – 7 pm EST, 06 days a week.
        </p>
      </div>

      <div className="contactus-right">
        <h2 className="contactus-heading">Send us a message</h2>
        <form className="contactus-form">
          <div className="contactus-form-row">

          <div className="editable-field" contenteditable="true" placeholder="Your Name :" required></div>
          <div className="editable-field" contenteditable="true" placeholder="Email :" required></div>
          </div>

          <div className="editable-field" contenteditable="true" placeholder="Your Phone Number:" required></div>
          <div className="editable-field" contenteditable="true" placeholder="Type Your Subject:" required></div>
          <textarea placeholder="Type Your Message..." rows="5" required></textarea>

          <button type="submit" className="contactus-button">Send Message</button>
        </form>
      </div>
    </div>


    <div className="contactinfo-container">
      <div className="contactinfo-box">
        <div className="contactinfo-item">
          <span className="contactinfo-icon"><FaMapMarkerAlt /></span>
          <div className="contactinfo-text">
            Hyderabad Lb Nagar Prajay Towers<br />5th Floor 502 Office
          </div>
        </div>

        <div className="contactinfo-divider"></div>

        <div className="contactinfo-item">
          <span className="contactinfo-icon"><FaPhoneAlt /> </span>
          <div className="contactinfo-text">
            +91 9346579702, 9346579702
          </div>
        </div>

        <div className="contactinfo-divider"></div>

        <div className="contactinfo-item">
          <span className="contactinfo-icon"> <FaEnvelope /> </span>
          <div className="contactinfo-text">
            Advoize@gmail.com
          </div>
        </div>
      </div>
    </div>


  <div className="google-map-wrapper">
  <h2 className="google-map-title">Find Us on Google Maps</h2>
  
  <div className="google-map-box">
    <button
      className="google-map-btn"
      onClick={() => window.open('https://goo.gl/maps/yourlink', '_blank')}
    >
      CLICK HERE
    </button>

    <img src={mapImage} alt="Google Map Location" className="google-map-img" />
  </div>
</div>


    </>
  );
};

export default contact;

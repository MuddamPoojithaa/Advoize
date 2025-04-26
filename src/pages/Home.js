import React, { useEffect } from "react";

import illustration from "../assets/images/team-talk 1.png";
import service1 from "../assets/images/Symbol (1).png";
import service2 from "../assets/images/Symbol (2).png";
import service3 from "../assets/images/Symbol (3).png";
import service from "../assets/images/Symbol.png";
import s9 from "../assets/images/s (9).png";
import s8 from "../assets/images/s (8).png";
import s7 from "../assets/images/s (7).png";
import s6 from "../assets/images/s (6).png";
import s5 from "../assets/images/s (5).png";
import s4 from "../assets/images/s (4).png";
import s3 from "../assets/images/s (3).png";
import s2 from "../assets/images/s (2).png";
import s1 from "../assets/images/s (1).png";
import client from "../assets/images/clients.png";
import client2 from "../assets/images/Symbol.png";
import p from "../assets/images/p.png";
import p1 from "../assets/images/p (1).png";
import p2 from "../assets/images/p (3).png";
import p3 from "../assets/images/p (4).png";
import "../Styles/Home.css";
import "../Styles/Navbar.css";

import "../Styles/Footer.css";
const Home = () => {
  
  useEffect(() => {
    const scrollContainer = document.querySelector(".scrolling-categories");
    let scrollAmount = 0;

    function scrollCategories() {
      scrollAmount += 2;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
    }

    const interval = setInterval(scrollCategories, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Main Section */}
      <div className="content-wrapper">
        <div className="text-content">
          <h3 className="welcome-text">WELCOME TO ADVOIZE</h3>
          <h1 className="main-heading">BEST DIGITAL MARKETING</h1>
          <p className="description">
            From enhancing brand visibility to driving targeted traffic and maximizing <br />
            conversions, we've got you covered.
          </p>
          <div class="button-group">
  <button class="btn red-btn"><span>Read More →</span></button>
  <button class="btn gray-btn"><span>Free Quote →</span></button>
</div>

        </div>
        <div className="image-container">
          <img src={illustration} alt="Marketing" />
        </div>
      </div>
      
      {/* Scrolling Categories */}
      <div className="category-container">
        <div className="scrolling-categories">
          <span>Website Development</span>
          <span>Website Design</span>
          <span>App Design</span>
          <span>Graphic Design</span>
          <span>Quality Designs</span>
          <span>Creative</span>
          <span>Design</span>
          <span>Best Quality</span>
          <span>Branding</span>
        </div>
      </div>
      
      
      <div className="who-we-are">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-description">
          We work with clients large and small across a variety of industries. Our clients keep coming back because they trust us to make strategic recommendations rooted in research, experience, innovation, and creativity. Additionally, we know that talent and tools are not enough to deliver an outstanding agency experience. Instead, building strong relationships drives us. We don’t just want to be your agency – we want to be part of your team.
        </p>
        <div className="features-container">
          <div className="feature-box"><img src={service} alt="Quality Services" /><h3>Quality <strong>Services</strong></h3></div>
          <div className="feature-box"><img src={service1} alt="Creative Designers" /><h3>Creative <strong>Designers</strong></h3></div>
          <div className="feature-box"><img src={service2} alt="Free Consultation" /><h3>Free <strong>Consultation</strong></h3></div>
          <div className="feature-box"><img src={service3} alt="Customer Support" /><h3>Customer <strong>Support</strong></h3></div>
        </div>
      </div>
      
      
    
      <div className="services-section">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <h2 className="heading">We Provide The <span className="highlight">Best Service For You</span></h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="services-container">
          <div className="service-box  slide-left ">
            <img src={s9} alt="Digital Marketing" />
            <h3>Digital Marketing</h3>
            <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            <a href="#">Read More →</a>
          </div>
          <div className="service-box slide-left">
            <img src={s8} alt="SEO" />
            <h3>SEO</h3>
            <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            <a href="#">Read More →</a>
          </div>
          <div className="service-box slide-left">
            <img src={s7} alt="Marketing" />
            <h3>Marketing</h3>
            <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            <a href="#">Read More →</a>
          </div>
          <div className="service-box slide-right">
            <img src={s6} alt="Web Design" />
            <h3>Web Design</h3>
            <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            <a href="#">Read More →</a>
          </div>
          <div className="service-box slide-right">
            <img src={s5} alt="Web Design" />
            <h3>Web Design</h3>
            <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            <a href="#">Read More →</a>
          </div>
          <div className="service-box slide-right">
            <img src={s4} alt="Web Design" />
            <h3>Web Design</h3>
            <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            <a href="#">Read More →</a>
          </div>
          <div className="service-box slide-left">
            <img src={s3} alt="Web Design" />
            <h3>Web Design</h3>
            <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            <a href="#">Read More →</a>
          </div>
          <div className="service-box slide-left">
            <img src={s2} alt="Web Design" />
            <h3>Web Design</h3>
            <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            <a href="#">Read More →</a>
          </div>
          <div className="service-box slide-left">
            <img src={s1} alt="Web Design" />
            <h3>Web Design</h3>
            <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            <a href="#">Read More →</a>
          </div>
        </div>
      </div>


     
     
      <div className="choose-us-section">
  <div className="choose-us-header">
    <h2>Why Choose Us</h2>
    <p>
      We create experiences that change the way people interact with brands. 
      With top-notch designs, skilled marketers, and expert project managers, 
      we ensure the highest quality work to satisfy our clients.
    </p>
  </div>

  <div className="choose-us-stats">
    <div className="stat-box">
      <span className="stat-icon"> <img src={client} alt="Happy Clients" /></span>
      <h3>50</h3>
      <p>Happy Clients</p>
    </div>
    
    <div className="stat-box">
      <span className="stat-icon"> <img src={client2} alt="Projects Done" /></span>
      <h3>68</h3>
      <p>Projects Done</p>
    </div>
  </div>

  {/* <button class="explore-btn"><span>Explore More →</span></button> */}
</div>

<section class="works-section">
  <div class="works-header">
    <div class="works-header-left">
      <span class="section-label">Our Projects</span>
      <h2>Project We Have Done</h2>
    </div>
    <div class="works-header-right">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's
      </p>
      <button class="explore-btn"><span>View All Projects</span></button>
    </div>
  </div>

  <div class="works-container">
    <div class="work-box overlay">
      <img src={p} alt="Happy Clients" />
      <div class="overlay-details">
        <h3>Web Development</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
    <div class="work-box overlay">
      <img src={p1} alt="Happy Clients" />
      <div class="overlay-details">
        <h3>Web Development</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
    <div class="work-box overlay">
      <img src={p2} alt="Happy Clients" />
      <div class="overlay-details">
        <h3>Web Development</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
    <div class="work-box overlay">
      <img src={p3} alt="Happy Clients" />
      <div class="overlay-details">
        <h3>Web Development</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
  </div>
</section>

<div className="contact-form-container">
  <h2>Know About Us</h2>
  <p>
    Welcome to Advoize Technologies. We’re delighted to assist you in realizing your
    digital ambitions and guiding you through the dynamic landscape of the online world.
  </p>

  <form>
    <div className="form-grid">
      <input type="text" placeholder="Your Name" className="form-input" />
      <input type="email" placeholder="Your Email" className="form-input" />
      <input type="tel" placeholder="Your Mobile" className="form-input" />
      <select className="form-input">
        <option>Services</option>
        <option>Web Development</option>
        <option>SEO Optimization</option>
        <option>Digital Marketing</option>
      </select>
    </div>

    <textarea placeholder="Special Note" className="form-input textarea"></textarea>

    <button type="submit" className="submit-btn">Submit</button>
  </form>
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




















      
    </div>
  );
};

export default Home;

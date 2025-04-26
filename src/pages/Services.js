import React, { useEffect } from "react";
import '../Styles/Services.css';
import heroVideo from '../assets/images/v.mp4';
import d from '../assets/images/d.png';
import M from '../assets/images/M.png';
import s from '../assets/images/s.png';
import w from '../assets/images/w.png';
import dev from '../assets/images/dev.png';
import app from '../assets/images/app.png';
import app1 from '../assets/images/app1.png';
import gr from '../assets/images/gr.png';
import video from '../assets/images/video.png';
import { Link } from "react-router-dom";


const SectionHero = () => {
  const handleClick = (id) => {
    // Toggle service content
    const sections = document.querySelectorAll('.service-details');
    sections.forEach(section => section.classList.remove('active'));

    const target = document.getElementById(id);
    if (target) {
      target.classList.add('active');
    }

    // Toggle active button
    const buttons = document.querySelectorAll('.service-btn');
    buttons.forEach(btn => btn.classList.remove('active-btn'));

    const activeBtn = document.querySelector(`.service-btn[data-target="${id}"]`);
    if (activeBtn) {
      activeBtn.classList.add('active-btn');
    }
  };

  useEffect(() => {
    const buttons = document.querySelectorAll(".service-btn");

    const handleBtnClick = (e) => {
      const targetId = e.currentTarget.getAttribute("data-target");
      handleClick(targetId);
    };

    buttons.forEach(btn => btn.addEventListener("click", handleBtnClick));

    return () => {
      buttons.forEach(btn => btn.removeEventListener("click", handleBtnClick));
    };
  }, []);

  return (
    <>
      {/* Section 1: Hero */}
      <section className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-heading">Services</h2>
            <p className="hero-breadcrumb">
              Home <span className="divider">/</span>{' '}
              <span className="current-page">Services</span>
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

      {/* Section 2: Services Toggle */}
      <section className="service-toggle-section">
        <h3 className="service-toggle-title">Our Services</h3>
        <div className="service-toggle-container">
          <div className="service-list">
            <button className="service-btn active-btn" data-target="digital">Digital Marketing Services</button>
            <button className="service-btn " data-target="seo">SEO Services</button>
            <button className="service-btn" data-target="marketing">Marketing</button>
            <button className="service-btn" data-target="webdesign">Web Design</button>
            <button className="service-btn" data-target="webdev">Web Development</button>
            <button className="service-btn" data-target="appdesign">App Design</button>
            <button className="service-btn" data-target="appdev">App Development</button>
            <button className="service-btn" data-target="graphic">Graphic Designing</button>
            <button className="service-btn" data-target="video">Video Editing</button>
          </div>

          <div className="service-display">
            <div id="digital" className="service-details active">
              <img src={d} alt="Digital" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br>
              </br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <Link to="/DigitalMarketing" style={{ textDecoration: "none" }}>
              <button className="More" data-target="contact">Read More → </button>
              </Link>
            </div>
            <div id="seo" className="service-details">
              <img src={s} alt="SEO" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br>
              </br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <Link to="/Seo" style={{ textDecoration: "none" }}>
              <button className="More" data-target="contact">Read More → </button>
              </Link>
            </div>
            <div id="marketing" className="service-details">
              <img src={M} alt="Marketing" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br>
              </br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <Link to="/Marketing" style={{ textDecoration: "none" }}>
              <button className="More" data-target="contact">Read More → </button>
              </Link>
            </div>
            <div id="webdesign" className="service-details">
              <img src={w} alt="Web Design" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br>
              </br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <Link to="/Webdesign" style={{ textDecoration: "none" }}>
              <button className="More" data-target="contact">Read More → </button>
              </Link>
            </div>
            <div id="webdev" className="service-details">
              <img src={dev} alt="Web Dev" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br>
              </br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <Link to="/Webdevelopment" style={{ textDecoration: "none" }}>
              <button className="More" data-target="contact">Read More → </button>
              </Link>
            </div>
            <div id="appdesign" className="service-details">
              <img src={app} alt="App Design" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br>
              </br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <Link to="/Appdesign" style={{ textDecoration: "none" }}>
              <button className="More" data-target="contact">Read More → </button>
              </Link>
            </div>
            <div id="appdev" className="service-details">
              <img src={app1} alt="App Dev" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br>
              </br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <Link to="/Appdevelopment" style={{ textDecoration: "none" }}>
              <button className="More" data-target="contact">Read More → </button>
              </Link>
            </div>
            <div id="graphic" className="service-details">
              <img src={gr} alt="Graphic Design" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br>
              </br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <Link to="/GraphicDesign" style={{ textDecoration: "none" }}>
              <button className="More" data-target="contact">Read More → </button>
              </Link>
            </div>
            <div id="video" className="service-details">
              <img src={video} alt="Video Editing" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br>
              </br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br></br></p>
              <Link to="/VideoEditing" style={{ textDecoration: "none" }}>
              <button className="More" data-target="contact">Read More → </button>
              </Link>
            </div>
         
          </div>
        </div>
      </section>



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

export default SectionHero;

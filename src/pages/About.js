import React from 'react';

import heroVideo from '../assets/images/v.mp4';
import '../Styles/About.css'; 
import about from '../assets/images/g.png'; 
import teamImage from '../assets/images/g1.png'; 
import g3 from '../assets/images/g3.png'; 
import g4 from '../assets/images/g4.png'; 
import g5 from '../assets/images/g5.png'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const AboutUs = () => {
  return (
    <>
      
      <section className="hero-wrapper">
             <div className="hero-content">
               <div className="hero-text">
                 <h2 className="hero-heading">About Us</h2>
                 <p className="aboutcontent">
                 Transforming businesses with
                 innovative technology. 
                 
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
     

      <section className="about-next-section">
  <div className="about-text animate-top">
  <div className="team-subtitle-box">
        <span className="team-line"></span>
        <h3 className="section-subtitle">About Us</h3>
      </div>
    <h1 className="about-us-title">
      Explore Our Services<br />
      And Boost Your Online Presence
    </h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s 
    </p>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry...
    </p>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry...
    </p>
    <button class="get-started-btn"><span>Get Started</span></button>

  </div>

  <div className="about-image-container animate-left">
    <div className="circle-border">
      <img src={about} alt="About Us" className="about-image" />
    </div>
    <div className="experience-badge">
      <h3>16+</h3>
      <span>Years Of<br />Experience</span>
    </div>
    <div className="vertical-text">
    <div className="team-subtitle-box">
        <span className="team-line"></span>
        <h3 className="section-subtitle"> WHO WE ARE</h3>
      </div></div>
  </div>
</section>



<section className="why-choose-section">
<div className="why-right">
        <div className="image-wrapper">
          <img src={teamImage} alt="Team Working" />
     
     
        </div>
      </div>
      <div className="why-left">
        <h2>Why Choose Us?</h2>
        <p className="subheading">
          As a trusted partner, we provide insights-based solutions to help businesses grow and achieve their goals effectively.
        </p>

        <div className="choose-item">
          <div className="icon"> <img src={g3} /> </div>
          <div>
            <h4>Expertise and Experience</h4>
            <p>Our team has years of expertise in digital marketing, web development, and branding to deliver optimal solutions for your business.</p>
          </div>
        </div>

        <div className="choose-item">
          <div className="icon"><img src={g4} /></div>
          <div>
            <h4>Customized Solutions</h4>
            <p>We tailor strategies to address specific business challenges, ensuring maximum effectiveness.</p>
          </div>
        </div>

        <div className="choose-item">
          <div className="icon"><img src={g5} /></div>
          <div>
            <h4>Commitment to Quality</h4>
            <p>We are dedicated to delivering quality from start to finish, exceeding client expectations on every project.</p>
          </div>
        </div>

        <div className="choose-item">
          <div className="icon"><img src={g3} /></div>
          <div>
            <h4>Innovative Technology</h4>
            <p>We use the latest tools and technology to keep your brand ahead of the competition.</p>
          </div>
        </div>

        <button className="choose-btn">Get Started Now</button>
      </div>

     
    </section>



    <section class="work-process-section">
  <p class="process-subtitle">Work Process</p>
  <h2 class="process-title">Our Work Process</h2>
  <p class="process-description">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
  </p>

  <div class="process-steps">
    <div class="step">
      <div class="step-circle step1">01</div>
      <h4>Research</h4>
      <p>Branding can change how people perceive your brand, it can drive new</p>
    </div>
    <div class="step">
      <div class="step-circle step2">02</div>
      <h4>Idea</h4>
      <p>Branding is absolutely critical to a business because</p>
    </div>
    <div class="step">
      <div class="step-circle step3">03</div>
      <h4>Develop</h4>
      <p>Let’s imagine an e-commerce startup—we’ll call</p>
    </div>
    <div class="step">
      <div class="step-circle step4">04</div>
      <h4>Launch</h4>
      <p>Let’s imagine an e-commerce startup—we’ll call</p>
    </div>
  </div>
</section>

<section className="team-section">
  <div className="team-header-flex">
    <div className="team-header-left">
      <div className="team-subtitle-box">
        <span className="team-line"></span>
        <h3 className="section-subtitle">Our Team</h3>
      </div>
      <h2 className="section-title">Meet Our Team Of Professionals.</h2>
      <p className="section-desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever.
      </p>
    </div>
    <div className="team-header-right">
      <button className="all-members-btn">
        <span className="btn-red">All Members</span>
        <span className="btn-icon">
          <i className="fas fa-arrow-right"></i>
        </span>
      </button>
    </div>
  </div>

  <div className="team-members">
    <div className="team-card">
      <img src={require('../assets/images/Group 151.png')} alt="Team Member 1" className="team-img" />
      <div className="team-overlay">
        <h3 className="team-role">Web Development</h3>
        <p className="team-name">Naga</p>
        <div className="team-socials">
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>

    <div className="team-card">
      <img src={require('../assets/images/Group 152.png')} alt="Team Member 2" className="team-img" />
      <div className="team-overlay">
        <h3 className="team-role">UI/UX Designer</h3>
        <p className="team-name">Sana</p>
        <div className="team-socials">
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>

    <div className="team-card">
      <img src={require('../assets/images/Group 153.png')} alt="Team Member 3" className="team-img" />
      <div className="team-overlay">
        <h3 className="team-role">Project Manager</h3>
        <p className="team-name">Ravi</p>
        <div className="team-socials">
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>


    <div className="team-card">
      <img src={require('../assets/images/Group 154.png')} alt="Team Member 4" className="team-img" />
      <div className="team-overlay">
        <h3 className="team-role">Marketing Lead</h3>
        <p className="team-name">Divya</p>
        <div className="team-socials">
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
};

export default AboutUs;

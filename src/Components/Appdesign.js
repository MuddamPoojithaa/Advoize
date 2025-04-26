import React from 'react';

import app from '../assets/images/app.png';
import '../Styles/About.css'; 
import '../Styles/Digital.css'; 
import '../Styles/Seo.css'; 
import heroVideo from '../assets/images/v.mp4';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Appdes = () => {
  return (
    <>

 {/* Section 1: Hero */}
      <section className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-heading">App Design</h2>
            <p className="hero-breadcrumb">
              Home <span className="divider">/</span>{' '}
              <span className="current-page">App Design</span>
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

      <section className="digital-marketing-section">
      <div className="dm-wrapper">
        <div className="dm-text">
          <h2><span className="dm-red-line"></span>APP DESIGN SERVICES</h2>
    
    
          <p>
          If you are seeking a professional mobile app development company in India, you
can trust WebMatriks. Having years of experience has brought us professional
acumen that helps us to provide an array of mobile application services. From the
initial step of app development to continuous maintenance, we manage
everything.
          </p>
          <p>
          With us, you can get your product ready and running in no time. You can share
your app needs and discover a plan to build your dream app. Mobile app
development has made your business smarter and faster. Customers can be
anywhere and through your mobile app, they can easily reach you.
          </p>
          <p>
          Our mobile app development services include developing apps on native or cross-
platform, updating, migration, and ongoing maintenance as and when required.
We deal in custom, iOS, and android app development and more. For any kind of
professional help, you can connect with us and we are sure not to disappoint you.
          </p>
        </div>
        <div className="dm-image">
          <img src={app} alt="Digital Marketing Illustration" />
        </div>
      </div>
    </section>


    <section class="marketing-type-section">
   
  <div class="container">
  <h4>BEST APP DESIGN SERVICES COMPANY IN INDIA </h4>
    <div class="title-group">
      <span class="vertical-bar"></span>
      <div class="title-lines">
   
       
       
        <span class="line-two">APP DESIGN SERVICES</span>
        <span class="line-three">App design services focus on creating visually appealing, intuitive, and high-performing mobile or web applications. A well-designed app enhances user experience (UX) and drives engagement.</span>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-card">
        <h3>UI/UX Design Services</h3>
      <li>User Interface (UI) Design</li>
      <li>User Experience (UX) Design</li>
      <li>Wireframing & Prototyping</li>
      <li>Interactive Prototypes</li>
      <li>Design System & Style Guide</li>
      </div>
      <div class="info-card">
        <h3>Mobile App Design Services</h3>
        <li>iOS App Design</li>
      <li>Android App Design</li>
      
      <li>Cross-Platform Design</li>
      <li>Web App Design</li>
      </div>
      <div class="info-card">
        <h3>Custom App Design Solutions</h3>
        <li>E-commerce Apps</li>
      <li>Healthcare & Fitness Apps</li>
      <li>Education & E-learning Apps </li>
      <li>Social Media & Community Apps</li>
     
      </div>
      <div class="info-card">
        <h3>App Design Tools & Technologies</h3>
        <li>Figma</li>
      <li>Adobe XD</li>
      <li>Photoshop</li>


      </div>
      <div class="info-card">
        <h3>App Usability Testing & Optimization</h3>
        <li>A/B Testing</li>
      <li>User Feedback & Testing</li>
      <li>Performance Optimization</li>
      </div>


      <div class="info-card">
        <h3>Professional App Design</h3>
        <li>Better User Experience (UX)</li>
      <li>Higher Conversion Rates</li>
      <li>Strong Brand Identity</li>
     
      </div>
    </div>
  </div>
</section>





    
</>
  );
};

export default Appdes;

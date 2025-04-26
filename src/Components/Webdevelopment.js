import React from 'react';


import dev from '../assets/images/dev.png';



import '../Styles/About.css'; 
import '../Styles/Digital.css'; 
import '../Styles/Seo.css'; 
import heroVideo from '../assets/images/v.mp4';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Webdev = () => {
  return (
    <>

 {/* Section 1: Hero */}
      <section className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-heading">WebDevelopment</h2>
            <p className="hero-breadcrumb">
              Home <span className="divider">/</span>{' '}
              <span className="current-page">Web Development</span>
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
          <h2><span className="dm-red-line"></span>WEB DEVELOPMENT SERVICES</h2>
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
          <img src={dev} alt="Digital Marketing Illustration" />
        </div>
      </div>
    </section>


    <section class="marketing-type-section">
   
  <div class="container">
  <h4>BEST WEB DEVELOPMENT SERVICES COMPANY IN INDIA </h4>
    <div class="title-group">
      <span class="vertical-bar"></span>
      <div class="title-lines">
   
       
       
        <span class="line-two">WEB DEVELOPMENT SERVICES</span>
        <span class="line-three">we specialize in creating high-quality, scalable, and user-friendly websites tailored to your business needs. Our team of expert developers ensures that your website is not only visually appealing but also functional, responsive, and optimized for performance.</span>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-card">
        <h3>Custom Website Development</h3>
      <li>Custom Website Development</li>
      <li>CMS-Based Development</li>
      <li>eCommerce Development</li>
      <li>Landing Pages</li>

      </div>
      <div class="info-card">
        <h3>Web Application Development</h3>
        <li>Full-Stack Development</li>
      <li>Progressive Web Apps</li>
      
      <li>eCommerce Development</li>
      <li>Single-Page Applications</li>
      </div>
      <div class="info-card">
        <h3>Frontend Development</h3>
        <li>Full-Stack Development</li>
      <li>HTML, CSS, JavaScript Development</li>
      <li>eCommerce Development </li>
      <li>React, Vue.js, Angular</li>
     
      </div>
      <div class="info-card">
        <h3>Backend Development</h3>
        <li>Node.js, Python, PHP, Ruby on Rails</li>
      <li>eCommerce Development</li>
      <li>API Development & Integration</li>


      </div>
      <div class="info-card">
        <h3>Maintenance & Optimization</h3>
        <li>Website Speed Optimization</li>
      <li>Security & Bug Fixes</li>
      <li>Website Migration</li>
      </div>


      <div class="info-card">
        <h3>UI/UX Design Services</h3>
        <li>Wireframing & Prototyping</li>
      <li>HTML, CSS, JavaScript Development</li>
      <li>eCommerce Development</li>
      <li>User Experience (UX) Optimization</li>
      </div>
    </div>
  </div>
</section>





    
</>
  );
};

export default Webdev;

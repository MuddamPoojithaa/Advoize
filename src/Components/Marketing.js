import React from 'react';


import M from '../assets/images/M.png';



import '../Styles/About.css'; 
import '../Styles/Digital.css'; 
import '../Styles/Seo.css'; 
import heroVideo from '../assets/images/v.mp4';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Marketing = () => {
  return (
    <>

 {/* Section 1: Hero */}
      <section className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-heading">Marketing</h2>
            <p className="hero-breadcrumb">
              Home <span className="divider">/</span>{' '}
              <span className="current-page">Marketing</span>
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
          <h2><span className="dm-red-line"></span>MARKETING SERVICES</h2>
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
          <img src={M} alt="Digital Marketing Illustration" />
        </div>
      </div>
    </section>


    <section class="marketing-type-section">
   
  <div class="container">
  <h4>BEST MARKETING SERVICES COMPANY IN INDIA </h4>
    <div class="title-group">
      <span class="vertical-bar"></span>
      <div class="title-lines">
   
       
       
        <span class="line-two">MARKETING SERVICES</span>
        <span class="line-three">Marketing services help businesses increase brand awareness, attract customers, and boost sales. Here’s a breakdown of the key types of marketing services available:</span>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-card">
        <h3>Digital Marketing Services</h3>
      <li>Search Engine Optimization (SEO)</li>
      <li>Pay-Per-Click (PPC) Advertising</li>
      <li>Social Media Marketing (SMM)</li>
      <li>Content Marketing</li>
      <li>Email Marketing</li>
      </div>
      <div class="info-card">
        <h3>Traditional Marketing Services</h3>
        <li>TV & Radio Advertising</li>
      <li>Print Advertising</li>
      
      <li>Billboards & Outdoor Ads</li>
      <li>Direct Mail Campaigns</li>
      </div>
      <div class="info-card">
        <h3>Branding & Strategy</h3>
        <li>Brand Development</li>
      <li>Market Research</li>
      <li>Competitor Analysis</li>
      <li>Public Relations</li>
     
      </div>
      <div class="info-card">
        <h3>E-commerce</h3>
        <li>E-commerce Marketing</li>
      <li>Local SEO & Google My Business Optimization</li>
      <li>Customer Review & Reputation Management</li>


      </div>
      <div class="info-card">
        <h3>Local Business Marketing</h3>
        <li>E-commerce Marketing</li>
      <li>Local SEO & Google My Business Optimization</li>
      <li>Customer Review & Reputation Management</li>
      </div>


      <div class="info-card">
        <h3>Marketing Analytics & Performance Tracking</h3>
        <li>Google Analytics & SEO Tools</li>
      <li>Conversion Rate Optimization</li>
      <li>A/B Testing & Performance Reports</li>
      </div>
    </div>
  </div>
</section>





    
</>
  );
};

export default Marketing;

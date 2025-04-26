import React from 'react';


import s from '../assets/images/s.png';



import '../Styles/About.css'; 
import '../Styles/Digital.css'; 
import '../Styles/Seo.css'; 
import heroVideo from '../assets/images/v.mp4';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Seo = () => {
  return (
    <>

 {/* Section 1: Hero */}
      <section className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-heading">Seo</h2>
            <p className="hero-breadcrumb">
              Home <span className="divider">/</span>{' '}
              <span className="current-page">Seo</span>
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
          <h2><span className="dm-red-line"></span>SEO SERVICES</h2>
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
          <img src={s} alt="Digital Marketing Illustration" />
        </div>
      </div>
    </section>


    <section class="marketing-type-section">
   
  <div class="container">
  <h4>BEST SEO SERVICES COMPANY IN INDIA </h4>
    <div class="title-group">
      <span class="vertical-bar"></span>
      <div class="title-lines">
   
       
       
        <span class="line-two">SEO SERVICES</span>
        <span class="line-three">SEO content is any type of content designed to rank higher on search engines like Google. It combines high-quality writing with keyword optimization, structure, and user experience best practices.</span>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-card">
        <h3>On-Page Seo</h3>
      <li>Keyword Research & Optimization</li>
      <li>Meta Tags (Title, Description, Headers)</li>
      <li>URL Structure Optimization</li>
      <li>Internal Linking</li>
      <li>Image Optimization (Alt Tags, Compression)</li>
      </div>
      <div class="info-card">
        <h3>Off-Page Seo</h3>
        <li>Link Building (Backlinks from Authority Sites)</li>
      <li>Guest Blogging & Outreach</li>
      
      <li>Social Media Signals</li>
      <li>Local Citations & Listings</li>
      </div>
      <div class="info-card">
        <h3>Technical Seo</h3>
        <li>Website Speed Optimization</li>
      <li>Fixing Broken Links & 404 Errors</li>
      <li>XML Sitemap & Robots.txt Optimization</li>
      <li>Structured Data (Schema Markup)</li>
      <li>HTTPS & Security Enhancements</li>
      </div>
      <div class="info-card">
        <h3>Local Seo</h3>
        <li>Google My Business Optimization</li>
      <li>Local Listings & Directories (Yelp, Bing Places)</li>
      <li>Customer Reviews & Ratings Management</li>
      <li>Ratings Management</li>
      </div>
      <div class="info-card">
        <h3>Seo Audits & Reporting</h3>
        <li>Competitor Analysis</li>
      <li>SEO Performance Tracking</li>
      <li>Analytics & Monthly Reports</li>
      </div>
    </div>
  </div>
</section>





    
</>
  );
};

export default Seo;

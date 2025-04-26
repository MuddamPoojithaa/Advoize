import React from 'react';

import gr from '../assets/images/gr.png';
import '../Styles/About.css'; 
import '../Styles/Digital.css'; 
import '../Styles/Seo.css'; 
import heroVideo from '../assets/images/v.mp4';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Graphic = () => {
  return (
    <>

 {/* Section 1: Hero */}
      <section className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-heading">Graphic Designing</h2>
            <p className="hero-breadcrumb">
              Home <span className="divider">/</span>{' '}
              <span className="current-page">Graphic Designing</span>
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
          <h2><span className="dm-red-line"></span>GRAPHIC DESIGNING SERVICES</h2>
    
    
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
          <img src={gr} alt="Digital Marketing Illustration" />
        </div>
      </div>
    </section>


    <section class="marketing-type-section">
   
  <div class="container">
  <h4>BEST GRAPHIC DESIGNING SERVICES COMPANY IN INDIA </h4>
    <div class="title-group">
      <span class="vertical-bar"></span>
      <div class="title-lines">
   
       
       
        <span class="line-two">GRAPHIC DESIGNING SERVICES</span>
        <span class="line-three">Graphic design is the art of combining visuals, typography, and layout to communicate ideas effectively. From branding to marketing materials, graphic design plays a crucial role in shaping the way businesses and individuals convey their message.</span>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-card">
        <h3>Branding & Identity</h3>
      <li>Logo Design</li>
      <li>Brand Guidelines</li>
      <li>Business Cards</li>
      <li>Letterheads & Stationery</li>
     
      </div>
      <div class="info-card">
        <h3>Marketing & Advertising</h3>
        <li>Social Media Graphics</li>
      <li>Brochures & Flyers</li>
      <li>Infographics</li>
      <li>Posters & Banners</li>
      <li>Email Templates</li>
      </div>
      <div class="info-card">
        <h3>Print & Packaging</h3>
        <li>EProduct Packaging</li>
      <li>Labels & Stickers</li>
      <li>Book Covers </li>
      <li>Magazine & Editorial Layouts</li>
     
      </div>
      <div class="info-card">
        <h3>Illustration & Custom Graphics  </h3>
        <li>Vector Illustrations</li>
      <li>Character Design</li>
      <li>Icon Design</li>
      <li>Motion Graphics & Animations</li>

      </div>
      <div class="info-card">
        <h3>Social Media & Digital Content</h3>
        <li>Instagram, Facebook & LinkedIn Posts</li>
      <li>YouTube Thumbnails & Channel Art</li>
      <li>GIFs & Animated Banners</li>
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

export default Graphic;

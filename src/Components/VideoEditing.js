import React from 'react';


import video from '../assets/images/video.png';
import '../Styles/About.css'; 
import '../Styles/Digital.css'; 
import '../Styles/Seo.css'; 
import heroVideo from '../assets/images/v.mp4';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Video = () => {
  return (
    <>

 {/* Section 1: Hero */}
      <section className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-heading">Video Editing</h2>
            <p className="hero-breadcrumb">
              Home <span className="divider">/</span>{' '}
              <span className="current-page">Video Editing</span>
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
          <h2><span className="dm-red-line"></span>VIDEO EDITING SERVICES</h2>
    
    
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
          <img src={video} alt="Digital Marketing Illustration" />
        </div>
      </div>
    </section>


    <section class="marketing-type-section">
   
  <div class="container">
  <h4>BEST VIDEO EDITING SERVICES COMPANY IN INDIA </h4>
    <div class="title-group">
      <span class="vertical-bar"></span>
      <div class="title-lines">
   
       
       
        <span class="line-two">VIDEO EDITING SERVICES</span>
        <span class="line-three">Graphic design is the art of combining visuals, typography, and layout to communicate ideas effectively. From branding to marketing materials, graphic design plays a crucial role in shaping the way businesses and individuals convey their message.</span>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-card">
        <h3>Cinematic Editing</h3>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
     
      </div>
      <div class="info-card">
        <h3>Social Media Videos</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div class="info-card">
        <h3>Corporate & Business Videos</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
     
      </div>
      <div class="info-card">
        <h3>Vlogs & YouTube Content </h3>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

      </div>
      <div class="info-card">
        <h3>Event & Wedding Videos</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>


      <div class="info-card">
        <h3>Motion Graphics & Animations</h3>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
  </div>
</section>





    
</>
  );
};

export default Video;

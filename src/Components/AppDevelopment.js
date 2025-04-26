import React from 'react';

import app1 from '../assets/images/app1.png';
import '../Styles/About.css'; 
import '../Styles/Digital.css'; 
import '../Styles/Seo.css'; 
import heroVideo from '../assets/images/v.mp4';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Appdev = () => {
  return (
    <>

 {/* Section 1: Hero */}
      <section className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-heading">App Development</h2>
            <p className="hero-breadcrumb">
              Home <span className="divider">/</span>{' '}
              <span className="current-page">App Development</span>
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
          <h2><span className="dm-red-line"></span>MOBILE APPLICATION<br></br>DEVELOPMENT SERVICES</h2>
    
    
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
          <img src={app1} alt="Digital Marketing Illustration" />
        </div>
      </div>
    </section>


    <section class="marketing-type-section">
   
  <div class="container">
  <h4>BEST MOBILE APPLICATION SERVICES COMPANY IN INDIA </h4>
    <div class="title-group">
      <span class="vertical-bar"></span>
      <div class="title-lines">
   
       
       
        <span class="line-one">MOBILE APPLICATION </span>
        <span class="line-two">SERVICES</span>

<span class="line-three">We are among the topmost companies engaged in mobile app development with decades of experience and the best industry professionals. Our expertise lies in
developing quality and accurate mobile apps for diverse platforms. Let’s have a look at our mobile application services.</span>

      </div>
    </div>

    <div class="info-grid">
      <div class="info-card">
        <h3>Iphone App Development</h3>
     <p>Our dedicated team includes project
managers, app developers, and testers who
ensure to create a custom iPhone application
for you. We excel in delivering projects timely
while ensuring quality.</p>
      </div>
      <div class="info-card">
        <h3>Android App Development</h3>
        <p>Talking about our forte, Android app
development is indeed there. Owing to our
host of expertise across the Android ecosystem,
we can undertake any project from scratch to
finish and write or rewrite apps.</p>
      </div>
      <div class="info-card">
        <h3>Windows App Development</h3>
        <p>When it comes to windows application
development, we hold specialization. We can
accommodate any size of your need and create
a custom app development for your business
demands.</p>
     
      </div>
      <div class="info-card">
        <h3>Blackberry App Development</h3>
       <p>We specialize in developing blackberry apps
that comes with seamless integration. Be it any
complex project, our professional app
development services can accommodate the
same.</p>

      </div>
      <div class="info-card">
        <h3>Cross-Platform Development</h3>
      <p>As our talent pool is skilled in cross-platform
app development, it can assist you with any
type of app development. If you are looking for
a reliable version of an app, we can surely help
with the same.</p>
      </div>


      <div class="info-card">
        <h3>Custom Mobile App Development</h3>
      <p>If your requirement differs from the above-
stated app development, you need not worry
because we are capable of custom mobile app
development. Our expertise lies in creating a
custom app that works for your business.</p>
     
      </div>
    </div>
  </div>
</section>
<div class="mobile-process-title-group">
  <span class="mobile-vertical-bar"></span>
  <div class="mobile-title-lines">
    <span class="mobile-line-two">MOBILE APPLICATION PROCESS</span>
  </div>
</div>

<div class="mobile-app-process">
  <div class="process-steps-container">
    <div class="process-step-box">Understand your <br></br>requirements</div>
    <div class="process-step-box">Create Prototype</div>
    <div class="process-step-box">Define Elements</div>
    <div class="process-step-box">Refine the<br></br> appearance of <br></br>elements</div>
    <div class="process-step-box">Develop<br></br> Application</div>
    <div class="process-step-box">Beta Release</div>
    <div class="process-step-box">Launch</div>
  </div>
</div>

    
</>
  );
};

export default Appdev;

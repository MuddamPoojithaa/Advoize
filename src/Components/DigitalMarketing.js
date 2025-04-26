import React from 'react';
import di1 from '../assets/images/di (1).png';
import di2 from '../assets/images/di (2).png';
import di3 from '../assets/images/di (3).png';
import di4 from '../assets/images/di (4).png';
import di5 from '../assets/images/di (5).png';
import di6 from '../assets/images/di (6).png';
import di7 from '../assets/images/di (7).png';
import di8 from '../assets/images/di (8).png';
import di9 from '../assets/images/di (9).png';

import d from '../assets/images/d.png';
import '../Styles/About.css'; 
import '../Styles/Digital.css'; 
import heroVideo from '../assets/images/v.mp4';
import '@fortawesome/fontawesome-free/css/all.min.css';

const digital = () => {
  return (
    <>

 {/* Section 1: Hero */}
      <section className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-heading">Digital Marketing</h2>
            <p className="hero-breadcrumb">
              Home <span className="divider">/</span>{' '}
              <span className="current-page">Digital Marketing</span>
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
          <h2><span className="dm-red-line"></span>DIGITAL MARKETING SERVICES</h2>
          <p>
          If you are seeking a professional mobile app development company in India, you can trust WebMatriks. 
            Having years of experience has brought us professional acumen that helps us to provide an array 
            of mobile application services. From the initial step of app development to continuous maintenance, 
            we manage everything.
          </p>
          <p>
          With us, you can get your product ready and running in no time. You can share your app needs and 
            discover a plan to build your dream app. Mobile app development has made your business smarter and 
            faster. Customers can be anywhere and through your mobile app, they can easily reach you.
          </p>
          <p>
          Our mobile app development services include developing apps on native or cross-platform, updating, 
            migration, and ongoing maintenance as and when required. We deal in custom, iOS, and android app 
            development and more. For any kind of professional help, you can connect with us and we are sure not 
            to disappoint you.
          </p>
        </div>
        <div className="dm-image">
          <img src={d} alt="Digital Marketing Illustration" />
        </div>
      </div>
    </section>


    <section class="marketing-type-section">
    <h4>BEST DIGITAL MARKETING SERVICES COMPANY IN INDIA </h4>
  <div class="container">
 
    <div class="title-group">
      <span class="vertical-bar"></span>
      <div class="title-lines">
   
        <span class="line-one">TYPES OF</span>
        <span class="line-two">DIGITAL MARKETING SERVICES</span>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-card">
        <h3>Seo</h3>
        <p>Lift your site's position in search engine results pages. We will conduct competitive research, identify profitable keyword opportunity, prepare a realistic strategy to improve your site's organic traffic count, volume of natural visitors and make more rooms for closing sales and grow online.</p>
      </div>
      <div class="info-card">
        <h3>Local Seo</h3>
        <p>The next big thing in SEO, Local seo will help your business get found by native customers in the most appropriate way, increasing the opportunities of making more domestic sales and making more long-standing and nearby happy customers.</p>
      </div>
      <div class="info-card">
        <h3>Paid Marketing</h3>
        <p>Diversify your digital marketing spends by investing in both organic and paid campaigns. Webmatriks has expert. PPC professionals, and state of the art tools and technologies and a proven process to help you drive more targeted traffic</p>
      </div>
      <div class="info-card">
        <h3>Email Marketing</h3>
        <p>Email marketing is one of the most powerful marketing techniqes that have a higher conversion rate. We can help you target the right customers using email campaigns that work. From writing catchy emails to increasing open rates and finally turning those people to your site for making a purchase, we can help.</p>
      </div>
      <div class="info-card">
        <h3>Reputation Management</h3>
        <p>Without a good reputation, you won't go far, let alone making new customers and retaining old ones. Webmatriks has a team of professional reputation management experts who will work closely with you in finding the right platforms where being present may increase your chances of making a solid digital identity.</p>
      </div>
    </div>
  </div>
</section>


<section class="digital-marketing-service">
  <div class="container">
  <div class="title-group">
      <span class="vertical-bar"></span>
      <div class="title-lines">
      <span class="line-two"> OUR DIGITAL MARKETING SERVICES</span>
        <span class="line-three">In today’s digital-first world, an effective online marketing strategy is essential for business success. At [Advoize] we help brands increase visibility, drive engagement, and boost conversions with tailored digital marketing solutions.</span>
       
      </div>
    </div>


    <div class="services-grid">
      <div class="service-card">
        <img src={di9} alt="SEO Icon" />
        <h3>SEARCH ENGINE OPTIMIZATION</h3>
        <p>Get noticed and rank top on the search engine with our ethical search engine optimization practices.</p>
      </div>

      <div class="service-card">
        <img src={di8} alt="Social Media Icon" />
        <h3>SOCIAL MEDIA MARKETING</h3>
        <p>Let’s leverage the power of social media and put it in use by our professional marketing on digital platforms.</p>
      </div>

      <div class="service-card">
        <img src={di7} alt="Content Icon" />
        <h3>CONTENT MARKETING</h3>
        <p>Content is what can attract people to know more about you and build a relationship with people and content marketing brings results.</p>
      </div>



      <div class="service-card">
        <img src={di6} alt="SEO Icon" />
        <h3>SEARCH ENGINE OPTIMIZATION</h3>
        <p>Get noticed and rank top on the search engine with our ethical search engine optimization practices.</p>
      </div>

      <div class="service-card">
        <img src={di5} alt="Social Media Icon" />
        <h3>SOCIAL MEDIA MARKETING</h3>
        <p>Let’s leverage the power of social media and put it in use by our professional marketing on digital platforms.</p>
      </div>

      <div class="service-card">
        <img src={di4} alt="Content Icon" />
        <h3>CONTENT MARKETING</h3>
        <p>Content is what can attract people to know more about you and build a relationship with people and content marketing brings results.</p>
      </div>
      <div class="service-card">
        <img src={di3} alt="SEO Icon" />
        <h3>SEARCH ENGINE OPTIMIZATION</h3>
        <p>Get noticed and rank top on the search engine with our ethical search engine optimization practices.</p>
      </div>

      <div class="service-card">
        <img src={di2} alt="Social Media Icon" />
        <h3>SOCIAL MEDIA MARKETING</h3>
        <p>Let’s leverage the power of social media and put it in use by our professional marketing on digital platforms.</p>
      </div>

      <div class="service-card">
        <img src={di1} alt="Content Icon" />
        <h3>CONTENT MARKETING</h3>
        <p>Content is what can attract people to know more about you and build a relationship with people and content marketing brings results.</p>
      </div>

    </div>
  </div>
</section>



    
</>
  );
};

export default digital;

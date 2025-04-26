import React from 'react';

import we9 from '../assets/images/we (1).png';
import we8 from '../assets/images/we (2).png';    
import we7 from '../assets/images/we (3).png';
import we6 from '../assets/images/we (4).png';
import we5 from '../assets/images/we (5).png';
import we4 from '../assets/images/we (6).png';


import d from '../assets/images/d.png';
import '../Styles/About.css'; 
import '../Styles/Digital.css'; 
import heroVideo from '../assets/images/v.mp4';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Webdesign = () => {
  return (
    <>

 {/* Section 1: Hero */}
      <section className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-heading">Web Design</h2>
            <p className="hero-breadcrumb">
              Home <span className="divider">/</span>{' '}
              <span className="current-page">Web Design</span>
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
          <h2><span className="dm-red-line"></span>WEB DESIGN SERVICES</h2>
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
   
  <div class="container">
  <h4>BEST DIGITAL WEB DESIGN SERVICES COMPANY IN INDIA </h4>
    <div class="title-group">
      <span class="vertical-bar"></span>
      <div class="title-lines">
   
        <span class="line-two">TYPES OF</span>
        <span class="line-two">WEB DESIGN SERVICES</span>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-card">
        <h3>Corporate Websites</h3>
        <p>A well-designed website creates a brand’s first
online impression. It is also the 24x7 salesman
for you. With the right design and visual
impression, you can appeal to your target
audience, make their presence on your site
rewarding, and most importantly convert
passive viewers into active paying clients.</p>
      </div>
      <div class="info-card">
        <h3>Customized Websites</h3>
        <p>Creta a site that’s tailored according to your
needs. No matter the design you need based
on the type of message you want to convey, we
can help.</p>
      </div>
      <div class="info-card">
        <h3>Landing Page Design/Redesign</h3>
        <p>What will retain a viewer on your site? Of
course the experience. Webmatriks can work
with you to design high-end landing pages
that will retain them, reducing bounce rates
and encouraging their stay for longer. This
should also reflect positively on a site;s organic
search rankings.</p>
      </div>
      <div class="info-card">
        <h3>Responsive Web Design</h3>
        <p>Design beautiful sites for all devices. Make sure
they run seamlessly no matter the OS, device
type or screens. With responsive websites, you
can drive more profitable purchasing decisions
from your customers.</p>
      </div>
      <div class="info-card">
        <h3>Blog Design</h3>
        <p>Have a blog? Want to design it as per the
industry trend? We can help it. A beautifully
designed blog can differentiate your brand and
connect your customers with your message.</p>
      </div>
    </div>
  </div>
</section>


<section class="digital-marketing-service">
  <div class="container">
  <div class="title-group">
      <span class="vertical-bar"></span>
      <div class="title-lines">
      <span class="line-two"> OUR  BEST WEB DESIGN SERVICES</span>
        <span class="line-three">Designing a website is not as simple as it appears. At Webmatrix, we have the professional expertise to achieve any web designing objectives. We help you with an entire
        array of web designing services that ensure business success. Learn more about our services.</span>
       
      </div>
    </div>


    <div class="services-grid">
      <div class="service-card">
        <img src={we9} alt="SEO Icon" />
        <h3>Static Website Design</h3>
        <p>We provide you with professional help for
static website design that can help you meet
your business objectives.</p>
      </div>

      <div class="service-card">
        <img src={we8} alt="Social Media Icon" />
        <h3>Dynamic Website Design</h3>
        <p>Dynamic website design is very popular and
we assist you with our website designing
skills to get a site ready.</p>
      </div>

      <div class="service-card">
        <img src={we7} alt="Content Icon" />
        <h3>Responsive Website Design</h3>
        <p>We help you with a responsive website design
that can work wonders for your business and
bring you assured success.</p>
      </div>



      <div class="service-card">
        <img src={we6} alt="SEO Icon" />
        <h3>Ecommerce Web Portal</h3>
        <p>Having an Ecommerce web portal can not
only serve the purpose but also empower
your business in the competitive era.</p>
      </div>

      <div class="service-card">
        <img src={we5} alt="Social Media Icon" />
        <h3>Wordpress Website</h3>
        <p>We help you have an impressive WordPress
website because we understand your
business needs.</p>
      </div>

      <div class="service-card">
        <img src={we4} alt="Content Icon" />
        <h3>Customized Template Design</h3>
        <p>We build customized template design so that
you can ensure success while staying focused
on your unique business plan.</p>
      </div>
      
      

    
    

    </div>
  </div>
</section>



    
</>
  );
};

export default Webdesign;

  
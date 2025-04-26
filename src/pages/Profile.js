import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Profile.css';
import heroVideo from '../assets/images/v.mp4';
import gr from "../assets/images/gr (1).png";
import gr1 from "../assets/images/gr (2).png";
import gr2 from "../assets/images/gr (3).png";
import gr3 from "../assets/images/gr (4).png";
import heroVideo1 from '../assets/images/vp (1).gif';
import heroVideo2 from '../assets/images/vp (3).gif';
import web1 from "../assets/images/web (1).png";
import heroVideo3 from '../assets/images/vp (2).gif';
import web2 from "../assets/images/web (2).png";
import hoverGif from "../assets/images/lns.gif";

const projects = [
  { id: 1, category: 'Web Development', image: web1, video: hoverGif },
  { id: 2, category: 'Graphic', image: gr, video: hoverGif },
  { id: 3, category: 'Web Development', image: web2, video: heroVideo2 },
  { id: 4, category: 'Graphic', image: gr1, video: hoverGif },
  { id: 5, category: 'Graphic', image: gr2, video: hoverGif },
  { id: 6, category: 'Graphic', image: gr3, video: hoverGif },
  { id: 8, category: 'Web Development', image: web1, video: heroVideo1 },
  { id: 9, category: 'Web Development', image: web2, video: heroVideo3 },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);
  const scrollInterval = useRef(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((proj) => proj.category === activeCategory);

  const extendedProjects =
    activeCategory === 'All'
      ? [...filteredProjects, ...filteredProjects]
      : filteredProjects;

      const startAutoScroll = () => {
        if (scrollInterval.current || !containerRef.current || activeCategory !== 'All') return;
      
        const container = containerRef.current;
      
        scrollInterval.current = setInterval(() => {
          if (!container) return;
      
          container.scrollLeft += 1;
      
          // Reset when the scroll reaches half of scrollable content
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
          }
        }, 16); // ~60fps (1000ms / 60 = 16.66)
      };
      

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  useEffect(() => {
    stopAutoScroll();
    if (activeCategory === 'All') startAutoScroll();

    return () => stopAutoScroll();
  }, [activeCategory]);



  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
  
    let isDown = false;
    let startX;
    let scrollLeft;
  
    const handleMouseDown = (e) => {
      isDown = true;
      container.classList.add('dragging');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };
  
    const handleMouseLeave = () => {
      isDown = false;
      container.classList.remove('dragging');
    };
  
    const handleMouseUp = () => {
      isDown = false;
      container.classList.remove('dragging');
    };
  
    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed multiplier
      container.scrollLeft = scrollLeft - walk;
    };
  
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  



  return (
    <>
      <section className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-heading">Profile</h2>
            <p className="hero-breadcrumb">
              Home <span className="divider">/</span>{' '}
              <span className="current-page">Profile</span>
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

      <div className="projects-section1">
        <h3 className="section-title1">Our Projects</h3>

        <div className="category-tabs">
          {['All', 'Web Development', 'Graphic'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? 'active' : ''}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className={`projects-container ${activeCategory !== 'All' ? 'grid-layout' : ''}`}
          ref={containerRef}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          onTouchStart={stopAutoScroll}
          onTouchEnd={startAutoScroll}
        >
          {extendedProjects.map((proj, index) => (
            <div key={`${proj.id}-${index}`} className="project-item">
              <div className="media-wrapper">
                <img src={proj.image} alt="project" className="project-image" />
                {(activeCategory === 'Web Development' || activeCategory === '') && (
                  <img src={proj.video} alt="gif" className="hover-gif" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;

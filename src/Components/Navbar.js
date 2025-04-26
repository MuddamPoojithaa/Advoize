import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {  FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/advoize.png";
import { MdExpandMore } from "react-icons/md";

import "../Styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const isActive = (path) => (location.pathname === path ? "active" : "");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Advoize Logo" />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li className={isActive("/")} onClick={closeMenu}>
          <Link to="/">Home</Link>
        </li>
        <li className={isActive("/about")} onClick={closeMenu}>
          <Link to="/about">About Us</Link>
        </li>

        {/* Services Dropdown */}
        <li
          className={`dropdown ${isActive("/services")} ${
            servicesOpen ? "mobile-open" : ""
          }`}
          onClick={() => {
            if (window.innerWidth <= 768) toggleServices();
          }}
        >
          <span>
          <Link to="/services"> Services </Link><span className="arrow-down"><MdExpandMore /></span>
          </span>
          <ul className="dropdown-menu">
            <li><Link to="/Webdevelopment" onClick={closeMenu}>Web Development</Link></li>
            <li><Link to="/DigitalMarketing" onClick={closeMenu}>Digital Marketing</Link></li>
            <li><Link to="/GraphicDesign" onClick={closeMenu}>Graphic Designing</Link></li>
            <li><Link to="/VideoEditing" onClick={closeMenu}>Video Editing</Link></li>
            <li><Link to="/Marketing" onClick={closeMenu}>Marketing</Link></li>
            <li><Link to="/Seo" onClick={closeMenu}>Seo</Link></li>
            <li><Link to="/Webdesign" onClick={closeMenu}>Web Design</Link></li>
            <li><Link to="/Appdesign" onClick={closeMenu}>App Design</Link></li>
            <li><Link to="/AppDevelopment" onClick={closeMenu}>App Development</Link></li>
          </ul>
        </li>

        <li className={isActive("/plans")} onClick={closeMenu}>
          <Link to="/plans">Plans</Link>
        </li>
        <li className={isActive("/profile")} onClick={closeMenu}>
          <Link to="/profile">Profile</Link>
        </li>
        <li className={isActive("/contact")} onClick={closeMenu}>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

     
     
      <div className="nav-right">
        <button className="teams-btn">
        Customer Support <FaArrowRight className="icon" />
        </button>
      
      
      </div>
    </nav>
  );
}

import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {


  return (
 
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>For more information follow on us </p>
          <div className="footer-social-icons">
          <a href="https://www.facebook.com/jyotishsootram" target="_blank">
            <img src={assets.facebook_icon}  alt="" />
            </a>
            <a href="https://x.com/jyotishsootram" target="_blank">
            <img src={assets.twitter_icon} alt="" /></a>
            <a href="https://www.instagram.com/jyotishsootram" target="_blank">
            <img src={assets.instagram_icon} alt="" /></a>
            <a href="https://www.quora.com/profile/Jyotish-Sootram" target="_blank">
            <img src={assets.quora_icon} alt="" /></a>
            <a href="https://www.youtube.com/@jyotishsootram" target="_blank">
            <img src={assets.youtube_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Jyotish Sootram</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Phone Consultation</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2> GET IN TOUCH</h2>
          <ul>
            <li>+91 94797-77638</li>
            <li>jsootram@gmail.com</li>
          </ul>
        </div>
      
      </div>
      <hr />
   
      <p className="footer-content-center">
    Copyright 2024 &copy; Jyotish Sootram - All Right Reserved.
</p>
      <div className="footer-content-right">

      <a href="https://wa.me/+919479777638"
       target="_blank" className="whatsapp_icon" title="Chat with us on WhatsApp">
    <img src={assets.whatsapp_icon} alt="WhatsApp"/>
	</a>
</div>


      
     
       
    </div>
  );
};

export default Footer;

import React from "react";
import "./footer.css";
import Gpt4Logo from "../../assets/gpt4logos.png";
const Footer = () => {
  return (
    <div className="gpt4__footer section__padding">
      <div className="gpt4__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt4__footer-btn">
        <p> Request Early Access</p>
      </div>
      <div className="gpt4__footer-links">
        <div className="gpt4__footer-links_logo">
          <img src={Gpt4Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>Gilroy-Medium</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt4__footer-copyright">
        <p>© 2023 GPT-4. All rights reserved.</p>
        <p>design & developed by : Afshin Arshad</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer_logo">
        BAROOON
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li>
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="#services">SERVICES</a>
        </li>
        <li>
          <a href="#contace">CONTACT</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="#" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/onbao165" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.facebook.com/barooon165/" target="_blank">
          <BsFacebook />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Barooon. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

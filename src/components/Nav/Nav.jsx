import React,{useEffect} from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const Nav = ({activeNav, setActiveNav}) => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#home", "#about", "#experience", "#services", "#contact"];
      
      const timeoutId = setTimeout(() => {
        // Check which section is in the viewport
        for (let i = 0; i < sections.length; i++) {
          const section = document.querySelector(sections[i]);
          const sectionTop = section.offsetTop;
          const sectionEnd = section.offsetTop+section.offsetHeight;
          const middleY = window.scrollY + window.innerHeight / 2;
          // get the default font-size of root element 
          const computedStyle = window.getComputedStyle(document.documentElement);
          const fontSize = parseFloat(computedStyle.getPropertyValue('font-size'));
          // sectionTop-5*fontSize to deal with the padding-top: 5rem; of each sections  
          if (window.scrollY >= sectionTop-5*fontSize && middleY < sectionEnd) {
            setActiveNav(sections[i]);
            break;
          }
        }
      }, 100);
      //the setTimeout make the handler wait a little time before making changes, make it less laggy when user scroll too fast
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav>
      <a
        href="#home"
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUserCircle />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
      >
        <BsBriefcase />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdAlternateEmail />
      </a>
    </nav>
  );
};
export default Nav;


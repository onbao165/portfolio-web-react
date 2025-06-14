import { useEffect } from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { BiSolidBook, BiSolidUserCircle } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";
import { MdEmail, MdMiscellaneousServices } from "react-icons/md";

const Nav = ({activeNav, setActiveNav}) => {
  useEffect(() => {
    let timeoutId = setTimeout(() => {}, 0); // Initial timeoutId to avoid warnings
    const handleScroll = () => {
      const sections = ["#home", "#about", "#experience", "#portfolio", "#services", "#contact"];
      
      timeoutId = setTimeout(() => {
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
      clearTimeout(timeoutId); // Clear the timeout when the component unmounts to avoid memory leaks
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveNav]);
  return (
    <nav>
      <a
        href="#home"
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiSolidUserCircle />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiSolidBook />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BsBriefcaseFill />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
      >
        <MdMiscellaneousServices />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdEmail />
      </a>
    </nav>
  );
};
export default Nav;


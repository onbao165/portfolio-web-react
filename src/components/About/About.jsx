import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaBusinessTime } from "react-icons/fa";
import { MdHandshake } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="Picture of me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaBusinessTime className="about_icon" />
              <h5>Experience</h5>
              <small>No working experience yet :{"("}</small>
            </article>
            <article className="about_card">
              <MdHandshake className="about_icon" />
              <h5>Client</h5>
              <small>0 clients :{"("}</small>
            </article>
            <article className="about_card">
              <BsFillCheckCircleFill className="about_icon" />
              <h5>Projects</h5>
              <small>This website is my first React project :{"v"}</small>
            </article>
          </div>
          <p>
            Highly motivated and dedicated freshman with a strong passion for Software Engineering from FPT University.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

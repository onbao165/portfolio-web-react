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
            <img src={ME} alt="On Gia Bao" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaBusinessTime className="about_icon" />
              <h5>Experience</h5>
              <small>2+ real-world projects</small>
            </article>
            <article className="about_card">
              <MdHandshake className="about_icon" />
              <h5>Clients</h5>
              <small>Professional collaborations</small>
            </article>
            <article className="about_card">
              <BsFillCheckCircleFill className="about_icon" />
              <h5>Projects</h5>
              <small>Multiple web applications</small>
            </article>
          </div>
          <p>
            Software Engineering student at FPT University with hands-on experience in backend development.<br/>
            Passionate about building scalable systems and solving complex technical challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

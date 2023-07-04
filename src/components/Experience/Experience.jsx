import React from "react";
import "./experience.css";
import { BiCube } from "react-icons/bi";
const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          {/* Frontend */}
          <h3>Front-End Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BiCube className="experience_details_icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCube className="experience_details_icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCube className="experience_details_icon"/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCube className="experience_details_icon"/>
              <div>
                <h4>REACT</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* Backend */}
        <div className="experience-backend">
          <h3>Back-End Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BiCube className="experience_details_icon"/>
              <div>
                <h4>JAVA SPRING BOOT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCube className="experience_details_icon"/>
              <div>
                <h4>DOCKER</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCube className="experience_details_icon"/>
              <div>
                <h4>NODEJS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

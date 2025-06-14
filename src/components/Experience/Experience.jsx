import React from "react";
import "./experience.css";
import { BiCube } from "react-icons/bi";
const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>
      <div className="container experience_container">
        {/* Backend */}
        <div className="experience_backend">
          <h3>Back-End Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BiCube className="experience_details_icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCube className="experience_details_icon" />
              <div>
                <h4>.NET CORE</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCube className="experience_details_icon" />
              <div>
                <h4>TYPESCRIPT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCube className="experience_details_icon" />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCube className="experience_details_icon" />
              <div>
                <h4>SQL SERVER</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCube className="experience_details_icon" />
              <div>
                <h4>POSTGRESQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* Database & Deployment */}
        <div className="experience_database">
          <h3>Database & Deployment</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BiCube className="experience_details_icon" />
              <div>
                <h4>DOCKER</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCube className="experience_details_icon" />
              <div>
                <h4>NGINX</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCube className="experience_details_icon" />
              <div>
                <h4>GITHUB WORKFLOWS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";
const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Full-Stack Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheckLg className="service_list_icon" />
              <p>RESTful API Development with .NET Core</p>
            </li>
            <li>
              <BsCheckLg className="service_list_icon" />
              <p>NestJS Backend Solutions</p>
            </li>
            <li>
              <BsCheckLg className="service_list_icon" />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BsCheckLg className="service_list_icon" />
              <p>SEO Optimization</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>System Integration</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheckLg className="service_list_icon" />
              <p>Third-party API Integration</p>
            </li>
            <li>
              <BsCheckLg className="service_list_icon" />
              <p>OAuth & Authentication Systems</p>
            </li>
            <li>
              <BsCheckLg className="service_list_icon" />
              <p>Docker Containerization</p>
            </li>
            <li>
              <BsCheckLg className="service_list_icon" />
              <p>CI/CD Pipeline Setup</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

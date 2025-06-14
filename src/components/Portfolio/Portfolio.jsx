import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.jpg";
import IMG3 from "../../assets/project3.jpg";

const data = [
  // {
  //   id: 1,
  //   image: IMG1,
  //   title: "PLAYNEX - Sport Venue Management System",
  //   description: "A distributed sport venue management system with flexible slot generation based on business rules. Built with TypeScript, NestJS, and .NET Core, connected via gRPC protocol.",
  //   technologies: "TypeScript, NestJS, .NET Core, gRPC",
  //   github: "https://github.com/onbao165",
  //   demo: "#",
  //   type: "Academic Project"
  // },
  {
    id: 2,
    image: IMG2,
    title: "Make Me Banana",
    description: "Backend system for clothing shopping website with product variations, collections, promotions, and Google OAuth integration.",
    technologies: "Backend Development, Google OAuth",
    github: "#",
    demo: "https://makemebanana.vn",
    type: "Freelance Project"
  },
  {
    id: 3,
    image: IMG3,
    title: "Hoc Vien Ca Rong",
    description: "Full-stack web application for arowana fish business with video processing using FFmpeg, self-hosted Umami analytics, and SEO optimization.",
    technologies: "Full-Stack, FFmpeg, Umami Analytics, SEO",
    github: "#",
    demo: "https://hocviencarong.vn",
    type: "Freelance Project"
  },
  {
    id: 4,
    image: IMG1,
    title: "Smart Farm System",
    description: "Connected distributed farm systems to central web server for real-time monitoring. Built communication protocols and camera monitoring solution.",
    technologies: ".NET Core, FFmpeg, MQTT, RabbitMQ",
    github: "#",
    demo: "#",
    type: "Internship Project"
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Work</h2>
      <div className="container portfolio_container">
        {/* use {} to wrap js code  */}
        {data.map(({ id, image, title, description, technologies, github, demo, type }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <div className="portfolio_item_content">
                <span className="portfolio_item_type">{type}</span>
                <h3>{title}</h3>
                <p className="portfolio_item_description">{description}</p>
                <small className="portfolio_item_tech">Technologies: {technologies}</small>
              </div>
              <div className="portfolio_item_link">
                {github !== "#" && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Github
                  </a>
                )}
                {demo !== "#" && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary-variant"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

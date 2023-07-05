import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.jpg";
import IMG3 from "../../assets/project3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project 1",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Project 2",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Project 3",
    github: "https://github.com",
    demo: "https://github.com",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Work</h2>
      <div className="container portfolio_container">
        {/* use {} to wrap js code  */}
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt={"Project "+id} />
              </div>
              <h3>Let just pretend this is a project ok :v</h3>
              <div className="portfolio_item_link">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary-variant"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

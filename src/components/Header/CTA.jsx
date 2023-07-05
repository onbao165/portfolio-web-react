import React from "react";
// import CV from  ''

const CTA = () => {
  return (
    <div className="cta">
      <a href="" download className="btn btn">
        Download CV
      </a>
      {/*put download attribute for downloadable file */}
      <a
        href="#contact"className="btn btn-primary-variant">
        Contact me
      </a>
    </div>
  );
};
export default CTA;

import React from "react";
// import CV from  ''

const CTA = ({setActiveNav}) => {
  return (
    <div className="cta">
      <a href="" download className="btn btn">
        Download CV
      </a>
      {/*put download attribute for downloadable file */}
      <a
        href="#contact" onClick={() => setActiveNav("#contact")} className="btn btn-primary">
        Contact me
      </a>
    </div>
  );
};
export default CTA;

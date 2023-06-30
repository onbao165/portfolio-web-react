import React from 'react'
import CV from  '../../assets/barooon.jpg' 

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn btn'>Download CV</a> 
        {/*put download attribute for downloadable file */}
        <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA
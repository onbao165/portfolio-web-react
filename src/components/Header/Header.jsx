import React from 'react'
import './header.css'
import CTA from './CTA'
import Socials from './Socials'
import ME from '../../assets/me.png'
const header = ({setActiveNav}) => {
  return (
    <header id="home"> 
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Barooon</h1>
        <h5 className="text_light">First-year student at FPT University</h5>
        <CTA setActiveNav={setActiveNav}/>
        <Socials/>
        <div className="me">
          <img src={ME} alt="Picture of me" className='me_image'/>
        </div>
      </div>
    </header>
  )
}

export default header
import React from 'react'
import './header.css'
import CTA from './CTA'
import Socials from './Socials'
import ME from '../../assets/barooon.jpg'
const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Barooon</h1>
        <h5 className="text_light">First-year student at FPT University</h5>
        <CTA/>
        <Socials/>
        <div className="me">
          <img src="" alt="Picture of me" />
        </div>
      </div>
    </header>
  )
}

export default header
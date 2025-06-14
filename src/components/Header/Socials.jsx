import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const Socials = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com/in/onbao165" target='_blank' rel="noreferrer">
            <BsLinkedin/>
        </a>
        <a href="https://github.com/onbao165" target='_blank' rel="noreferrer">
            <BsGithub/>
        </a>
        <a href="https://www.facebook.com/barooon165/" target='_blank' rel="noreferrer">
            <BsFacebook/>
        </a>
    </div>
  )
}

export default Socials
import React,{ useRef } from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_qd7ghhm', 'template_ggq9d1o', form.current, 'mFA2Xolfqk-WLBG-6')
    e.target.reset()
};
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Enter your name' required />
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name="message" rows="2" placeholder='Your message' required></textarea>
            <h5>Please fill out all fields</h5>
            <div className="send-btn">
            <button type='submit' className='btn btn-primary-variant'>Send Message</button>
          </div>
        </form>
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_option_icon' />
            <a href="mailto:ongiabaoit22@gmail.com">Send an email</a>
          </article>
          <article className="contact_option">
            <FaFacebookMessenger className='contact_option_icon' />
            <a href="https://m.me/barooon165">Chat with me</a>
          </article>
          <article className="contact_option">
            <AiFillPhone className='contact_option_icon' />
            <h5>{"(+84) 1234567890"}</h5>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
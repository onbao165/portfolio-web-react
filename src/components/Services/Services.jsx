import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'
const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <h5>No services yet :{'('}</h5>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Service 1</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor sit.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Service 2</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor sit.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Service 3</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor sit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
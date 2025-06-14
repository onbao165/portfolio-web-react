import './header.css'
import CTA from './CTA'
import Socials from './Socials'
const header = ({setActiveNav}) => {
  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>On Gia Bao</h1>
        <h5 className="text_light">Software Engineering Student | Backend Developer</h5>
        <CTA setActiveNav={setActiveNav}/>
        <Socials/>
        {/* <div className="me">
          <img src={ME} alt="On Gia Bao" className='me_image'/>
        </div> */}
      </div>
    </header>
  )
}

export default header
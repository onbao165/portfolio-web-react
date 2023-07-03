import React, { useState } from 'react'
import Header from "./components/Header/Header.jsx"
import Nav from "./components/Nav/Nav.jsx"
import About from "./components/About/About.jsx"
import Experience from "./components/Experience/Experience.jsx"
import Portfolio from "./components/Portfolio/Portfolio.jsx"
import Services from "./components/Services/Services.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Footer from "./components/Footer/Footer.jsx"

const App = () => {
    const [activeNav, setActiveNav] = useState('#home');
    return (
        <>
            <Header setActiveNav={setActiveNav} />
            {/* gotta put the 2 props into Header as CTA is Header's child  */}
            <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
            {/* make activeNav, setActiveNav parent component so every child share the same props */}
            <About />
            <Experience />
            <Portfolio />
            <Services />
            <Contact />
            <Footer />
        </>
    );
};
export default App
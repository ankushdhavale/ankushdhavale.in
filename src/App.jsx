import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Bio from './components/Bio'
import Skills from './components/Skills'
import EducationSection from './components/EducationSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="relative h-full overflow-y-hidden antialiased">
        <div className="inset-0 bg-fixed bg-cover bg-center bg-img">
          <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto ">
            <Navbar/>
            <Hero/>
            <Projects/>
            <Bio/>
            <Skills/>
            <EducationSection/>
            <ContactForm/>
            <Footer/>
          </div>
        </div>
    </div>
  )
}

export default App
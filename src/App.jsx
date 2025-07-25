import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="clients">
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App

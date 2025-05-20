import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Skill from './Components/Skill'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Projects />
      <Footer />
    </div>
  )
}

export default page
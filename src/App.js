import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// import { useOpacityIn } from './components/UI/Hooks/useOpacityIn'
import './App.css'
import Section from './components/Section'
import StartSection from './components/StartSection/StartSection'
import AboutSection from './components/AboutSection/AboutSection'
import PhotoSection from './components/PhotoSection/PhotoSection'
import VideoSection from './components/VideoSection/VideoSection'
import VideoSection2 from './components/VideoSection2/VideoSection2'
import TestSection from './components/TestSection/TestSection'
import Modal from './components/PhotoSection/Modal/Modal'
import NavBar from './components/UI/NavBar'
import Footer from './components/UI/Footer'
import Slider from './components/UI/Slider'
import AboutNav from './components/AboutSection/AboutNav'

function App() {
  const [navBarRender, setNavBarRender] = useState(false)
  // const { opacityStatus } = useOpacityIn({ navBarRender })

  useEffect(() => {
    function renderNavBar() {
      setNavBarRender(true)
      console.log('scroll!!!')
      window.removeEventListener('scroll', renderNavBar)
    }
    window.addEventListener('scroll', renderNavBar)
  })

  return (
    <div className="App">
      {/* <TestSection /> */}
      {/* {navBarRender && <NavBar />} */}
      {/* {navBarRender && <Footer />} */}
      <StartSection />
      {/* <PhotoSection /> */}
      <AboutSection />
      {/* <AboutNav /> */}
      {/* <VideoSection2 /> */}
      {/* <VideoSection /> */}
      {/* <Modal /> */}
    </div>
  )
}

export default App

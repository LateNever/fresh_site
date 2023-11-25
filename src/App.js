import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// import { useOpacityIn } from './components/UI/Hooks/useOpacityIn'
import './App.css'
import Section from './components/Section'
import StartSection from './components/StartSection/StartSection'
import AboutSection from './components/AboutSection/AboutSection'
import PhotoSection from './components/PhotoSection/PhotoSection'
// import VideoSection from './components/VideoSection/VideoSection'
import VideoSection2 from './components/VideoSection2/VideoSection2'
import TestSection from './components/TestSection/TestSection'
import ContactsSection from './components/ContactsSection/ContactsSection'
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
      // const currentPage = Math.round(
      //   window.pageYOffset / document.documentElement.clientHeight
      // )
      // console.log(currentPage)
      // if (
      //   Math.abs(
      //     window.pageYOffset / document.documentElement.clientHeight -
      //       currentPage
      //   ) < 0.05
      // ) {
      //   window.scrollTo({
      //     top: currentPage * document.documentElement.clientHeight,
      //     behavior: 'smooth',
      //   })
      // }
      setNavBarRender(true)
      // if
      // console.log('scroll!!!')
      // console.log(document.documentElement.clientHeight)
      // console.log(window.pageYOffset)
      // window.removeEventListener('scroll', renderNavBar)
    }
    // function scroll() {
    //   setTimeout(renderNavBar, 700)
    //   console.log(window.pageYOffset / document.documentElement.clientHeight)
    // }
    window.addEventListener('scroll', renderNavBar)
  })

  return (
    <div className="App">
      {/* <TestSection /> */}
      {navBarRender && <NavBar />}
      {navBarRender && <Footer />}
      <StartSection />
      <AboutSection />
      {/* <AboutNav /> */}
      <VideoSection2 />
      <PhotoSection />
      <ContactsSection />
      {/* <VideoSection /> */}
      {/* <Modal /> */}
    </div>
  )
}

export default App

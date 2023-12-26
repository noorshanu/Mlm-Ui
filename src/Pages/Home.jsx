import React from 'react'
import Navbar from '../components/Navbar'
import TopBar from '../components/TopBar'
import Biomag from '../components/Biomag'
import About from '../components/About'
import Vision from '../components/Vision'
import Products from '../components/Products'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Disclaimer from '../components/Disclaimer'
import MenuBar from '../components/MenuBar'
import SearchMenu from '../components/SearchMenu'

function Home() {
  return (
   <>
   <div>
    <TopBar/>
    {/* <Navbar/> */}
    <SearchMenu/>
    <MenuBar/>
    <Hero/>
    <Biomag/>
    <About/>
    <Vision/>
    <Products/>

    <Contact/>
    <Footer/>
    <Disclaimer/>
   </div>
   </>
  )
}

export default Home
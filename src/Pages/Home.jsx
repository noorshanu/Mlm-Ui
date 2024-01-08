import {  useState,useEffect } from "react";


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
// import WelcomePopup from '../components/WelcomePopup'

function Home() {

  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  // const openPopup = () => {
  //   setIsPopupOpen(true);
  // };
  
  // const closePopup = () => {
  //   setIsPopupOpen(false);
  // };
  
  // useEffect(() => {
  //   // Auto trigger the popup after 3000 milliseconds (3 seconds)
  //   const popupTimer = setTimeout(() => {
  //     openPopup();
  //   }, 3000);
  
  //   // Clear the timer when the component unmounts
  //   return () => clearTimeout(popupTimer);
  // }, []);
  return (
   <>
   <div>
    {/* <TopBar/> */}
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
   {/* <WelcomePopup isOpen={isPopupOpen} onClose={closePopup}/> */}
   </>
  )
}

export default Home
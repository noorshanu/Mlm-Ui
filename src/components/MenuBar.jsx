import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AboutUsDropdown from './AboutUsDropdown';

function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className=''>
      <div className='container-wrapper'>
        <div className='flex justify-between items-center gap-6'>
          <div>
            <Link to='/'>
            
            <img src="images/logo.png" alt="" className='h-[80px] p-3' />
            </Link>
          </div>
          <div className='flex items-center gap-6'>
            <div className='hidden md:flex gap-6 menu'>
              {/* Desktop Navigation */}
              <p className='text-black cursor-pointer hover:text-black underline text-sm uppercase'>
               <Link to='/'>
               Home
               </Link>  
              </p>
              {/* <p className=' text-black cursor-pointer hover:text-black text-sm uppercase'>
               <Link to='/about'>
               About us
               </Link>
                
                </p> */}
                <p>
                  <AboutUsDropdown/>
                </p>
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                
                <Link to='/products'>
                Products
                </Link>
              
                </p>

                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                <Link to='/legal'>
                Legal
                </Link>
                
                </p>

                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                Rank Achievers
                </p>
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                  <Link to='/gallery'>
                  Gallery
                  </Link>
                
                </p>
              
               
           
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                  <Link to='/contact-us'>
                  Contact us
                  </Link>
                
                </p>
            </div>
            <div className='md:hidden'>
              {/* Mobile Navigation with Hamburger Icon */}
              <button onClick={handleToggleMenu}>
                {isMenuOpen ? (
                  <FaTimes className='text-black text-2xl cursor-pointer' />
                ) : (
                  <FaBars className='text-black text-2xl cursor-pointer' />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden'>
         <div className=' flex flex-col gap-4 menu'>
         <p className='text-black cursor-pointer hover:text-black underline text-sm uppercase'>
                Home 
              </p>
              <p className=' text-black cursor-pointer hover:text-black text-sm uppercase'>
                About us
                </p>
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                Products
                </p>
              
              
               
           
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                Contact
                </p>

         </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MenuBar;
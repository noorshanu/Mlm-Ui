import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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
            <img src="images/logo.png" alt="" className='h-[80px] p-3' />
          </div>
          <div className='flex items-center gap-6'>
            <div className='hidden md:flex gap-6 menu'>
              {/* Desktop Navigation */}
              <p className='text-black cursor-pointer hover:text-black underline text-sm uppercase'>
                Home care
              </p>
              <p className=' text-black cursor-pointer hover:text-black text-sm uppercase'>
                Clinical
                </p>
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                Home care
                </p>
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                Veterinary
                </p>
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                Magnetotherapy
                </p>
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                Encyclopedia
                </p>
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                How and where to buy
                </p>
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                Contact
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
         <p className='text-black cursor-pointer hover:text-black text-sm uppercase'>
              Home care
            </p>
            <p className=' text-black cursor-pointer hover:text-black text-sm uppercase'>
                Clinical
                </p>
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                Home care
                </p>
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                Veterinary
                </p>
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                Magnetotherapy
                </p>
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                Encyclopedia
                </p>
                <p className=' text-black cursor-pointer hover:text-black  text-sm uppercase'>
                How and where to buy
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
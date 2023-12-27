import React from 'react'

function MenuBar() {
  return (
    <section className=' '>
        <div className='container-wrapper'>
            <div className=' flex justify-between items-center gap-6'>
            <div>
            <img src="images/logo.png" alt="" className=' h-[80px] p-3' />
        </div>
        <div className=' flex  items-center gap-6'>
        <p className=' text-black cursor-pointer hover:text-black underline text-sm uppercase'>
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

        </div>
    </section>
  )
}

export default MenuBar
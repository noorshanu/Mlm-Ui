import React from 'react'

function MenuBar() {
  return (
    <section className='bg-[#00AEF3] py-4'>
        <div className='container-wrapper'>
            <div className=' flex justify-center items-center gap-6'>
                <p className='text-white cursor-pointer hover:text-black underline text-sm uppercase'>
                Home care
                </p>

                <p className='text-white cursor-pointer hover:text-black text-sm uppercase'>
                Clinical
                </p>
                <p className='text-white cursor-pointer hover:text-black  text-sm uppercase'>
                Home care
                </p>
                <p className='text-white cursor-pointer hover:text-black  text-sm uppercase'>
                Veterinary
                </p>
                <p className='text-white cursor-pointer hover:text-black  text-sm uppercase'>
                Magnetotherapy
                </p>
                <p className='text-white cursor-pointer hover:text-black  text-sm uppercase'>
                Encyclopedia
                </p>
                <p className='text-white cursor-pointer hover:text-black  text-sm uppercase'>
                How and where to buy
                </p>
                <p className='text-white cursor-pointer hover:text-black  text-sm uppercase'>
                Contact
                </p>
            </div>

        </div>
    </section>
  )
}

export default MenuBar
import React from 'react'
import { FaSearch } from "react-icons/fa";

function SearchMenu() {
  return (
   <section>
    <div className='container-wrapper flex justify-between items-center'>
        <div>
            <img src="images/logo.png" alt="" className=' h-[100px] p-3' />
        </div>
        <div>
            <div className=' bg-[#E9E9E9] h-[60px] px-9 flex justify-between items-center w-auto sm:w-[600px] rounded-md'>
                <input type="text" name="" id="" placeholder='What are you looking for ?' className=' bg-[#E9E9E9] outline-none focus:outline-none' />

                <FaSearch className=' text-lg text-[#636363]' />



            </div>
        </div>
 <a href="/" className='btn-main py-3 px-6 text-base font-medium text-white hover:text-black'>Try it for free</a>
    </div>
   </section>
  )
}

export default SearchMenu
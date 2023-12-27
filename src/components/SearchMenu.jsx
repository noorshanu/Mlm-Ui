import React from 'react'
import { FaSearch } from "react-icons/fa";

function SearchMenu() {
  return (
   <section>
    <div className='container-wrapper flex justify-between items-center'>
        <div>
            <img src="images/logo.png" alt="" />
        </div>
        <div>
            <div className=' bg-[#E9E9E9] h-[60px] px-9 flex justify-between items-center '>
                <input type="text" name="" id="" placeholder='What are you looking for ?' />

                <FaSearch />



            </div>
        </div>
 <a href="/">Try it for free</a>
    </div>
   </section>
  )
}

export default SearchMenu
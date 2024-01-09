import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  return (
   <section className='bg-[#F0FCFF] py-4 sm:py-14'>
    <div className=' max-w-5xl mx-auto'>

        <div className=' flex justify-between flex-col sm:flex-row  '>
            <img src="images/contact.png" alt="" className='h-[450px] p-7 sm:p-0 sm:h-[550px]' 
    />

            <div >
                <h1 className='text-[#303A42] text-4xl font-bold  pb-6 '>Contact us</h1>
                <div className=" bg-[#00aef3] h-[4px] w-[150px]  mb-2"></div>


              <ContactForm/>
            </div>

        </div>

    </div>
   </section>
  )
}

export default Contact
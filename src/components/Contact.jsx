import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  return (
   <section className='bg-[#F0FCFF] py-8'>
    <div className='container-wrapper'>

        <div className=' flex justify-between items-center gap-6'>
            <img src="images/contact.png" alt="" />

            <div>
                <h1>Contact us</h1>


              <ContactForm/>
            </div>

        </div>

    </div>
   </section>
  )
}

export default Contact
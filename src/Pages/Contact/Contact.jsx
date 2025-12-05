import React from 'react'
import Banner from '../../Components/Banner/Banner'
import contactImage from '../../assets/images/2.jpg'
import './Contact.css'
function Contact() {
  return (
    <>
        <Banner pageName='otherBanner' bannerImage={contactImage} title='Contact' 
        buttonText='Travel Plan' btnClassName='hide'/> 
        <div className='form-container'>
            <h1>Send us a message</h1>
            <form >
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Subject'/>
                <textarea rows="4" placeholder='Message'></textarea>
                <button>Send Message</button>
            </form>
        </div>
    </>
  )
}

export default Contact
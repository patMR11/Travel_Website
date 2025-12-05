import React from 'react'
import './About.css'
import Banner from '../../Components/Banner/Banner'
import aboutImage from '../../assets/images/about.jpg'
function About() {
  return (
    <>
      <Banner pageName='otherBanner' bannerImage={aboutImage} title='About' 
        buttonText='Travel Plan' btnClassName='hide'/> 
        <div className='about-container'>
          <h1>Our History</h1>  
          <p>Founded with a passion for exploration and a deep love for cultural discovery, our travel company began as a small group of adventurers helping others experience the world in a more personal and meaningful way. 
            Over the years, we've grown into a trusted platform, connecting thousands of travelers to unforgettable destinations, authentic experiences, and expert guidance every step of the journey.</p>
          
          <h1>Our Mission</h1>  
          <p>Our mission is to inspire and empower people to explore the world with confidence, curiosity, and care. 
            We strive to create travel experiences that are not only enjoyable but also enriching—offering seamless planning, exceptional service, 
            and opportunities to connect with the cultures, landscapes, and communities that make each destination unique.</p>
          
          <h1>Our Vision</h1>  
          <p>We envision a world where travel is more than just movement—it's a way to grow, to understand, and to build connections across borders. 
            Our goal is to become a global leader in responsible and immersive travel, 
            creating meaningful journeys that leave a positive impact on both the traveler and the places they visit.</p>
        </div>  
    </>
  )
}

export default About
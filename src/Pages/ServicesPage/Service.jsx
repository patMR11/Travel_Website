import React from 'react'
import Banner from '../../Components/Banner/Banner'
import aboutImage from '../../assets/images/about.jpg'
import Trip from '../../Components/Trip/Trip'
function Service() {
  return (
    <>
         <Banner pageName='otherBanner' bannerImage={aboutImage} title='Service' 
        buttonText='Travel Plan' btnClassName='hide'/>
         <Trip/>
    </>
  )
}

export default Service
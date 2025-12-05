import React from 'react'
import './Home.css'
import Banner from '../../Components/Banner/Banner'
import Destination from '../../Components/Destination/Destination'
import bannerImage from '../../assets/images/banner.jpg'
import mount1 from '../../assets/images/mount.jpg'
import mount2 from '../../assets/images/mount2.jpg'
import machu1 from '../../assets/images/machu.jpg'
import machu2 from '../../assets/images/machu2.jpg'
import Trip from '../../Components/Trip/Trip'

function Home() {
  return (
    <>
        <Banner pageName='homeBanner' bannerImage={bannerImage} title='Start Your Journey' 
        text='Choose Any Destination' buttonText='Travel Plan' btnClassName='show'/>
        <Destination desc_ClassName= 'first-description' header='Popular Destinations' subheading='Popular Destinations' location='Popular Destinations'
            descriptionText="Embark on the adventure of a lifetime by hiking Mount Kilimanjaro, 
                                Africa’s highest peak and one of the most iconic trekking destinations in the world.
                                 With no technical climbing required, Kilimanjaro is accessible to hikers of all skill levels, 
                                 offering a unique blend of challenge and reward. As you ascend through diverse landscapes—from lush rainforests to alpine deserts—you’ll witness breathtaking views and experience a profound sense of achievement. 
                                 Whether you're an experienced trekker or a first-time adventurer, 
                                hiking Kilimanjaro is a truly unforgettable journey."
            image1={mount1} image2={mount2}
        />
        <Destination desc_ClassName='first-description-reverse' location='Machu Picchu, Peru' descriptionText="
            Trek to the legendary Inca citadel of Machu Picchu, 
            nestled high in the Peruvian Andes. This ancient wonder, surrounded by misty peaks and lush cloud forests, 
            offers a journey rich in history, culture, and breathtaking scenery. 
            Hikers can follow the famous Inca Trail—a multi-day trek that winds through dramatic mountain passes,
             hidden ruins, and vibrant local flora. 
            Reaching Machu Picchu at sunrise is a moment of awe and wonder, as the golden light reveals the majestic stone city. 
            It's a bucket-list adventure for those seeking both beauty and a deep connection to the past."
            image1={machu1} image2={machu2}/> 
            <Trip/>
    </> 
  )
}

export default Home
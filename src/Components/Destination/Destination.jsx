import React from 'react'
import './Destination.css'

function Destination({desc_ClassName, header, subheading, location, descriptionText,image1,image2}) {
  return (
    <div className="destination">
        <h1>{header}</h1>
        <p>{subheading}</p>
        <div className={desc_ClassName}>
            <div className='description-text'>
                <h2>{location}</h2>
                <p>{descriptionText}</p>
            </div>
            <div className='destination-images'>
                <img src={image1} alt="Mount Kilimanjaro"/>
                <img src={image2} alt="Mount Kilimanjaro"/>
            </div>
        </div>
    </div>
  )
}


export default Destination


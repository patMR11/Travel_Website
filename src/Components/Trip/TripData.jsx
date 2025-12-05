import React from 'react'

function TripData({tripImage,heading,text}) {
  return (
    <div className='t-card'>
            <div className='trip-image'>
                <img src={tripImage} alt="" />
            </div>
            <h4>{heading}</h4>
            <p>{text}</p>
    </div>
  )
}

export default TripData
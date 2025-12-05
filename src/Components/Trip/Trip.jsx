import React from 'react'
import './Trip.css'
import TripData from './TripData'
import trip1 from '../../assets/images/5.jpg'
import trip2 from '../../assets/images/8.jpg'
import trip3 from '../../assets/images/6.jpg'
function Trip() {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>Discover unique destinations with us</p>
        <div className='tripcard'>
            <TripData tripClass='' tripImage={trip1} heading='Trip in Indonesia'
                text="Indonesia is a vast and diverse archipelago made up of over 17,000 islands, offering a rich blend of cultures, landscapes, and traditions. 
                From the beaches of Bali to the ancient temples of Java and the jungles of Sumatra, 
                it’s a paradise for travelers seeking both adventure and cultural discovery."/>
            <TripData tripClass='' tripImage={trip2} heading='Trip in Malaysia'
                text="Malaysia is a vibrant country where modern cities, lush rainforests, and diverse cultures come together in perfect harmony. 
                From the bustling streets of Kuala Lumpur to the tranquil beaches of Langkawi and the wildlife of Borneo, Malaysia offers unforgettable experiences for every type of traveler."/>
            <TripData tripClass='' tripImage={trip3} heading='Trip in France'
                text="France is a country of timeless charm, renowned for its world-class cuisine, romantic cities, and rich artistic heritage. 
                From the iconic Eiffel Tower in Paris to the lavender fields of Provence and the vineyards of Bordeaux, 
                France offers something for every traveler."/>
        </div>
    </div>
  )
}

export default Trip
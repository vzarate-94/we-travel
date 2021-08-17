import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// styles
import styles from './Home.module.css'

// Services
import * as tripService from '../../services/tripService'

// components
import Inspiration from '../Inspiration/Inspiration'
import TripCard from '../../components/TripCard/TripCard'

function Home(props) {
  const [trips, setTrips] = useState([])
  

  const handleDeleteTrip = id => {
    tripService.deleteOne(id)
      .then(
        setTrips(trips.filter(trip => id !== trip._id))
      )
  }


  useEffect(() => {
    tripService.getAll()
      .then(allTrips => setTrips(allTrips))
  }, []);


  return (
      <div className={styles.container}>
        {trips[0]?.name ?
        <>
          <h2>Upcoming Trips</h2>
          <TripCard
              trip={trips[0]}
              handleDeleteTrip={handleDeleteTrip}
            /> 
          <Link to="/trips">
            See more trips
          </Link>
        </>
          :
          <>
            <h2>You have no trips</h2>
            <Link to="/trips">
            Add your first trip
          </Link>
          </>
        } 
          <p>Not sure where to go next?</p>
          <h2>Get Inspired</h2>
          <Inspiration/>
      </div>
  )
}

export default Home
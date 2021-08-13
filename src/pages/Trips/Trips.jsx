import React, { useState, useEffect } from 'react';
import styles from './Trips.module.css'

// Services
import * as tripService from '../../services/tripService'

// Components
import TripCard from '../../components/TripCard/TripCard'
import AddTripForm from '../../components/AddTripForm/AddTripForm'

function Trips(props) {
  const [trips, setTrips] = useState([])
  const [showAddTripForm, setShowAddTripForm] = useState(false)
  
  const handleAddTrip = async (newTripData) => {
    const newTrip = await tripService.create(newTripData);
    setTrips([newTrip, ...trips]);
  }
  
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

  const handleToggle = () => {
    setShowAddTripForm(!showAddTripForm)
  }
  
  return (
      <div className={styles.container}>
        <button 
          type="button"
          className={styles.plan}
          onClick={handleToggle}
        >Plan a Trip</button>
        {showAddTripForm && 
          <AddTripForm
            handleAddTrip={handleAddTrip}
          ></AddTripForm>
        }
        {trips.map(trip => {
          return (
            <TripCard
              key={trip._id}
              trip={trip}
              handleDeleteTrip={handleDeleteTrip}
            /> 
          )
        })}
      </div>
  )
}

export default Trips
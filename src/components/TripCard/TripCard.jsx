import React from 'react';
import styles from './TripCard.module.css'
import { Link } from 'react-router-dom'


function TripCard(props) {
    
    return (
        <>
        <Link to={`/trips/${props.trip._id}`}>
            <div className={styles.container}>
                <h2>{props.trip.name}</h2>
                <p>{props.trip.notes}</p>
                {props.trip.date.split('T')[0]}
            </div>
        </Link>
        <button 
            type="button"
            onClick={() => props.handleDeleteTrip(props.trip._id)}
        >
                Delete Trip
        </button>
        </>
    )
}

export default TripCard;
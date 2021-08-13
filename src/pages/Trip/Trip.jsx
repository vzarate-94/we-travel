import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dateFormat from 'dateformat'

// Styles
import styles from './Trip.module.css'

// Services
import * as tripService from '../../services/tripService'
import * as activityService from '../../services/activityService'
import * as checklistService from '../../services/checklistService'

// Components
import EditTripForm from '../../components/EditTripForm/EditTripForm'
import Activities from '../Activities/Activities'
import Checklists from '../Checklists/Checklists'
import BudgetForm from '../../components/BudgetForm/BudgetForm'

function Trip(props) {
  const { id } = useParams()
  
  const [trip, setTrip] = useState({})
  const [activities, setActivities] = useState([])
  const [checklists, setChecklists] = useState([])
  useEffect(() => {
    const fetchTrip = async () => {
        try {
            const trip = await tripService.getTripById(id)
            setTrip(trip)
            setActivities(trip.activities)
            setChecklists(trip.checklists)
        } catch (error) {
            throw error
        }
    }
    fetchTrip()
    return () => { setTrip(null) }
}, [id])
  
  const [showEditTripForm, setShowEditTripForm] = useState(false)
  
  const handleEditTripToggle = () => {
    setShowEditTripForm(!showEditTripForm)
  }

  const [showBudgetForm, setShowBudgetForm] = useState(false)
  
  const handleBudgetToggle = () => {
    setShowBudgetForm(!showBudgetForm)
  }


  const handleUpdateTrip = async (updatedTripData) => {
    try {
      const updatedTrip = await tripService.update(updatedTripData, id)
      const newTripState = {
          ...trip, 
          name: updatedTrip.name, 
          notes: updatedTrip.notes, 
          date: updatedTrip.date
      }
      setTrip(newTripState)
    } catch (error){
        throw error
    } 
  }

  const handleAddBudget = async (newBudgetData) => {
    try {
      const updatedTrip = await tripService.update({budget: newBudgetData}, id)
      console.log(updatedTrip);
      setTrip(updatedTrip)
    }
    catch (error) {
      throw error
    }
  }

  const handleAddActivity = async (newActivityData) => {
    const newActivity = await activityService.create(newActivityData);
    await tripService.update({$push: {activities: newActivity._id}}, id)
    setActivities([newActivity, ...activities]);
  }

  const handleDeleteActivity = id => {
    activityService.deleteOne(id)
      .then(
        setActivities(activities.filter(activity => id !== activity._id))
      ) 
  }

  const handleAddChecklist = async (newChecklistData) => {
    try {
      const newChecklist = await checklistService.create(newChecklistData);
      await tripService.update({$push: {checklists: newChecklist._id}}, id)
      setChecklists([newChecklist, ...checklists]);
    } catch (error) {
       throw error
    }
  }

  const handleDeleteChecklist = id => {
    checklistService.deleteOne(id)
      .then(
        setChecklists(checklists.filter(checklist => id !== checklist._id))
      ) 
  }  

  return (
    <div className={styles.container}>
      <h1>{trip.name}</h1>
      <h2>{trip.notes}</h2>
      <h3>{dateFormat(trip.date, "mediumDate", true)}</h3>
      {trip.name &&
      <button 
          type="button"
          className={styles.edit}
          onClick={handleEditTripToggle}
        >Edit Trip</button>}
      {showEditTripForm && trip.name &&
        <EditTripForm
          trip={trip}
          handleUpdateTrip={handleUpdateTrip}
        /> 
      }
      <Checklists
        checklists={checklists}
        handleAddChecklist={handleAddChecklist}
        handleDeleteChecklist={handleDeleteChecklist}
      />
      {trip.name &&
      <button 
          type="button"
          className={styles.edit}
          onClick={handleBudgetToggle}
        >
          {
            trip.budget?.total || trip.budget?.travel || trip.budget?.food || trip.budget?.lodging || trip.budget?.activities || trip.budget?.misc
            ? 'Edit Budget' : 'Set a Budget'}
        </button>}
      {showBudgetForm && trip.name &&
        <BudgetForm
          trip={trip}
          handleAddBudget={handleAddBudget}
        /> 
      }
      <Activities
        activities={activities}
        handleAddActivity={handleAddActivity}
        handleDeleteActivity={handleDeleteActivity}
      />
    </div>
  )
}

export default Trip

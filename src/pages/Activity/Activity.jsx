import React, { useEffect, useState } from 'react';
import styles from './Activity.module.css'
import * as activityService from '../../services/activityService'
import { useParams } from 'react-router-dom'
import EditActivityForm from '../../components/EditActivityForm/EditActivityForm';
import dateFormat from 'dateformat'

function Activity(props) {
  const { id } = useParams()
  const [activity, setActivity] = useState({})

  const handleUpdateActivity = async (updatedActivityData) => {
    try {
      const updatedActivity = await activityService.update(updatedActivityData, id)
      const newActivityState = {
          ...activity, 
          name: updatedActivity.name,
          location: updatedActivity.location,
          address: updatedActivity.address,
          notes: updatedActivity.notes,
          cost: updatedActivity.cost,
          date: updatedActivity.date
      }
      setActivity(newActivityState)
    } catch (error){
        throw error
    } 
  }
  
  useEffect(() => {
    const fetchActivity = async () => {
        try {
            const activity = await activityService.getActivityById(id)
            setActivity({...activity, date: activity.date})
        } catch (error) {
            throw error
        }
    }
    fetchActivity()
    return () => { setActivity(null) }
  }, [id])

  const [showEditActivityForm, setShowEditActivityForm] = useState(false)
  const handleToggle = () => {
    setShowEditActivityForm(!showEditActivityForm)
  }


  return (
    <div className={styles.container}>
        <h1>Name: {activity.name}</h1>
        <h2>Location: {activity.location}</h2>
        <h2>Address: {activity.address}</h2>
        <p> <strong>Notes</strong>: {activity.notes}</p>
        <h3>Cost: {activity.cost}</h3>
        <h3>Date: {dateFormat(activity.date, "mediumDate", true)}</h3>
        <button 
          type="button"
          className={styles.edit}
          onClick={handleToggle}
        >Edit Activity</button>
        {showEditActivityForm && activity.name && activity.location &&
            <EditActivityForm
            activity={activity}
            handleUpdateActivity={handleUpdateActivity}
            />
        }
        
    </div>
    
  )
}

export default Activity

import React, { useState } from 'react';
import styles from './Activities.module.css'

// Components
import ActivityCard from '../../components/ActivityCard/ActivityCard'
import AddActivityForm from '../../components/AddActivityForm/AddActivityForm'

function Activities(props){
  const {activities, handleAddActivity, handleDeleteActivity} = props
  const [showAddActivityForm, setShowAddActivityForm] = useState(false)
  const handleToggle = () => {
    setShowAddActivityForm(!showAddActivityForm)
  }
  
  return (
      <div className={styles.container}>
        <button 
          type="button"
          className={styles.plan}
          onClick={handleToggle}
        >Plan Activity</button>
        {showAddActivityForm && 
          <AddActivityForm
            handleAddActivity={handleAddActivity}
          ></AddActivityForm>
        }
        {activities?.map((activity, i) => {
          return (
            <ActivityCard
              key={i}
              activity={activity}
              handleDeleteActivity={handleDeleteActivity}
            /> 
          )
        })}
      </div>
  )
}

export default Activities
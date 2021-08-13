import React, { useState } from 'react';

import dateFormat from 'dateformat'

// Styles
import styles from './EditActivityForm.module.css'

function EditActivityForm({activity, handleUpdateActivity}) {
  const [formData, setFormData] = useState({
    name: activity.name,
    location: activity.location,
    address: activity.address,
    notes: activity.notes,
    cost: activity.cost,
    date: dateFormat(activity.date, "yyyy-mm-dd", true),
  })
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleUpdateActivity(formData)
  }

  return (
      <div className={styles.container}>
        <h2>Edit Activity</h2>
        <form id="edit-activity-form" onSubmit={handleSubmit}>
          <label htmlFor="activity-name">Name</label>
          <input
            id="activity-name" 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="off"
            placeholder="activity name"
          />
          <label htmlFor="activity-location">Location</label>
          <input
            id="activity-location" 
            type="text" 
            name="location"
            value={formData.location}
            onChange={handleChange}
            autoComplete="off"
            placeholder="activity location"
          />
          <label htmlFor="activity-address">Address</label>
          <input
            id="activity-address" 
            type="text" 
            name="address"
            value={formData.address}
            onChange={handleChange}
            autoComplete="off"
            placeholder="activity address"
          />
          <label htmlFor="activity-notes">Notes</label>
          <textarea 
            id="activity-notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            cols="30" 
            rows="10" 
            placeholder="type activity notes here"
          ></textarea>
          <label htmlFor="activity-cost">Cost</label>
          <input
            id="activity-cost" 
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
          />
          <label htmlFor="activity-date">Date</label>
          <input 
            id="activity-date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <button type="submit">
            Save
          </button>
        </form>
      </div>
  )
}

export default EditActivityForm
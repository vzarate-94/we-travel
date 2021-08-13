import React, { useState } from 'react';
import styles from './Checklists.module.css'

// Components
import ChecklistCard from '../../components/ChecklistCard/ChecklistCard'
import AddChecklistForm from '../../components/AddChecklistForm/AddChecklistForm'

function Checklists(props){
  const {checklists, handleAddChecklist, handleDeleteChecklist} = props
  const [showAddChecklistForm, setShowAddChecklistForm] = useState(false)
  const handleToggle = () => {
    setShowAddChecklistForm(!showAddChecklistForm)
  }
  
  return (
      <div className={styles.container}>
        <button 
          type="button"
          className={styles.plan}
          onClick={handleToggle}
        >Add Checklist</button>
        {showAddChecklistForm && 
          <AddChecklistForm
            handleAddChecklist={handleAddChecklist}
          ></AddChecklistForm>
        }
        {checklists?.map((checklist, i) => {
          return (
            <ChecklistCard
              key={i}
              checklist={checklist}
              handleDeleteChecklist={handleDeleteChecklist}
            /> 
          )
        })}
      </div>
  )
}

export default Checklists
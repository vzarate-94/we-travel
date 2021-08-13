import React, {useState} from 'react';

// Styles
import styles from './BudgetForm.module.css'

// Services

function BudgetForm({trip, handleAddBudget}) {
  const {budget} = trip;


  const [formData, setFormData] = useState({
    total: budget ? budget.total : 0,
    travel: budget ? budget.travel : 0,
    lodging: budget ? budget.lodging : 0,
    food: budget ? budget.food : 0,
    activities: budget ? budget.activities : 0,
    misc: budget ? budget.misc : 0
  })
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: parseInt(e.target.value)})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddBudget(formData)
  }

  return (
      <div className={styles.container}>
        {  
           budget?.total || budget?.travel || budget?.food || budget?.lodging || budget?.activities || budget?.misc ?
          <h2>Your {trip.name} Budget</h2>
          :
          <h2>Set Your Budget</h2>
        }
        <form 
           id="add-budget-form" 
           onSubmit={handleSubmit}
           className={styles.form}
        >
          <label htmlFor="budget-total">Total Budget</label>
          <input
            id="budget-cost" 
            type="number"
            name="total"
            min={0}
            value={formData.total}
            onChange={handleChange}
          /><label htmlFor="budget-total">Travel</label>
          <input
            id="budget-travel" 
            type="number"
            name="travel"
            min={0}
            value={formData.travel}
            onChange={handleChange}
          /><label htmlFor="budget-cost">Lodging</label>
          <input
            id="budget-lodging" 
            type="number"
            name="lodging"
            min={0}
            value={formData.lodging}
            onChange={handleChange}
          /><label htmlFor="budget-cost">Food</label>
          <input
            id="budget-food" 
            type="number"
            name="food"
            min={0}
            value={formData.food}
            onChange={handleChange}
          /><label htmlFor="budget-cost">Activities</label>
          <input
            id="budget-activities" 
            type="number"
            name="activities"
            min={0}
            value={formData.activities}
            onChange={handleChange}
          /><label htmlFor="budget-cost">misc</label>
          <input
            id="budget-misc" 
            type="number"
            name="misc"
            min={0}
            value={formData.misc}
            onChange={handleChange}
          />
          <button type="submit">
            Save Budget
          </button>
        </form>
      </div>
  )
}

export default BudgetForm
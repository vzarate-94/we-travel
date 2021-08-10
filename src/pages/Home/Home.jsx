import React from 'react';
import AddTripForm from '../../components/AddTripForm/AddTripForm'
import Trips from '../../pages/Trips/Trips'
import AddActivityForm from '../../components/AddActivityForm/AddActivityForm'
import styles from './Home.module.css'


function Home(props) {
  return (
      <div className={styles.body}>
          <p>Hello World! I'm the Home component.</p> 
          <AddTripForm/>
          <Trips/>
          <AddActivityForm/>
      </div>
  )
}

export default Home
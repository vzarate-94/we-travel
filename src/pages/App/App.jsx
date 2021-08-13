import React, { useState } from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import * as authService from '../../services/authService'
import Home from '../Home/Home'
import Trips from '../Trips/Trips'
import Trip from '../Trip/Trip'
import Activities from '../Activities/Activities'
import Activity from '../Activity/Activity'
import Checklists from '../Checklists/Checklists'
import Country from '../Country/Country'
import Checklist from '../Checklist/Checklist'
import './App.css'

const App = () => {
	const history = useHistory()
	const [user, setUser] = useState(authService.getUser())

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		history.push('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

	return (
			<div>
			<NavBar user={user} handleLogout={handleLogout}/>
			
			<Route exact path='/'>
				<Landing user={user} />
			</Route>
			<Route exact path='/signup'>
				{user ? 
					<Redirect to='/' /> : 
					<Signup handleSignupOrLogin={handleSignupOrLogin}/>
				}
			</Route>
			<Route exact path='/login'>
				{user ? 
					<Redirect to='/' /> : 
					<Login handleSignupOrLogin={handleSignupOrLogin}/>
				}
			</Route>
			<Route exact path='/home'>
				{user ? <Home /> : <Redirect to='/login'/>}
			</Route>
			<Route exact path='/trips'>
				{user ? <Trips user={user} /> : <Redirect to='/login'/>}
			</Route>

			<Route exact path='/trips/:id'>
				{user ? <Trip user={user} /> : <Redirect to='/login'/>}
			</Route>
			<Route exact path='/activities'>
				{user ? <Activities user={user} /> : <Redirect to='/login'/>}
			</Route>
			<Route exact path='/activities/:id'>
				{user ? <Activity user={user} /> : <Redirect to='/login'/>}
			</Route>
			<Route exact path='/inspirations/:id'>
				{user ? <Country user={user} /> : <Redirect to='/login'/>}
			</Route>
			<Route exact path='/checklists'>
				{user ? <Checklists user={user} /> : <Redirect to='/login'/>}
			</Route>
			<Route exact path='/checklists/:id'>
				{user ? <Checklist user={user} /> : <Redirect to='/login'/>}
			</Route>
		
		</div>
	)
}

export default App

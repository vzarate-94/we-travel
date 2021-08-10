import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
	return (
		<nav className={styles.container}>
			<div>
			{user ? (
				<ul>
					<li>Welcome, {user.name}</li>
					<li className={styles.navLinks}>
						<NavLink to='' onClick={handleLogout}>Log out</NavLink>
					</li>
					<li className={styles.navLinks}>
						<NavLink to="/users">Users</NavLink>
					</li>
					<li className={styles.navLinks}>
						<NavLink to="/home">Home</NavLink>
					</li>
					<li className={styles.navLinks}>
						<NavLink to="/trips">Trips</NavLink>
					</li>
				</ul>
			) : (
				<ul>
					<li className={styles.navLinks}>
						<NavLink to="/login">Log In</NavLink>
					</li>
					<li className={styles.navLinks}>
						<NavLink to="/users">Users</NavLink>
					</li>
					<li className={styles.navLinks}>
						<NavLink to="/signup">Sign Up</NavLink>
					</li>
				</ul>
			)}
			</div>
		</nav>
	)
}

export default NavBar

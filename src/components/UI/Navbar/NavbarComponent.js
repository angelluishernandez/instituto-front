import React, { useState, useEffect } from "react";
import { NavbarWrapper } from "../../styled-components/NavbarWrapper";

import { Link } from "react-router-dom";
import { SmallButtonWrapper } from "../../styled-components/SmallButtonWrapper";
import { connect } from "react-redux";

const NavbarComponent = ({ currentUser, loggedIn }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		if (loggedIn && currentUser) {
			setIsLoggedIn(true);
			if (currentUser.tipo === "admin") {
				setIsAdmin(true);
			}
		}
	}, [isLoggedIn]);

	console.log(currentUser, loggedIn);

	return (
		<NavbarWrapper
			className="navbar 
	navbar-expand-sm 
	px-sm-5 
	justify-content-between"
		>
			<Link to="/">Centro 1º de Mayo</Link>
			<ul className="navbar-nav align-items-center">
				<li className="nav-item">
					<a href="#">Información del centro</a>
				</li>
				<li className="nav-item">
					<a href="#">Noticias</a>
				</li>
				<li className="nav-item">
					<a href="#">Actividades</a>
				</li>
			</ul>
			{isLoggedIn && isAdmin ? <div>Admin</div> : null}
			{isLoggedIn ? (
				<SmallButtonWrapper>Log out</SmallButtonWrapper>
			) : (
				<SmallButtonWrapper>
					<Link to="/login">Login</Link>
				</SmallButtonWrapper>
			)}
		</NavbarWrapper>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.authentication.user,
		loggedIn: state.authentication.loggedIn,
	};
};

export default connect(mapStateToProps)(NavbarComponent);

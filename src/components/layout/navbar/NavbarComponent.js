import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ListItems from "./ListItems";

import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
import {
	Typography,
	AppBar,
	Toolbar,
	IconButton,
	makeStyles,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const NavbarComponent = ({
	currentUser,
	loggedIn,
	open,
	handleDrawerOpen,
	setOpen,
	handleDrawerClose,
}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	const { height, width } = useWindowDimensions();

	const useStyles = makeStyles((theme) => ({
		grow: {
			flexGrow: 1,
		},
		appBar: {
			transition: theme.transitions.create(["margin", "width"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			backgroundColor: "#ee5a5a",
		},
		toolBar: {
			display: "flex",
			justifyContent: "space-between",
		},

		menuButton: {
			// marginRight: theme.spacing(2),
		},
		search: {},
	}));

	const classes = useStyles();

	useEffect(() => {
		if (loggedIn && currentUser) {
			setIsLoggedIn(true);
			if (currentUser.tipo === "admin") {
				setIsAdmin(true);
			}
		}
	}, [isLoggedIn]);

	return (
		<AppBar
			position="relative"
			className={clsx(classes.appBar, {
				[classes.appBarShift]: open,
			})}
		>
			<Toolbar className={classes.toolBar}>
				<div>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerOpen}
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<Menu />
					</IconButton>
				</div>

				<div>
					<Link to="/">
						<Typography variant="h6" noWrap className="mr-2">
							Centro 1ª de Mayo
						</Typography>
					</Link>
				</div>

				{width < 700 ? null : (
					<>
						<div>
							<Link to="/informacion">
								<Typography variant="h6" noWrap className="mr-2">
									Información sobre el centro
								</Typography>
							</Link>
						</div>
						<div>
							<Link to="/noticias">
								<Typography variant="h6" noWrap className="mr-2">
									Noticias
								</Typography>
							</Link>
						</div>

						<div>
							<Link to="/noticias">
								<Typography variant="h6" noWrap className="mr-2">
									Noticias
								</Typography>
							</Link>
						</div>
					</>
				)}

				<div>
					<ExitToAppSharpIcon />
				</div>
			</Toolbar>
		</AppBar>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.authentication.user,
		loggedIn: state.authentication.loggedIn,
	};
};

export default connect(mapStateToProps)(NavbarComponent);

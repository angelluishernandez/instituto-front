import React, { useState } from "react";
import NavbarComponent from "./navbar/NavbarComponent";

import { makeStyles } from "@material-ui/core/styles";

import Sidebar from "./Sidebar/Sidebar";

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
	},
}));

const Layout = () => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<NavbarComponent
				handleDrawerOpen={handleDrawerOpen}
				open={open}
				setOpen={setOpen}
				handleDrawerClose={handleDrawerClose}
			/>
			<Sidebar
				open={open}
				handleDrawerOpen={handleDrawerOpen}
				handleDrawerClose={handleDrawerClose}
			/>
		</div>
	);
};

export default Layout;

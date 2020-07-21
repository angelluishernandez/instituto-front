import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	ListSubheader,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Collapse,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

const ListItems = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<List
			component="nav"
			aria-labelledby="nested-list-subheader"
			className={classes.root}
		>
			<ListItem button onClick={handleClick}>
				<ListItemIcon>
					<InfoIcon />
				</ListItemIcon>
				<Link to="/informacion">
					<ListItemText primary="Información" />
				</Link>
				<ListItemText primary={"Your helpers"} className={classes.title} />
				{open ? <ExpandLess /> : <ExpandMore />}{" "}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				Hello
			</Collapse>
		</List>
	);
};

export default ListItems;

import React, { useState } from "react";
import {
	Divider,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Collapse,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import AssignmentTurnedInSharpIcon from "@material-ui/icons/AssignmentTurnedInSharp";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SidebarContentItem from "./SidebarContentItem";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	title: {
		fontWeight: "800",
	},
}));

const SideBarContent = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const classes = useStyles();

	const informationRoutes = [
		{ url: "/oferta-formativa", text: "Oferta formativa" },
		{ url: "/organigrama", text: "Sobre nosotros" },
	];

	return (
		<div className="SideBarContent">
			<div className={classes.toolbar} />
			<Divider />
			<List>
				{/* Informacion */}
				<SidebarContentItem routes={informationRoutes} />

				{/* Noticias */}
				<ListItem button onClick={handleClick}>
					<ListItemIcon>
						<AssignmentTurnedInSharpIcon />
					</ListItemIcon>
					<ListItemText primary={"Noticias"} className={classes.title} />
				</ListItem>

				<Collapse in={open} timeout="auto" unmountOnExit></Collapse>
			</List>
			<Divider />
		</div>
	);
};

export default SideBarContent;

import React, { useState } from "react";
import {
	List,
	Collapse,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	title: {
		fontWeight: "800",
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

const SidebarContentItem = ({ routes }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<>
			<ListItem onClick={handleClick}>
				<ListItemIcon>
					<InfoIcon />
				</ListItemIcon>
				<Link to="/informacion">
					<ListItemText primary={"Informacion"} className={classes.title} />
				</Link>
				{open ? <ExpandLess /> : <ExpandMore />}{" "}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List>
					{routes.map((route, index) => {
						return (
							<ListItem button className={classes.nested}>
								<Link to={route.url}>
									<ListItemText primary={route.text} />
								</Link>
							</ListItem>
						);
					})}
				</List>
			</Collapse>
		</>
	);
};

export default SidebarContentItem;

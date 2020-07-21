import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { List, ListItem, ListItemText } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { Collapse } from "react-bootstrap";

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

const CoursesItem = ({ course, setCurrentCourse }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	return (
		<>
			<ListItem button onClick={() => setCurrentCourse(course)}>
				<ListItemText primary={course.nombre} />
			</ListItem>
		</>
	);
};

export default CoursesItem;

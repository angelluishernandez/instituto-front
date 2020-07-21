import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import CurrentCourseInfo from "./CurrentCourseInfo";
import CoursesItem from "./CoursesItem";

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

const CursosList = ({ coursesList, horario }) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const [currentCourse, setCurrentCourse] = useState({});

	console.log(horario);
	return (
		<>
			{horario !== undefined && (
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<a
							href={horario.url}
							alt={horario.nombre}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Typography variant="h3">{horario.nombre} </Typography>
						</a>
					</Grid>
					<Grid item xs={12} sm={6}>
						<List
							component="nav"
							aria-labelledby="nested-list-subheader"
							subheader={
								<ListSubheader component="div" id="nested-list-subheader">
									E.S.O.
								</ListSubheader>
							}
							className={classes.root}
						>
							{coursesList.map((course) => {
								return (
									<CoursesItem
										course={course}
										setCurrentCourse={setCurrentCourse}
									/>
								);
							})}
						</List>
					</Grid>

					<Grid item xs={12} sm={6}>
						{Object.keys(currentCourse).length > 1 ? (
							<CurrentCourseInfo currentCourse={currentCourse} />
						) : null}
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default CursosList;

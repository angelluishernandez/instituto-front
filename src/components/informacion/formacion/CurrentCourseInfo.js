import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Paper,
	Grid,
	Divider,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableContainer,
} from "@material-ui/core";
import MateriasTable from "./MateriasTable";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.primary,
	},
}));

const CurrentCourseInfo = ({ currentCourse }) => {
	const classes = useStyles();
	console.log(currentCourse.materias);
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Typography variant="p">{currentCourse.nombre}</Typography>
					</Paper>
				</Grid>
				<Divider />
				<Typography variant="h3">Asignaturas</Typography>
				<Grid item xs={12}>
					{currentCourse !== undefined ? (
						<MateriasTable materias={currentCourse.materias} />
					) : null}
				</Grid>
				<Typography variant="h3">Optativas</Typography>

				<Grid item xs={12}>
					{currentCourse !== undefined ? (
						<MateriasTable materias={currentCourse.optativas} />
					) : null}
				</Grid>
				<Typography variant="h3">Refuerzos</Typography>

				<Grid item xs={12}>
					{currentCourse !== undefined ? (
						<MateriasTable materias={currentCourse.refuerzos} />
					) : null}
				</Grid>
			</Grid>
		</div>
	);
};

export default CurrentCourseInfo;

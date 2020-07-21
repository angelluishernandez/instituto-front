import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableContainer,
	Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
	table: {
		// minWidth: 650,
	},
});

const MateriasTable = ({ materias }) => {
	const classes = useStyles();
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} style={{ maxWidth: "100%" }}>
				<TableHead>
					<TableRow>
						<TableCell>Asignatura</TableCell>
						<TableCell align="right">Horas a la semana</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{materias !== undefined ? (
						<>
							{" "}
							{materias.map((materia, index) => {
								return (
									<TableRow key={index}>
										<TableCell component="th" scope="row" width="5%">
											{materia.nombre}
										</TableCell>
										<TableCell align="right" width="5%">
											{materia.horas}
										</TableCell>
									</TableRow>
								);
							})}
						</>
					) : null}

					<TableRow>
						<TableCell component="th" scope="row" width="5%">
							Total
						</TableCell>
						<TableCell align="right" width="5%">
							{/* {materias.horas.reducer((acc, num) => acc + num)} */}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default MateriasTable;

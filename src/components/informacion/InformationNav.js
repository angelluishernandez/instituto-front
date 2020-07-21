import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: "5%",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	gridItem: {
		padding: "0.2em",
		textAlign: "center",
	},
}));

const InformationNav = ({ urls }) => {
	// Call to get basic information
	// Enlaces
	// Proyecto educativo (pdf link) // Misión y valores(text based component) // Plan de convivencia(pdf link) // Reglamento de régimen interno(pdf link)
	const classes = useStyles();

	return (
		<Grid container spacing={3} className={classes.root}>
			<Typography variant="h3">Links de interés</Typography>
			{urls
				.filter((item) => !item.img)
				.map((urlItem, index) => {
					return (
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<a target="_blank" rel="noopener noreferrer" href={urlItem.url}>
									<Typography variant="h6" className={classes.gridItem}>
										{urlItem.titulo}
									</Typography>
								</a>
							</Paper>
						</Grid>
					);
				})}
		</Grid>
		// <nav className="navbar navbar-expand-lg navbar-light bg-light">
		// 	<div className="collapse navbar-collapse">
		// 		<ul className="navbar-nav mr-auto">
		// 			{urls.map((urlItem, index) => {
		// 				return (
		// 					<li className="nav-item" key={index}>
		// 						<a
		// 							className="nav-link"
		// 							target="_blank"
		// 							rel="noopener noreferrer"
		// 							href={urlItem.url}
		// 						>
		// 							{urlItem.titulo}
		// 						</a>
		// 					</li>
		// 				);
		// 			})}
		// 		</ul>
		// 	</div>
		// </nav>
	);
};

export default InformationNav;

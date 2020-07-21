import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";
import Consejo from "./Consejo";
import Organigrama from "./Organigrama";
import ProgramasEuropeos from "./ProgramasEuropeos";
import Departments from "./Departments";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

const OrganizationComponent = () => {
	/* Required Info
			
		
			Departamentos => Editable + texto + Departamento de orientación
			Organos de gobierno => {
				Equipo directivo{
					titulo, 
					nombre, 
					email
				}

				Texto. 
			Tutorías=>{
				disciplina{
					nombre, grupo
				}
				texto
			}
	
			}

*/
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div>
			<AppBar position="static">
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="simple tabs example"
				>
					<Tab label="Organigrama" {...a11yProps(0)} />
					<Tab label="Programas europeos" {...a11yProps(1)} />
					<Tab label="Departamentos" {...a11yProps(2)} />
					<Tab label="Item Three" {...a11yProps(3)} />
					<Tab label="Item Three" {...a11yProps(4)} />
					<Tab label="Consejo de gobierno" {...a11yProps(5)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<Organigrama />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<ProgramasEuropeos />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Departments />
			</TabPanel>
			<TabPanel value={value} index={3}>
				Item Three
			</TabPanel>{" "}
			<TabPanel value={value} index={4}>
				Item Three
			</TabPanel>{" "}
			<TabPanel value={value} index={5}>
				<Consejo />
			</TabPanel>
		</div>
	);
};

export default OrganizationComponent;

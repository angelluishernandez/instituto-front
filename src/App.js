import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/HomeComponent";
import CreateNews from "./components/news/CreateNews";
import NewsComponent from "./components/news/NewsComponent";
import LoginComponent from "./components/user/LoginComponent";
import CreateUserComponent from "./components/user/CreateUserComponent";
import FooterComponent from "./components/UI/Footers/FooterComponent";
import FooterAdresses from "./components/UI/Footers/FooterComponent";
import EditHomeComponent from "./components/home/home-edit/EditHomeComponet";
import InformationComponent from "./components/informacion/InformacionComponent";
import Layout from "./components/layout/Layout";
import OfertaFormativa from "./components/informacion/oferta-formativa/OfertaFormativa";
import OrganizationComponent from "./components/informacion/Organization/OrganizationComponent";
import AddDepartment from "./components/informacion/Organization/AddDepartment";

function App() {
	return (
		<div className="App">
			<Layout />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={LoginComponent} />
				<Route
					exact
					path="/oferta-formativa"
					component={InformationComponent}
				/>
				<Route exact path="/editar-departamentos" component={AddDepartment} />
				<Route exact path="/organigrama" component={OrganizationComponent} />
				<Route exact path="/editar-home" component={EditHomeComponent} />
				<Route exact path="/informacion" component={InformationComponent} />
				<Route exact path="/crear-usuario" component={CreateUserComponent} />
				<Route exact path="/noticias" component={NewsComponent} />
				<Route exact path="/noticias/crear-noticia" component={CreateNews} />
			</Switch>
			<FooterComponent />
			<FooterAdresses />
		</div>
	);
}

export default App;

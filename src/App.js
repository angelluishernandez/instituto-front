import React from "react";
import "./App.css";
import NavbarComponent from "./components/UI/Navbar/NavbarComponent";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/HomeComponent";
import EditarFormacion from "./components/formacion/EditarFormacion";
import CursosList from "./components/formacion/CursosList";
import CursoDetails from "./components/formacion/CursoDetails";
import CreateNews from "./components/news/CreateNews";
import NewsComponent from "./components/news/NewsComponent";
import LoginComponent from "./components/user/LoginComponent";
import CreateUserComponent from "./components/user/CreateUserComponent";
import FooterComponent from "./components/UI/Footers/FooterComponent";
import FooterAdresses from "./components/UI/Footers/FooterComponent";
import EditHomeComponent from "./components/home/home-edit/EditHomeComponet";

function App() {
	return (
		<div className="App">
			<NavbarComponent />

			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/cursos" component={CursosList} />
				<Route exact path="/login" component={LoginComponent} />
				<Route exact path="/editar-home" component={EditHomeComponent} />
				<Route exact path="/crear-usuario" component={CreateUserComponent} />
				<Route exact path="/crear-curso" component={EditarFormacion} />
				<Route exact path="/noticias" component={NewsComponent} />
				<Route exact path="/noticias/crear-noticia" component={CreateNews} />
				<Route exact path="/cursos/:cursoId" component={CursoDetails} />
			</Switch>
			<FooterComponent />
			<FooterAdresses />
		</div>
	);
}

export default App;

import React, { useState, useEffect } from "react";
import "./HomeComponent.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CarouselComponent from "../UI/Carousel/CarouselComponent";
import NewsContainer from "./NewsContainer";
import ImgGalleryComponent from "../UI/ImgGallery/ImgGalleryComponent";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const HomeComponent = ({ currentUser, isLoggedIn }) => {
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		if (currentUser.tipo === "admin") {
			setIsAdmin(true);
		}
	}, [isAdmin]);

	return (
		<>
			{/* ************************************** */}

			{/* Editar paǵina */}

			{/* ************************************** */}

			{isAdmin && (
				<div className="d-flex justify-content-center">
					<Link to="/editar-home">
						<button className="btn btn-success ">Editar esta página</button>
					</Link>
				</div>
			)}

			{/* ************************************** */}

			{/* Slideshow */}

			{/* ************************************** */}

			<div className="slideshow">
				<CarouselComponent />
			</div>
			<div className="container text-center">
				<div className="row ">
					<div className="text-left ">
						<h1>
							Centro de Educación Secundaria y Formación Profesional 1º de Mayo
						</h1>
						<p>
							En el CES y FP 1º de Mayo se imparten cursos de Educación
							Secundaria Obligatoria y Formación Profesional. Nuestro objetivo
							es formar mujeres y hombres libres, responsables y capaces, que
							defiendan el cuidado de la naturaleza y busquen el bienestar
							cultural, material y la justicia social.
						</p>
					</div>
				</div>
				<hr />

				{/* ************************************** */}

				{/* Noticias */}

				{/* ************************************** */}

				<h3>Últimas noticias </h3>
				<div className="  d-flex justify-content-between ">
					{" "}
					<NewsContainer />
				</div>
				<h3>Consulta más noticias</h3>

				<div className="row">
					{/* <div className="col-6 col-sm-6">
					{content.map((contentItem, index) => {
						return <HomeContent key={index} {...contentItem} />;
					})} */}
					{/* </div> */}
				</div>
				<hr />

				{/* ************************************** */}

				{/* Galerías */}

				{/* ************************************** */}

				{/* En este componente se tienen que cargar las imágenes que luego se pasarán como props */}

				<div>
					<h3>Últimas actividades </h3>
					<ImgGalleryComponent />
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	currentUser: state.authentication.user,
	isLoggedIn: state.authentication.isLoggedIn,
});

export default connect(mapStateToProps)(HomeComponent);
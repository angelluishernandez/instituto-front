import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
	const content = [
		{
			title: "ESO",
			text: "Del 19 de Mayo al 5 de Junio",
			subtitulo: "Información básica",
			img:
				"https://www.asdubai.org/sites/default/files/styles/de2e_standard/public/images/2020-01/elementary.jpg?h=cee6f4f2&itok=K4dxaaUQ",
			url: "/",
		},
		{
			title: "ESO",
			text: "Del 19 de Mayo al 5 de Junio",
			subtitulo: "Información básica",
			img:
				"https://www.asdubai.org/sites/default/files/styles/de2e_standard/public/images/2020-01/elementary.jpg?h=cee6f4f2&itok=K4dxaaUQ",

			url: "/",
		},
		{
			title: "ESO",
			text: "Del 19 de Mayo al 5 de Junio",
			subtitulo: "Información básica",
			img:
				"https://www.asdubai.org/sites/default/files/styles/de2e_standard/public/images/2020-01/elementary.jpg?h=cee6f4f2&itok=K4dxaaUQ",
			url: "/",
		},
	];

	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel
			activeIndex={index}
			controls={true}
			interval={3000}
			onSelect={handleSelect}
			indicators={false}
		>
			{content.map((item, index) => {
				return (
					<Carousel.Item key={index}>
						<img className="d-block w-100" src={item.img} alt="first slide" />
						<Carousel.Caption>
							<div className="row">
								<div className="col-6"></div>
								<div className="col-6 bg-danger  my-auto ">
									<div class="carousel-content">
										<h3>{item.title}</h3>
										<p>{item.text}</p>
										<Link to={item.url}>Ver más</Link>
									</div>
								</div>
							</div>{" "}
						</Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};

export default CarouselComponent;

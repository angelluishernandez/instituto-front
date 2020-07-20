import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const CarouselComponent = ({ carouselItems }) => {
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
			{carouselItems.map((item, index) => {
				return (
					<Carousel.Item key={index}>
						<img
							className="d-block w-100"
							src={item.imgUrl}
							alt="first slide"
						/>
						<Carousel.Caption>
							<div className="row">
								<div className="col-6"></div>
								<div className="col-6 bg-danger  my-auto ">
									<div class="carousel-content">
										<h3>{item.title}</h3>
										<p>{item.text}</p>
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

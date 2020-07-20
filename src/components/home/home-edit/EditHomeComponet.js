import React, { useState } from "react";
import { connect } from "react-redux";
import homeService from "../../../services/homeService";
import AddItem from "./AddItem";
import ItemList from "./ItemList";

const EditHomeComponent = () => {
	const [carouselItems, setCarousel] = useState([]);
	const [galleryItems, setGallery] = useState([]);

	// Carousel item

	const [carouselItem, setCarruselItem] = useState({});
	const [galleryItem, setGalleryItem] = useState({});
	const [carouselItemSubmitted, setCarruselItemSubmitted] = useState(false);
	const [galleryItemSubmitted, setGalleryItemSubmitted] = useState(false);
	const [type, setType] = useState("gallery");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (type === "carousel") {
			homeService
				.addCarouselItem({ carouselItem })
				.then(() => setCarruselItemSubmitted(true));
		} else {
			homeService
				.addGalleryItem({ galleryItem })
				.then(() => setGalleryItemSubmitted(true));
		}
	};

	const handleDeleteCarouselItem = (item) => {};

	const handleDeleteGalleryImg = (image) => {};

	return (
		<div className="container">
			<div className="row">
				<div className="col-10 mx-auto">
					<button
						onClick={() =>
							type === "gallery" ? setType("carousel") : setType("gallery")
						}
					>
						{type === "gallery"
							? "Añade una foto al galería"
							: "Añade una foto a la carrusel"}
					</button>

					<AddItem
						handleSubmit={handleSubmit}
						setCarruselItem={setCarruselItem}
						galleryItem={galleryItem}
						setGalleryItem={setGalleryItem}
						carouselItem={carouselItem}
						type={type}
					/>
				</div>
			</div>
			<hr className="my-5" />

			<div className="row">
				<div className="col-10 mx-auto">
					<ItemList
						items={type === "gallery" ? galleryItems : carouselItems}
						type={type}
					/>
				</div>
			</div>
		</div>
	);
};

export default connect()(EditHomeComponent);

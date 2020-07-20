import React from "react";
import ResponsiveGallery from "react-responsive-gallery";
import "./ImgGalleryComponent.css";

const ImgGalleryComponent = ({ galleryItems }) => {
	// It is necessary to create a new object with the imgClassName and src properties

	const images = galleryItems.map((item) => ({
		imgClassName: "gallery-img",
		src: item.imgUrl,
	}));

	return (
		<div>
			<ResponsiveGallery images={images} className="img-gallery" />
		</div>
	);
};

export default ImgGalleryComponent;

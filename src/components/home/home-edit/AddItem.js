import React from "react";

const AddItem = ({
	handleSubmit,
	setCarruselItem,
	galleryItem,
	setGalleryItem,
	carouselItem,
	type,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<h3>Añade una foto al {type === "gallery" ? "galería" : "carrusel"}</h3>
			<div class="form-group">
				<label>Url de la imagen</label>
				<input
					type="text"
					class="form-control"
					aria-describedby="emailHelp"
					placeholder="Url de la imagen..."
					onChange={(e) =>
						type === "carousel"
							? setCarruselItem({ ...carouselItem, imgUrl: e.target.value })
							: setGalleryItem({ ...galleryItem, imgUrl: e.target.value })
					}
				/>
			</div>
			<div class="form-group">
				<div className="alert-warning">
					La descripción de la imagen es el texto que se mostrará sobre la
					imagen
				</div>
				<label>Descripción de la imagen</label>
				<textarea
					type="text"
					class="form-control"
					placeholder="Descripción de la imagen..."
					onChange={(e) =>
						type === "carousel"
							? setCarruselItem({
									...carouselItem,
									description: e.target.value,
							  })
							: setGalleryItem({ ...galleryItem, description: e.target.value })
					}
				/>
			</div>

			<button type="submit" class="btn btn-primary">
				Submit
			</button>
		</form>
	);
};

export default AddItem;

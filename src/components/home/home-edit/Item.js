import React from "react";
import "./Item.css";
import { GalleryItemWrapper } from "../../styled-components/GalleryItemWrapper";

const Item = ({ imgUrl, description, id }) => {
	return (
		<GalleryItemWrapper className="row">
			<div className="col-2">
				<img src={imgUrl} alt="imagen" className="img-small" />
			</div>
			<div className="col-8">
				{description} {id}
			</div>
			<div className="col-2">
				<button className="btn btn-danger">Borrar</button>
				<button className="btn btn-success">Editar</button>
			</div>
		</GalleryItemWrapper>
	);
};

export default Item;

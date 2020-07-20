import React from "react";
import "./Item.css";

const Item = ({ imgUrl, description }) => {
	return (
		<div className="row">
			<div className="col-2">
				<img src={imgUrl} alt="imagen" className="img-small" />
			</div>
			<div className="col-10">{description}</div>
		</div>
	);
};

export default Item;

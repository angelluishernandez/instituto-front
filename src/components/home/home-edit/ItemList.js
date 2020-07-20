import React, { useEffect } from "react";
import Item from "./Item";

const ItemList = ({ items, type }) => {
	return (
		<div className="col-12">
			<h3>Edita {type === "gallery" ? "la galería" : "el carrusel"}</h3>
			This is the item list
			<div className="container">
				{items.map((item, index) => (
					<Item
						imgUrl={item.imgUrl}
						description={item.description}
						id={item.id}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default ItemList;

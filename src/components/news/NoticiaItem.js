import React from "react";

const NoticiaItem = ({ noticia }) => {
	const { titulo, texto, descripcion, foto } = noticia;
	return (
		<div>
			<h1>{titulo}</h1>
			<img src={foto} alt="foto" />
			<p>{descripcion}</p>
			<hr />

			<p>{texto}</p>
		</div>
	);
};

export default NoticiaItem;

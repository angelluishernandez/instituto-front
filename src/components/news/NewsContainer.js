import React from "react";
import NewsCard from "../UI/Cards/NewsCard";

const NewsContainer = ({ news }) => {
	// HAy que filtrar las tres ultimas noticias y solo mostrar estas
	// Para mostrar el resto habrá que poner un link a la página de noticias

	// Aquí se hará la llamada a la API

	return (
		<>
			{news.map((noticia, index) => {
				return <NewsCard noticia={noticia} key={index} />;
			})}
		</>
	);
};

export default NewsContainer;

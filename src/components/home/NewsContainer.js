import React from "react";
import NewsCard from "../UI/Cards/NewsCard";

const NewsContainer = () => {
	// HAy que filtrar las tres ultimas noticias y solo mostrar estas
	// Para mostrar el resto habrá que poner un link a la página de noticias

	// Aquí se hará la llamada a la API

	const noticias = [
		// Este array sigue el modelo de noticias
		{
			titulo: "Lorem fistrum duis veniam aliquip quietooor.",
			descripcion: "Lorem fistrum duis veniam aliquip quietooor.",
			foto:
				"https://www.ecestaticos.com/imagestatic/clipping/79f/e0e/79fe0e632ee019fb8e83d4dca8dfc41e/ni-en-el-colegio-ni-en-casa-millones-de-ninos-y-familias-espanolas-en-un-callejon-sin-salida.jpg?mtime=1589385923",
			texto:
				"Exercitation qui está la cosa muy malar fistro de la pradera sed et jarl te voy a borrar el cerito aliquip no te digo trigo por no llamarte Rodrigor. Amatomaa pupita diodenoo quis ahorarr hasta luego Lucas diodenoo. Consectetur velit ahorarr et. Et labore occaecat se calle ustée llevame al sircoo. Veniam a gramenawer sit amet benemeritaar aliquip condemor laboris pecador mamaar incididunt. Ut te voy a borrar el cerito qui amatomaa quis laboris de la pradera qué dise usteer. Cillum ut torpedo está la cosa muy malar por la gloria de mi madre aliqua dolore commodo.",
			etiquetas: ["una etiqueta", "otra etiqueta"],
			pieDeFoto: "Lorem fistrum duis veniam aliquip quietooor",
		},
		{
			titulo: "Lorem fistrum duis veniam aliquip quietooor.",
			descripcion: "Lorem fistrum duis veniam aliquip quietooor.",
			foto:
				"https://www.ecestaticos.com/imagestatic/clipping/79f/e0e/79fe0e632ee019fb8e83d4dca8dfc41e/ni-en-el-colegio-ni-en-casa-millones-de-ninos-y-familias-espanolas-en-un-callejon-sin-salida.jpg?mtime=1589385923",
			texto:
				"Exercitation qui está la cosa muy malar fistro de la pradera sed et jarl te voy a borrar el cerito aliquip no te digo trigo por no llamarte Rodrigor. Amatomaa pupita diodenoo quis ahorarr hasta luego Lucas diodenoo. Consectetur velit ahorarr et. Et labore occaecat se calle ustée llevame al sircoo. Veniam a gramenawer sit amet benemeritaar aliquip condemor laboris pecador mamaar incididunt. Ut te voy a borrar el cerito qui amatomaa quis laboris de la pradera qué dise usteer. Cillum ut torpedo está la cosa muy malar por la gloria de mi madre aliqua dolore commodo.",
			etiquetas: ["una etiqueta", "otra etiqueta"],
			pieDeFoto: "Lorem fistrum duis veniam aliquip quietooor",
		},
		{
			titulo: "Lorem fistrum duis veniam aliquip quietooor.",
			descripcion: "Lorem fistrum duis veniam aliquip quietooor.",
			foto:
				"https://www.ecestaticos.com/imagestatic/clipping/79f/e0e/79fe0e632ee019fb8e83d4dca8dfc41e/ni-en-el-colegio-ni-en-casa-millones-de-ninos-y-familias-espanolas-en-un-callejon-sin-salida.jpg?mtime=1589385923",
			texto:
				"Exercitation qui está la cosa muy malar fistro de la pradera sed et jarl te voy a borrar el cerito aliquip no te digo trigo por no llamarte Rodrigor. Amatomaa pupita diodenoo quis ahorarr hasta luego Lucas diodenoo. Consectetur velit ahorarr et. Et labore occaecat se calle ustée llevame al sircoo. Veniam a gramenawer sit amet benemeritaar aliquip condemor laboris pecador mamaar incididunt. Ut te voy a borrar el cerito qui amatomaa quis laboris de la pradera qué dise usteer. Cillum ut torpedo está la cosa muy malar por la gloria de mi madre aliqua dolore commodo.",
			etiquetas: ["una etiqueta", "otra etiqueta"],
			pieDeFoto: "Lorem fistrum duis veniam aliquip quietooor",
		},
	];

	return (
		<>
			{noticias.map((noticia, index) => {
				return <NewsCard noticia={noticia} key={index} />;
			})}
		</>
	);
};

export default NewsContainer;

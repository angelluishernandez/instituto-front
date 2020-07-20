import React from "react";
import { useEffect, useState } from "react";
import institutoService from "../../services/institutoService";
import NoticiaItem from "./NoticiaItem";
import { Link } from "react-router-dom";

const NewsComponent = () => {
	const [noticiasState, setNoticiasState] = useState([]);
	const [loading, setLoading] = useState(true);

	console.log(noticiasState);

	useEffect(() => {
		institutoService.listNoticias().then((res) => {
			console.log(res);
			setNoticiasState(res.data);
		});
		// eslint-disable-next-line
		setLoading(false);
	}, []);

	return (
		<div className="container">
			<div className="row mx-auto">
				<button className="btn btn-success">
					<Link to="/noticias/crear-noticia">Crear noticia</Link>
				</button>
			</div>

			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div className="row">
					{noticiasState.map((noticia, index) => {
						return <NoticiaItem key={index} noticia={noticia} />;
					})}
				</div>
			)}
		</div>
	);
};

export default NewsComponent;

import React from "react";
import { useEffect, useState } from "react";
import institutoService from "../../services/institutoService";
import { Link } from "react-router-dom";
import NewsCard from "../UI/Cards/NewsCard";
import newsService from "../../services/newsService";
import CreateNews from "./CreateNews";

const NewsComponent = ({ isAdmin, location }) => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		newsService.getNews().then((res) => {
			setNews(res.data);
		});
		// eslint-disable-next-line
		setLoading(false);
	}, []);

	return (
		<div className="container">
			{location.pathname === "/noticias" ? <CreateNews /> : null}

			{isAdmin && (
				<div className="row mx-auto">
					<button className="btn btn-success">
						<Link to="/noticias/crear-noticia">Crear noticia</Link>
					</button>
				</div>
			)}

			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div className="row">
					{news.map((newsItem, index) => {
						return (
							<NewsCard key={index} newsItem={newsItem} isAdmin={isAdmin} />
						);
					})}
				</div>
			)}
		</div>
	);
};

export default NewsComponent;

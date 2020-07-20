import React from "react";
import { Card, Button } from "react-bootstrap";

const NewsCard = ({ noticia }) => {
	return (
		<Card
			className="text-left"
			style={{ width: "18rem", marginLeft: "10px", marginRight: "10px" }}
		>
			<Card.Img variant="top" src={noticia.foto} />
			<Card.Body>
				<Card.Title>{noticia.titulo}</Card.Title>
				<Card.Text>{noticia.subtitulo}</Card.Text>
				<p className="text-muted">{noticia.descripcion}</p>
				<Button variant="primary">
					Leer más <a href="#">{noticia.id}</a>
				</Button>
			</Card.Body>
		</Card>
	);
};

export default NewsCard;

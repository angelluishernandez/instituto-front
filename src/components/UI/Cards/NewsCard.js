import React from "react";
import { Card, Button } from "react-bootstrap";

const NewsCard = ({ newsItem, isAdmin }) => {
	return (
		<>
			<Card
				className="text-left"
				style={{ width: "18rem", marginLeft: "10px", marginRight: "10px" }}
			>
				<Card.Img variant="top" src={newsItem.imgUrl} />
				<Card.Body>
					<Card.Title>{newsItem.titulo}</Card.Title>
					<Card.Text>{newsItem.subtitulo}</Card.Text>
					<p className="text-muted">{newsItem.descripcion}</p>
					<Button variant="primary">
						Leer más <a href="#">{newsItem.id}</a>
					</Button>
					{isAdmin && (
						<>
							{" "}
							<button className="btn btn-danger">Borra esta noticia</button>
							<button className="btn btn-success">Edita esta noticia</button>
						</>
					)}
				</Card.Body>
			</Card>
		</>
	);
};

export default NewsCard;

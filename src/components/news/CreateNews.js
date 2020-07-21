import React, { useState } from "react";
import institutoService from "../../services/institutoService";

const CreateNews = () => {
	const [noticia, setNoticia] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		institutoService.createNoticia(noticia).then(() => setSubmitted(true));
	};

	return (
		<div className="container">
			<h3>Añade una noticia</h3>
			{submitted && (
				<div className="alert-success">La noticia se ha creado</div>
			)}
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="form-group">
					<label htmlFor="titulo">Imagen de la noticia</label>
					<input
						type="text"
						className="form-control"
						placeholder="Introduce una url de una imagen"
						onChange={(e) => setNoticia({ ...noticia, imgUrl: e.target.value })}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="titulo">Título de la noticia</label>
					<input
						type="text"
						className="form-control"
						placeholder="Introduce un título"
						onChange={(e) => setNoticia({ ...noticia, titulo: e.target.value })}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="titulo">Descripción de la noticia</label>
					<input
						type="text"
						className="form-control"
						placeholder="Introduce la descripción"
						onChange={(e) =>
							setNoticia({ ...noticia, descripcion: e.target.value })
						}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="titulo">Texto de la noticia</label>
					<textarea
						type="text"
						className="form-control"
						placeholder="Introduce el texto"
						onChange={(e) => setNoticia({ ...noticia, texto: e.target.value })}
					/>
				</div>

				<div></div>

				<button className="btn btn-success">Crea la noticia</button>
			</form>
		</div>
	);
};

export default CreateNews;

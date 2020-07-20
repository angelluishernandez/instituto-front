import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import institutoService from "../../services/institutoService";
import { Link } from "react-router-dom";

const CursosList = () => {
	const [cursosList, setCursosList] = useState([]);
	const [filteredList, setFilteredList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		institutoService.listCursos().then((res) => {
			setCursosList(res.data);
			setLoading(false);
		});
		// eslint-disable-next-line
	}, []);

	const handleFilterClick = (discipline) => {
		const filtered = cursosList.filter(
			(curso) => curso.disciplina === discipline
		);

		setFilteredList(filtered);
	};

	const cursosJSX = (cursos) => {
		return (
			<div className="row">
				<div className="col-10">
					<ul>
						{cursos.map((curso, index) => (
							<li key={index}>
								{" "}
								<Link to={`/cursos/${curso._id}`}>{curso.nombre}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<img
						src="http://www.fundacionjosemariadellanos.es/images/imagenes/Formacion/ofertaformativa2020-21.jpg"
						alt="oferta-formativa"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-10">
					<h3>Busca cursos por nivel</h3>
					<button
						className="btn btn-success"
						onClick={() => handleFilterClick("ESO")}
					>
						E.S.O.
					</button>
					<button
						className="btn btn-success"
						onClick={() => handleFilterClick("FP")}
					>
						F.P.
					</button>
				</div>
			</div>

			{loading ? (
				<h1>Loading</h1>
			) : (
				<div className="container">{cursosJSX(filteredList)}</div>
			)}
		</div>
	);
};

export default CursosList;

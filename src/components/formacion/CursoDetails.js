import React from "react";
import { useEffect, useState } from "react";
import institutoService from "../../services/institutoService";

const CursoDetails = (props) => {
	const [curso, setCurso] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const cursoId = props.match.params.cursoId;
		console.log(cursoId);

		institutoService.getCurso(cursoId).then((res) => {
			setCurso(res.data);
			setLoading(false);
		});
	}, []);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<>
					<h1>{curso.nombre}</h1>
					<p>{curso.descripcion}</p>
					<h3>Materias</h3>

					<ul>
						{curso.materias.map((materia, index) => {
							return (
								<li key={index}>
									{materia.nombre} - {materia.horas} horas
								</li>
							);
						})}
					</ul>

					<h3>Optativas</h3>
					<ul>
						{curso.optativas.map((optativa, index) => {
							return (
								<li key={index}>
									{optativa.nombre} - {optativa.horas} horas
								</li>
							);
						})}
					</ul>
					<h3>Refuerzos</h3>
					<ul>
						{curso.refuerzos.map((refuerzo, index) => {
							return (
								<li key={index}>
									{refuerzo.nombre} - {refuerzo.horas} horas
								</li>
							);
						})}
					</ul>
				</>
			)}
		</div>
	);
};

export default CursoDetails;

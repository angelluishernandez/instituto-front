import React, { useState } from "react";
import institutoService from "../../../services/institutoService";
import Chip from "../../UI/Chips/Chip";

const EditarFormacion = () => {
	const [cursoInfo, setCursoInfo] = useState({
		disciplina: "",
		nombre: "",
		descripcion: [],
		materias: [],
		optativas: [],
		refuerzos: [],
	});

	const [materiasState, setMateriasState] = useState({ nombre: "", horas: 0 });
	const [optativasState, setOptativasState] = useState({
		nombre: "",
		horas: 0,
	});
	const [refuerzosState, setRefuerzosState] = useState({
		nombre: "",
		horas: 0,
	});

	const [submitted, setSubmitted] = useState(false);

	const setStateFromInput = (e, data, variable) => {
		e.preventDefault();
		setCursoInfo({
			...cursoInfo,
			[variable]: [...cursoInfo[variable], { ...data }],
		});
	};

	const handleSubmit = (e, curso) => {
		e.preventDefault();
		institutoService.createCurso(curso).then(() => setSubmitted(true));
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-10 mx-auto">
					<h1>Añadir o modificar un curso</h1>

					<form action="POST" onSubmit={(e) => handleSubmit(e, cursoInfo)}>
						{/* Selección de nivel- */}

						<div className="form-group">
							<select
								onChange={(e) =>
									setCursoInfo({ ...cursoInfo, disciplina: e.target.value })
								}
							>
								<option value="Selecciona un disciplina" defaultValue>
									Selecciona un disciplina
								</option>
								<option value="ESO">ESO</option>
								<option value="FP">FP</option>
							</select>
						</div>
						{/* Nombre del curso */}

						<div className="form-group">
							<label htmlFor="">Nombre del curso</label>
							<input
								className="form-control"
								type="text"
								placeholder="Introduce el nombre del curso"
								onChange={(e) =>
									setCursoInfo({ ...cursoInfo, nombre: e.target.value })
								}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="">Añadir descripción</label>
							<textarea
								className="form-control"
								type="text"
								placeholder="Introduce la descripción"
								onChange={(e) =>
									setCursoInfo({ ...cursoInfo, descripcion: e.target.value })
								}
							/>
						</div>

						{/* Mterias // Asignaturas */}
						<div className="form-group">
							<label htmlFor="">Materia</label>
							<input
								className="form-control"
								type="text"
								placeholder="Añade una materia"
								onChange={(e) =>
									setMateriasState({ ...materiasState, nombre: e.target.value })
								}
							/>
							<input
								className="form-control"
								type="number"
								name="horas"
								onChange={(e) =>
									setMateriasState({ ...materiasState, horas: e.target.value })
								}
							/>
							<button
								onClick={(e) => setStateFromInput(e, materiasState, "materias")}
							>
								+
							</button>

							{cursoInfo.materias.length >= 1 && (
								<div>
									{cursoInfo.materias.map((materia) => (
										<Chip text={materia.nombre} />
									))}
								</div>
							)}
						</div>

						{/* Optativas */}
						<div className="form-group">
							<label htmlFor="">Optativas</label>
							<input
								className="form-control"
								type="text"
								placeholder="Añade una optativa"
								onChange={(e) =>
									setOptativasState({
										...optativasState,
										nombre: e.target.value,
									})
								}
							/>
							<input
								className="form-control"
								type="number"
								placeholder="Horas"
								onChange={(e) =>
									setOptativasState({
										...optativasState,
										horas: e.target.value,
									})
								}
							/>
							<button
								onClick={(e) =>
									setStateFromInput(e, optativasState, "optativas")
								}
							>
								+
							</button>
							{cursoInfo.optativas.length >= 1 && (
								<div>
									{cursoInfo.optativas.map((optativa) => (
										<Chip text={optativa.nombre} />
									))}
								</div>
							)}
						</div>

						<div className="form-group">
							<label htmlFor="">Refuerzos</label>
							<input
								className="form-control"
								type="text"
								placeholder="Añade un refuerzo"
								onChange={(e) =>
									setRefuerzosState({
										...refuerzosState,
										nombre: e.target.value,
									})
								}
							/>
							<input
								className="form-control"
								type="number"
								placeholder="Horas"
								onChange={(e) =>
									setRefuerzosState({
										...refuerzosState,
										horas: e.target.value,
									})
								}
							/>

							<button
								onClick={(e) =>
									setStateFromInput(e, refuerzosState, "refuerzos")
								}
							>
								+
							</button>
							{cursoInfo.refuerzos.length >= 1 && (
								<div>
									{cursoInfo.refuerzos.map((refuerzo) => (
										<Chip text={refuerzo.nombre} />
									))}
								</div>
							)}
						</div>

						<button type="submit" className="btn btn-success">
							Guardar
						</button>
					</form>
				</div>

				{submitted && (
					<h1 className="alert-success">El curso ha sido creado</h1>
				)}
			</div>
		</div>
	);
};

export default EditarFormacion;

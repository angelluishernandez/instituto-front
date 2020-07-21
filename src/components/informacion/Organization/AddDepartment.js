import React, { useState } from "react";

const AddDepartment = () => {
	const [department, setDepartment] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<div class="form-group">
				<label for="exampleInputEmail1">Jefe/a de departamento</label>
				<input
					type="text"
					class="form-control"
					aria-describedby="emailHelp"
					placeholder="Enter email"
				/>
				<label for="exampleInputEmail1">Profesores</label>
				<input
					type="text"
					class="form-control"
					aria-describedby="emailHelp"
					placeholder="Enter email"
				/>
				<div
					className="btn"
					onClick={(e) =>
						setDepartment({ ...department, teachers: e.target.value })
					}
				>
					+
				</div>
				{}
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1">Areas</label>
				<input type="password" class="form-control" placeholder="Password" />
				<div
					className="btn"
					onClick={(e) =>
						setDepartment({ ...department, areas: e.target.value })
					}
				>
					+
				</div>
			</div>

			<button type="submit" class="btn btn-primary">
				Crear departamento
			</button>
		</form>
	);
};

export default AddDepartment;

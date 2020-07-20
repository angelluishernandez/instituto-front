import React, { useState } from "react";
import institutoService from "../../services/institutoService";

const CreateUserComponent = () => {
	const [userInfo, setUserInfo] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		institutoService.createUser(userInfo).then(() => setSubmitted(true));
	};

	return (
		<div className="container">
			<h1>Crea un usuario</h1>
			{submitted && <div className="alert-success">Usuario creado</div>}
			<form onSubmit={handleSubmit}>
				{/* Nombre */}
				<div className="form-group">
					<label htmlFor="nombre">Introduce el nombre</label>
					<input
						className="form-control"
						type="text"
						name="nombre"
						placeholder="Introduce el nombre"
						onChange={(e) =>
							setUserInfo({ ...userInfo, nombre: e.target.value })
						}
					/>
				</div>

				{/* Email */}
				<div className="form-group">
					<label htmlFor="email">Introduce el email</label>
					<input
						className="form-control"
						type="text"
						name="email"
						placeholder="Introduce el email"
						onChange={(e) =>
							setUserInfo({ ...userInfo, email: e.target.value })
						}
					/>
				</div>

				{/* Tipo de usuario */}

				<div className="form-group">
					<div className="alert-warning">
						La elección del tipo de usuario determinará las funcionalidades a
						las que el usuario puede acceder.
						<ul>
							<li>Alumnos: solo pueden consultar el contenido de la página</li>
							<li>Profesores: pueden consultar y editar algo de contenido</li>
							<li>
								Administradores: pueden acceder y editar todo el contenido
							</li>
						</ul>
					</div>
					<label htmlFor="tipo">Introduce el tipo de usuario</label>
					<select
						name="tipo"
						className="form-control"
						onChange={(e) => setUserInfo({ ...userInfo, tipo: e.target.value })}
					>
						<option defaultValue>Selecciona un tipo de usuario</option>
						<option value="alumno">Alumno</option>
						<option value="profesor">Profesor</option>
						<option value="admin">Administrador</option>
					</select>
				</div>

				{/* telefono */}

				<div className="form-group">
					<label htmlFor="telefono">Introduce el telefono</label>
					<input
						className="form-control"
						type="text"
						name="telefono"
						placeholder="Introduce el telefono"
						onChange={(e) =>
							setUserInfo({ ...userInfo, telefono: e.target.value })
						}
					/>
				</div>

				{/* departamento */}

				<div className="form-group">
					<label htmlFor="departamento">Introduce el departamento</label>
					<input
						className="form-control"
						type="text"
						name="departamento"
						placeholder="Introduce el departamento"
						onChange={(e) =>
							setUserInfo({ ...userInfo, departamento: e.target.value })
						}
					/>
				</div>

				{/* Password */}

				<div className="form-group">
					<div className="alert-warning">
						El usuario deberá cambiar la contraseña por una de su elección
					</div>
					<label htmlFor="password">Introduce el password</label>
					<input
						className="form-control"
						type="password"
						name="password"
						placeholder="Introduce el password"
						onChange={(e) =>
							setUserInfo({ ...userInfo, password: e.target.value })
						}
					/>
				</div>
				<button type="submit" className="btn btn-success">
					Crea el usuario
				</button>
			</form>
		</div>
	);
};

export default CreateUserComponent;

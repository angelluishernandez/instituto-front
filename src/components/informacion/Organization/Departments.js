import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const Departments = ({ currentUser }) => {
	console.log(currentUser);
	return (
		<div>
			{currentUser.tipo === "admin" && (
				<Link to="/editar-departamentos">
					<button class="btn btn-success">Editar departamentos</button>
				</Link>
			)}

			<article class="art-post">
				<div class="art-postcontent clearfix">
					<div class="art-article">
						<Typography variant="body1">
							Estos departamentos son elementos fundamentales para garantizar el
							buen funcionamiento de la labor pedagógica en el Centro. Tienen
							entre sus tareas más importantes las siguientes:
						</Typography>
						<ul>
							<li>
								<strong>
									Formular propuestas al Equipo Directivo y al Claustro
								</strong>
								, relativas a la elaboración o modificación del Proyecto
								Educativo del Centro y la Programación General Anual.
							</li>
							<li>
								<strong>
									Formular propuestas a la Comisión de Coordinación Pedagógica
								</strong>{" "}
								relativas a la elaboración o modificación de los Proyectos
								Curriculares de Etapa.
							</li>
							<li>
								<strong>Elaborar</strong>, antes del comienzo del curso
								académico,<strong> la Programación Didáctica</strong> de las
								enseñanzas correspondientes a las áreas, materias y módulos
								integrados en el departamento, bajo la coordinación y dirección
								del jefe del mismo, y de acuerdo con las directrices generales
								establecidas por la Comisión de Coordinación Pedagógica.
							</li>
							<li>
								<strong>Promover la investigación educativa</strong> y proponer
								actividades de perfeccionamiento de sus miembros.
							</li>
							<li>
								<strong>Mantener actualizada la metodología didáctica</strong>.
							</li>
							<li>
								<strong>Colaborar con el Departamento de Orientación</strong>,
								bajo la dirección de la Jefa de Estudios, en la prevención y
								detección temprana de problemas de aprendizaje, y elaborar la
								programación y aplicación de adaptaciones curriculares para los
								alumnos que lo precisen, entre ellos los alumnos con necesidades
								educativas especiales y los que sigan Programas de
								Diversificación.
							</li>
							<li>
								<strong>
									Organizar y realizar actividades complementarias
								</strong>{" "}
								en colaboración con el departamento correspondiente.
							</li>
							<li>
								<strong>Organizar y realizar las pruebas</strong> necesarias
								para los alumnos de Educación Secundaria y de Ciclos Formativos
								con materias o módulos pendientes o que no fueron evaluados por
								faltas de asistencia.
							</li>
							<li>
								<strong>Resolver las reclamaciones</strong> derivadas del
								proceso de evaluación que los alumnos formulen al departamento y
								dictar los informes pertinentes.
							</li>
							<li>
								<strong>Elaborar</strong>, a final de curso,{" "}
								<strong>una memoria</strong> en la que se evalúe el desarrollo
								de la programación didáctica, la práctica docente y los
								resultados obtenidos.
							</li>
						</ul>{" "}
					</div>
				</div>
			</article>
		</div>
	);
};

const mapStateToProps = (state) => ({
	currentUser: state.authentication.user,
});

export default connect(mapStateToProps)(Departments);

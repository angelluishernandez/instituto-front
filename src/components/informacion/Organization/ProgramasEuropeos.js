import React from "react";
import { Typography, Paper } from "@material-ui/core";

const ProgramasEuropeos = () => {
	return (
		<Paper class="art-post">
			<Typography variant="h2">Programa Erasmus+</Typography>
			<div class="art-postcontent clearfix">
				<div class="art-article">
					<Typography variant="body1">
						<img
							src="http://www.fundacionjosemariadellanos.es/images/imagenes/Logos/Erasmus.jpg"
							alt="Erasmus"
						/>
					</Typography>
					<Typography variant="body1">
						<strong>El programa Erasmus+</strong> se enmarca en la Estrategia
						Europa 2020, en la Estrategia Educación y Formación 2020 y en la
						Estrategia Rethinking Education y engloba iniciativas vinculadas con
						la educación, la formación, la juventud y el deporte.
					</Typography>
					<Typography variant="body1">
						Este Programa, aprobado por el Parlamento Europeo, nace con la
						finalidad fundamental de incrementar las competencias y la
						empleabilidad de las personas participantes, así como apoyar los
						sistemas de educación, formación, juventud y deporte de los
						distintos países miembros.
					</Typography>
					<Typography variant="body1">
						<strong>El CES y FP 1º de Mayo</strong>, en su afán de ofrecer una
						mejora continua en su<strong> calidad educativa</strong> y
						garantizar una{" "}
						<strong>formación más eficaz, innovadora y equilibrada</strong>,
						participa en este Programa desde el curso académico 2012/13.
					</Typography>
					<Typography variant="body1">
						<strong>Los alumnos y alumnas participantes</strong>, que cursan
						Ciclos Formativos de Grado Medio, tienen la posibilidad de llevar a
						cabo el módulo de Formación en Centros de Trabajo en empresas de
						otros países europeos, lo que supone una mejora cualitativa en la
						formación profesional y personal del alumnado.
					</Typography>
					<Typography variant="body1">
						De la misma manera, y desde el curso académico 2014/15,{" "}
						<strong>profesoras y profesores de nuestro centro educativo</strong>{" "}
						participan en el Programa en busca de una actualización profesional
						individual y una mejora del funcionamiento del centro educativo en
						su conjunto. Para ello, parte del profesorado acude a otros países
						de la Unión Europea para llevar a cabo cursos de formación y visitar
						y conocer el funcionamiento de centros educativos.
					</Typography>
					<Typography variant="body1">
						Es objetivo de nuestro centro educativo aumentar paulatinamente el
						número de alumnos/as y profesores/as participantes, así como los
						países de destino ofertados en el Programa.
					</Typography>
					<Typography variant="body1">&nbsp;</Typography>
					<ul>
						<li>
							<a
								href="/images/imagenes/PDF/CONVOCATORIA_ERASMUS2017.pdf"
								target="_blank"
							>
								CONVOCATORIA DE 15 BECAS PARA LA{" "}
								<strong>MOVILIDAD EUROPEA ERASMUS+</strong> (Convocatoria 201)7
							</a>
						</li>
					</ul>{" "}
				</div>
			</div>
		</Paper>
	);
};

export default ProgramasEuropeos;

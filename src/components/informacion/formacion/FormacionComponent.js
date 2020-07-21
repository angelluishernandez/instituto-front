import React, { useState } from "react";

const EsoComponent = ({ cursos }) => {
	const [isCursoClicked, seIsCursoClicked] = useState(false);
	const [currentCurso, setCurrentCurso] = useState({});

	const handleClickOnCurso = (curso) => {
		isCursoClicked(true);
		setCurrentCurso({ ...curso });
	};

	return (
		<div>
			{/* Intro text 
      Cursos => desplegar info y creditos por cada uno
				
      
      
      
      
      */}
			<h1>{cursos.title} - Cursos</h1>
			<ul>
				{cursos.map((curso, index) => {
					return (
						<li key={index} onClick={() => handleClickOnCurso({ ...curso })}>
							{curso.nombre}
						</li>
					);
				})}
			</ul>

			{isCursoClicked ? <div>{currentCurso.title}</div> : null}
		</div>
	);
};

export default EsoComponent;

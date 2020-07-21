import React, { useEffect, useState } from "react";
import InformationNav from "./InformationNav";
import infoService from "../../services/infoService";
import OfertaFormativa from "./oferta-formativa/OfertaFormativa";
import institutoService from "../../services/institutoService";
import { Paper, Grid, Typography } from "@material-ui/core";
import horariosService from "../../services/horariosService";

const InformationComponent = () => {
	const [urls, setUrls] = useState([]);
	const [horarios, setHorarios] = useState([]);
	const [esoCoursesList, setEsoCourseList] = useState([]);
	const [fpCoursesList, setFpcourseList] = useState([]);
	const [ofertaFormativaImg, setOfertaInformativaImg] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		infoService.getInfoUrl().then((response) => {
			setUrls(response.data);
			setOfertaInformativaImg(response.data.filter((item) => item.img)[0]);
		});
		horariosService.getHorarios().then((response) => {
			setHorarios(response.data);
		});

		institutoService
			.listCursos()
			.then((response) => {
				setEsoCourseList(
					response.data.filter((item) => item.disciplina === "ESO")
				);
				setFpcourseList(
					response.data.filter((item) => item.disciplina === "FP")
				);
			})
			.then(() => setLoading(false));
	}, []);

	console.log(horarios);

	return (
		<div className="container">
			{!loading && (
				<>
					{" "}
					<InformationNav urls={urls} />
					<OfertaFormativa
						ofertaFormativaImg={ofertaFormativaImg}
						esoCoursesList={esoCoursesList}
						fpCoursesList={fpCoursesList}
						horarios={horarios}
					/>
				</>
			)}

			{/* 
        Oferta formativa
          ESO // Calendario Escolar  // Horarios
          FP // Calendario Escolar  // Horarios
          Actividades complementarias // Horario // Programción // Memoria de actividades
        Organigrama
        Programas Europeos
        Programa accede */}
		</div>
	);
};

export default InformationComponent;

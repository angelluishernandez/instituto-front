import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true,
});

const listCursos = () => http.get("/cursos");

const doLogin = ({ email, password }) =>
	http.post("/login", { email, password });

const createNoticia = (noticia) => http.post("/noticias", noticia);
const createCurso = (curso) => http.post("/cursos", curso);
const createUser = (user) => http.post("/create-user", user);
const getCurso = (cursoId) => http.get(`/cursos/${cursoId}`);

export default {
	listCursos,
	createNoticia,
	createUser,
	getCurso,
	createCurso,
	doLogin,
};

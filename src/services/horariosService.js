import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true,
});

const getHorarios = () => http.get("/horarios");

export default {
	getHorarios,
};

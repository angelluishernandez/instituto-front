import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true,
});

const getInfoUrl = () => http.get("/get-info-url");

export default {
	getInfoUrl,
};

import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true,
});

const getDepartments = () => http.get("/department");
const addDepartment = ({ department }) =>
	http.post("/department", { department });

export default {
	getDepartments,
	addDepartment,
};

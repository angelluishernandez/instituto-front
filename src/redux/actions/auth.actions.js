import institutoService from "../../services/institutoService";
import { userConstants, alertConstants } from "../constants/constants";
import { alertActions } from "../actions/alert.actions";
import { history } from "../../helpers/history";

//----------------------ACTION GENERATORS----------------------//

//----------------------Login----------------------//

const doLogin = ({ email, password }) => {
	return (dispatch) => {
		dispatch(request({ email }));
		institutoService.doLogin({ email, password }).then(
			(data) => {
				const user = data.data;
				dispatch(success(user));
				localStorage.setItem("user", user ? JSON.stringify(user) : null);
				history.push("/");
			},
			(error) => {
				dispatch(failure(error));
				dispatch(alertActions.error(error));
			}
		);
	};
};

//----------------------Logout----------------------//

const logout = () => {
	institutoService.logout().then(() => localStorage.clear());

	return {
		type: userConstants.LOGOUT,
	};
};

//----------------------ACTION TYPES----------------------//

const request = (user) => {
	return {
		type: userConstants.LOGIN_REQUEST,
		user,
	};
};
const success = (user) => {
	return {
		type: userConstants.LOGIN_SUCCESS,
		user,
	};
};

const failure = (error) => {
	return {
		type: userConstants.LOGIN_FAILURE,
		error,
	};
};

//----------------------EXPORTS----------------------//

export const userActions = {
	doLogin,
};

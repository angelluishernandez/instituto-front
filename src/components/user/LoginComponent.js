import React, { useState } from "react";
import institutoService from "../../services/institutoService";
import { userActions } from "../../redux/actions/auth.actions";
import { connect } from "react-redux";

const LoginComponent = ({ loggedIn, dispatch, history }) => {
	const [user, setUser] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = user;

		if (email && password) {
			dispatch(userActions.doLogin({ email, password }));
		}
	};

	return (
		<div className="container">
			{loggedIn && <div className="alert-success">Ya estás logeado</div>}

			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<h1>Introduce tu nombre de usuario y tu contraseña</h1>
				<div className="form-group">
					<label htmlFor="email"></label>
					<input
						className="form-control"
						type="text"
						name="email"
						placeholder="Tu email"
						onChange={(e) => setUser({ ...user, email: e.target.value })}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="contraseña"></label>
					<input
						className="form-control"
						type="password"
						name="password"
						placeholder="Tu contraseña"
						onChange={(e) => setUser({ ...user, password: e.target.value })}
					/>
				</div>

				<button className="btn btn-success">Login</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { loggedIn } = state.authentication;
	return {
		loggedIn,
	};
};

export default connect(mapStateToProps)(LoginComponent);

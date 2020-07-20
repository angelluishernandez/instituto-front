import React, { createContext } from "react";

const AuthContext = createContext();

export class AuthContextProvider extends React.Component {
	state = {
		user: JSON.parse(localStorage.getItem("user")),
	};

	setUser = (user) => {
		localStorage.setItem("user", user ? JSON.stringify(user) : null);
		this.setState({ user });
	};

	render() {
		const value = {
			currentUser: this.state.user,
		};

		return (
			<AuthContext.Provider value={value}>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}

export const WithAuthConsumer = (WrappedComponent) => (props) => (
	<AuthContext.Consumer>
		{(authProps) => <WrappedComponent {...props} {...authProps} />}
	</AuthContext.Consumer>
);

export default AuthContext;

import React, { useState } from "react";
import { AUTH_TOKEN } from "../constants";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";

const Login = ({ history }) => {
	const [login, setLogin] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const SIGNUP_MUTATION = gql`
		mutation SignupMutation(
			$email: String!
			$password: String!
			$name: String!
		) {
			signup(email: $email, password: $password, name: $name) {
				token
			}
		}
	`;
	const LOGIN_MUTATION = gql`
		mutation LoginMutation($email: String!, $password: String!) {
			login(email: $email, password: $password) {
				token
			}
		}
	`;

	const _confirm = async (data) => {
		const { token } = login ? data.login : data.signup;
		saveUserData(token);
		history.push("/");
	};

	const saveUserData = (token) => {
		localStorage.setItem(AUTH_TOKEN, token);
	};

	return (
		<div>
			<h4 className="mv3">{login ? "Login" : "Sign Up"}</h4>
			<div className="flex flex-column">
				{!login && (
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
						placeholder="Your name"
					/>
				)}
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Your email address"
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Your password"
				/>
			</div>
			<div className="flex mt3">
				<Mutation
					mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
					variables={{ email, password, name }}
					onCompleted={(data) => _confirm(data)}>
					{(mutation) => (
						<div className="pointer mr2 btn" onClick={mutation}>
							{login ? "login" : "create an account"}
						</div>
					)}
				</Mutation>
				<div className="pointer btn" onClick={() => setLogin(!login)}>
					{login ? " create an account" : "already have an account"}
				</div>
			</div>
		</div>
	);
};

export default withRouter(Login);

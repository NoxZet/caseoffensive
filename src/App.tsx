import React, { useEffect, useState } from "react";
import { Root } from "react-dom/client";
import axios, { AxiosResponse } from "axios";

import LoginForm from "components/LoginForm";
import RegisterForm from "components/LoginForm";
import User from "resource/User";

type Logged = 'notLogged' | 'checking' | User;
const storageKeyToken = 'case_token';

const App = () => {
	const [loggedUser, setLoggedUser] = useState<Logged>('checking');
	const [currentScreen, setCurrentScreen] = useState<string>('');
	const [currentError, setCurrentError] = useState<string>('');
	useEffect(() => {
		const token = localStorage.getItem(storageKeyToken);
		if (token) {
			axios.get('/user', {
				params: {
					token: token,
				}
			})
			.then(response => {
				const users: User[] = response.data;
				if (users.length === 0) {
					// TODO: Display 'Login expired'
					localStorage.removeItem(storageKeyToken)
					setLoggedUser('notLogged');
				} else {
					setLoggedUser(users[0]);
				}
			})
			.catch(error => {
				console.error(error);
			});
		} else {
			setLoggedUser('notLogged');
		}
	}, []);

	function displayError() {
		if (currentError) {
			return <div className="login-error">{currentError}</div>
		} else {
			return null;
		}
	}

	function displayLoader() {
		if (loggedUser === 'checking') {
			return <div className="loader">loader</div>
		} else {
			return null;
		}
	}

	// TODO: Make 'checking' loader cover whole screen (so login form doesn't flash before changing to logged in screen)
	if (loggedUser === 'notLogged' || loggedUser === 'checking') {
		const isRegister = currentScreen === 'register';
		return <div className="app">
			<h1>
				{isRegister ? 'Create an account' : 'Login'}
			</h1>
			{displayError()}
			{isRegister ? <RegisterForm/> : <LoginForm/>}
			{displayLoader()}
		</div>
	} else {
		return <div>Logged in as {loggedUser.username}</div>
	}
}

function renderApp(root: Root) {
	root.render(<App/>);
}

export default renderApp;

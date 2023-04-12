import React, { useEffect, useState } from "react";
import { Root } from "react-dom/client";
import axios, { AxiosResponse } from "axios";

import LoginForm from "components/LoginForm";
import RegisterForm from "components/RegisterForm";
import User from "resource/User";
import QuestPage from "components/QuestPage";
import InventoryPage from "components/InventoryPage";

type Logged = false | User;
const storageKeyToken = 'case_token';

const App = () => {
	const [loading, setLoading] = useState(true);
	const [loggedUser, setLoggedUser] = useState<Logged>(false);
	const [currentScreen, setCurrentScreen] = useState<string>('');
	const [currentError, setCurrentError] = useState<string>('');

	function loadToken() {
		const token = localStorage.getItem(storageKeyToken);
		if (token) {
			setLoading(true);
			axios.get('/user', {
				params: {
					token: token,
				}
			})
			.then(response => {
				const users: User[] = response.data;
				if (users.length === 0) {
					setCurrentError('Login expired');
					localStorage.removeItem(storageKeyToken)
					setLoggedUser(false);
				} else {
					setLoggedUser(users[0]);
				}
			})
			.catch(error => {
				console.error(error);
			})
			.finally(() => {
				setLoading(false);
			})
		} else {
			setLoading(false);
		}
	}

	useEffect(loadToken, []);

	const axiosInstance = axios.create({
		headers: {
			authorization: localStorage.getItem(storageKeyToken) || undefined,
		},
	})

	function displayError() {
		if (currentError) {
			return <div className="login-error">{currentError}</div>
		} else {
			return null;
		}
	}

	function displayLoader() {
		if (loading) {
			return <div className="loader">loader</div>
		} else {
			return null;
		}
	}

	function onSubmitLogin(username: string, password: string): void {
		axios.post('/session', {
			username: username,
			password: password,
		})
		.then(response => {
			const token: string = response.data.token;
			localStorage.setItem(storageKeyToken, token);
			loadToken();
		})
		.catch(error => {
			if (error.response) {
				const response: AxiosResponse = error.response;
				if (response.status === 422) {
					setCurrentError(response.data.message);
				}
			} else {
				console.error(error);
			}
		})
		.finally(() => {
			setLoading(false);
		});
	}

	function onSubmitRegister(email: string, username: string, password: string) {
		// TODO
		console.log(email, username, password);
	}

	// TODO: Make 'checking' loader cover whole screen (so login form doesn't flash before changing to logged in screen)
	if (loggedUser) {
		return <div className="app">
			<div className="app-header-bar">
				<div><a onClick={() => setCurrentScreen('quests')} href="#">Quests</a></div>
				<div><a onClick={() => setCurrentScreen('containers')} href="#">Containers</a></div>
				<div><a onClick={() => setCurrentScreen('skins')} href="#">Skins</a></div>
				<div>{loggedUser.username}</div>
			</div>
			{
				currentScreen === 'containers' ?
					<InventoryPage key='containers' axiosInstance={axiosInstance} type='container'/>
				: currentScreen === 'skins' ?
					<InventoryPage key='skins' axiosInstance={axiosInstance} type='skin'/>
				:
					<QuestPage axiosInstance={axiosInstance}/>
			}
		</div>
	} else {
		const isRegister = currentScreen === 'register';
		return <div className="app">
			<h1>
				{isRegister ? 'Create an account' : 'Login'}
			</h1>
			{displayError()}
			{isRegister
				? <RegisterForm onSubmitRegister={onSubmitRegister} onError={() => {}}/>
				: <LoginForm onSubmitLogin={onSubmitLogin}/>
			}
			{displayLoader()}
		</div>
	}
}

function renderApp(root: Root) {
	root.render(<App/>);
}

export default renderApp;

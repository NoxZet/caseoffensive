import React, { useEffect, useState } from "react";
import { Root } from "react-dom/client";
import axios, { AxiosResponse } from "axios";

import LoginForm from "components/LoginForm";
import RegisterForm from "components/RegisterForm";
import User from "resource/User";
import QuestPage from "components/QuestPage";
import InventoryPage from "components/InventoryPage";
import makeAxiosAuthError from "common/makeAxiosAuthError";

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

	const axiosInstance = makeAxiosAuthError(localStorage.getItem(storageKeyToken) || undefined, function() {
		logOut('Login expired');
	});

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
		setLoading(true);
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
		setLoading(true);
		axios.post('/user', {
			email: email,
			username: username,
			password: password,
		})
		.then(response => {
			const token: string = response.data.message;
			setCurrentError(response.data.message);
			setCurrentScreen('login');
		})
		.catch(error => {
			if (error.response) {
				const response: AxiosResponse = error.response;
				if (response.status === 422 || response.status === 409) {
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

	function logOut(message: string = 'Logged out') {
		const token = localStorage.getItem(storageKeyToken);
		if (!token) {
			return;
		}
		setLoading(true);
		axios.delete('/session', {
			data: {
				token: token,
			},
		})
		.then(response => {
			setCurrentError(message);
			localStorage.removeItem(storageKeyToken)
			setLoggedUser(false);
		})
		.catch(error => {
			// TODO: handling
		})
		.finally(() => {
			setLoading(false);
		});
	}

	// TODO: Make 'checking' loader cover whole screen (so login form doesn't flash before changing to logged in screen)
	if (loggedUser) {
		return <div className='app'>
			{/* Page header bar */}
			<div className='app-header-bar'>
				{[['quests', 'Quests'], ['containers', 'Containers'], ['skins', 'Skins']].map(([screenName, displayName]) =>
					<div className={'app-header-item' + (currentScreen === screenName ? ' is-current-page' : '')}>
						<a onClick={() => setCurrentScreen(screenName)} href="#">{displayName}</a>
					</div>
				)}
				<div className='app-header-user hover-parent'>
					<div>{loggedUser.username}</div>
					<div className='hover-target'>
						<a onClick={() => logOut()} href="#">Log out</a>
					</div>
				</div>
			</div>
			{/* Page content (based on currentScreen) */
				currentScreen === 'containers' ?
					<InventoryPage key='containers' axiosInstance={axiosInstance} type='container'/>
				: currentScreen === 'skins' ?
					<InventoryPage key='skins' axiosInstance={axiosInstance} type='skin'/>
				:
					<QuestPage axiosInstance={axiosInstance}/>
			}
		</div>
	} else {
		// Register and login forms including header
		const isRegister = currentScreen === 'register';
		return <div className="app login-register">
			<h1>Case Offensive</h1>
			<h2>{isRegister ? 'Create an account' : 'Login'}</h2>
			{displayError()}
			{isRegister
				? <RegisterForm onSubmitRegister={onSubmitRegister} onError={(error) => setCurrentError(error)}/>
				: <LoginForm onSubmitLogin={onSubmitLogin}/>
			}
			{isRegister
				? <div><a onClick={() => setCurrentScreen('login')} href='#'>Already have an account?</a></div>
				: <div><a onClick={() => setCurrentScreen('register')} href='#'>Create a new account</a></div>}
			{displayLoader()}
		</div>
	}
}

function renderApp(root: Root) {
	root.render(<App/>);
}

export default renderApp;

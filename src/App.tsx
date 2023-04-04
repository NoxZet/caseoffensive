import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Root } from "react-dom/client";
import User from "resource/User";

type Logged = 'notLogged' | 'checking' | User;
const storageKeyToken = 'case_token';

const App = () => {
	const [loggedUser, setLoggedUser] = useState<Logged>('checking');
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

	return (
		<h1>
			Hello world! User status: {typeof loggedUser === 'string' ? loggedUser : loggedUser.username}
		</h1>
	);
}

function renderApp(root: Root) {
	root.render(<App/>);
}

export default renderApp;

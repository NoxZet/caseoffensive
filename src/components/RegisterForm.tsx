import React, { useState } from 'react'

export default function RegisterForm({ onSubmitRegister, onError } : {
	onSubmitRegister: (email: string, username: string, password: string) => void,
	onError: (error: string) => void,
}) {
	// TODO: add email regex check
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');

	// TODO: add dynamic name taken check?
	function usernameChange(value: string) {
		setUsername(value);
	}

	// TODO: add dynamic passwords match check
	// TODO: add dynamic password requirements check
	function passwordChange(value: string) {
		setPassword(value);
	}
	function password2Change(value: string) {
		setPassword(value);
	}

	function submit() {
		if (password !== password2) {
			onError('Passwords don\'t match');
		} else {
			onSubmitRegister(email, username, password);
		}
	}

	return <table>
		<tbody>
			<tr>
				<td>Email</td>
				<td><input type="text" value={email} onChange={elem => setEmail(elem.target.value)}/></td>
			</tr>
			<tr>
				<td>Username</td>
				<td><input type="text" value={username} onChange={elem => usernameChange(elem.target.value)}/></td>
			</tr>
			<tr>
				<td>Password</td>
				<td><input type="password" value={password} onChange={elem => passwordChange(elem.target.value)}/></td>
			</tr>
			<tr>
				<td>Password</td>
				<td><input type="password" value={password2} onChange={elem => password2Change(elem.target.value)}/></td>
			</tr>
			<tr>
				<td colSpan={2}><button onClick={submit}>Login</button></td>
			</tr>
		</tbody>
	</table>;
}

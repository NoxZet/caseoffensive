import React, { useState } from 'react'

export default function LoginForm({ onSubmitLogin } : {
	onSubmitLogin: (username: string, password: string) => void,
}) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function submit() {
		onSubmitLogin(username, password);
	}

	return <table>
		<tbody>
			<tr>
				<td>Username</td>
				<td><input type="text" value={username} onChange={elem => setUsername(elem.target.value)}/></td>
			</tr>
			<tr>
				<td>Password</td>
				<td><input type="password" value={password} onChange={elem => setPassword(elem.target.value)}/></td>
			</tr>
			<tr>
				<td colSpan={2}><button onClick={submit}>Login</button></td>
			</tr>
		</tbody>
	</table>;
}

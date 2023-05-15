import React, { FormEvent, useState } from 'react'

export default function LoginForm({ onSubmitLogin } : {
	onSubmitLogin: (username: string, password: string) => void,
}) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function submit(e: FormEvent) {
		e.preventDefault();
		onSubmitLogin(username, password);
	}

	return <form onSubmit={submit}>
		<div>
			<div className='form-field'>
				<div className='form-field-header'>Username</div>
				<div className='form-field-input'><input type='text' value={username} onChange={elem => setUsername(elem.target.value)}/></div>
			</div>
			<div className='form-field'>
				<div className='form-field-header'>Password</div>
				<div className='form-field-input'><input type='password' value={password} onChange={elem => setPassword(elem.target.value)}/></div>
			</div>
			<div className='form-field'>
				<div className='form-field-input'><button type='submit'>Login</button></div>
			</div>
		</div>
	</form>;
}

import React, { useState } from 'react'
import { USERNAME_PREDICATE, EMAIL_PREDICATE, PASSWORD_PREDICATE } from 'common/accountPredicates';

function FieldError({ error } : { error: string }) {
	return <div className='field-error-box'><span className='field-error-text'>{error}</span></div>;
}

export default function RegisterForm({ onSubmitRegister, onError } : {
	onSubmitRegister: (email: string, username: string, password: string) => void,
	onError: (error: string) => void,
}) {
	// TODO: add email regex check
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [triedSubmit, setTriedSubmit] = useState(false);

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
		setPassword2(value);
	}

	function displayErrorWithLength<T extends string | string[]>(value: T, predicate: (value: T) => string | false): string | false {
		const length = (typeof value === 'string' ? value.length > 0 : value[0].length);
		if (triedSubmit || length) {
			if (length === 0) {
				return 'Field required';
			} else {
				return predicate(value);
			}
		} else {
			return false;
		}
	}

	function password2Predicate(passwords: [string, string]): string | false {
		return passwords[0] !== passwords[1] ? 'Passwords don\'t match' : false;
	}

	const emailError = displayErrorWithLength(email, EMAIL_PREDICATE);
	const usernameError = displayErrorWithLength(username, USERNAME_PREDICATE);
	const passwordError = displayErrorWithLength(password, PASSWORD_PREDICATE);
	const password2Error = displayErrorWithLength([password2, password], password2Predicate);

	function submit() {
		const error = EMAIL_PREDICATE(email) || USERNAME_PREDICATE(username) || PASSWORD_PREDICATE(password) || password2Predicate([password2, password]);
		if (error) {
			onError(error);
			setTriedSubmit(true);
		} else {
			onSubmitRegister(email, username, password);
		}
	}

	return <table>
		<tbody>
			<tr>
				<td>Email</td>
				<td><input type="text" value={email} onChange={elem => setEmail(elem.target.value)}/></td>
				<td>{emailError && <FieldError error={emailError}/>}</td>
			</tr>
			<tr>
				<td>Username</td>
				<td><input type="text" value={username} onChange={elem => usernameChange(elem.target.value)}/></td>
				<td>{usernameError && <FieldError error={usernameError}/>}</td>
			</tr>
			<tr>
				<td>Password</td>
				<td><input type="password" value={password} onChange={elem => passwordChange(elem.target.value)}/></td>
				<td>{passwordError && <FieldError error={passwordError}/>}</td>
			</tr>
			<tr>
				<td>Repeat password</td>
				<td><input type="password" value={password2} onChange={elem => password2Change(elem.target.value)}/></td>
				<td>{password2Error && <FieldError error={password2Error}/>}</td>
			</tr>
			<tr>
				<td colSpan={3}><button onClick={submit}>Register</button></td>
			</tr>
		</tbody>
	</table>;
}

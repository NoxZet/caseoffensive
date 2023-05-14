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

	return <form onSubmit={submit} autoComplete='off'>
		<div>
			<div className='form-field'>
				<div className='form-field-header'>Email</div>
				<div className={'form-field-input ' + (emailError ? 'errored' : '')}>
					<input type='text' value={email} onChange={elem => setEmail(elem.target.value)} />
					<div className='form-field-error'>{emailError && <FieldError error={emailError} />}</div>
				</div>
			</div>
			<div className='form-field'>
				<div className='form-field-header'>Username</div>
				<div className={'form-field-input ' + (usernameError ? 'errored' : '')}>
					<input type='text' value={username} onChange={elem => usernameChange(elem.target.value)} />
					<div className='form-field-error'>{usernameError && <FieldError error={usernameError} />}</div>
				</div>
			</div>
			<div className='form-field'>
				<div className='form-field-header'>Password</div>
				<div className={'form-field-input ' + (passwordError ? 'errored' : '')}>
					<input type='password' value={password} onChange={elem => passwordChange(elem.target.value)} />
					<div className='form-field-error'>{passwordError && <FieldError error={passwordError} />}</div>
				</div>
			</div>
			<div className='form-field'>
				<div className='form-field-header'>Repeat password</div>
				<div className={'form-field-input ' + (password2Error ? 'errored' : '')}>
					<input type='password' value={password2} onChange={elem => password2Change(elem.target.value)} />
					<div className='form-field-error'>{password2Error && <FieldError error={password2Error} />}</div>
				</div>
			</div>
			<div className='form-field'>
				<div className='form-field-input'><button type='submit'>Register</button></div>
			</div>
		</div>
	</form>;
}

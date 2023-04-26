export const USERNAME_PREDICATE = function(username: string): string | false {
	return !username.match(/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,19}$/)
		&& 'Username must have 1-20 characters that are a-z, A-Z, 0-9, - or _, first character must not be - or _';
};
export const EMAIL_PREDICATE = function(email: string): string | false {
	return !email.match(/^[^@]+@[^@]+\.[^@]+$/)
		&& 'Invalid email address';
};
export const PASSWORD_PREDICATE = function(password: string): string | false {
	return !(password.length >= 8 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/))
		&& 'Password must be at least 8 characters long and must contain one lowercase letter, one uppercase letter and one number';
};

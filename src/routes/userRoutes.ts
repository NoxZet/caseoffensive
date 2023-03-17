import express from 'express';
import DbInterface from 'database/DbInterface';
import Security, { InvalidCredentials } from 'server/Security';
import User from 'database/User';

export default function addRoutes(app: express.Express, dbInterface: DbInterface, security: Security) {

// Sign up (create user)
app.post('/user', async function (req: express.Request, res: express.Response, next: Function) {
	const username = req.body.username;
	const email = req.body.email;
	const password = req.body.password;
	if (typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
		res.status(400).json({
			'message': 'Invalid request body',
		});
		return;
	}
	if (!username.match(/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,19}$/)) {
		res.status(422).json({
			'message': 'Username must have 1-20 characters that are a-z, A-Z, 0-9, - or _, first character must not be - or _',
		});
		return;
	}
	if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
		res.status(422).json({
			'message': 'Invalid email address',
		});
		return;
	}
	if (password.length < 8 || !password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[0-9]/)) {
		res.status(422).json({
			'message': 'Password must be at least 8 characters long and must contain one lowercase letter, one uppercase letter and one number',
		});
		return;
	}
	try {
		const hash = await security.hashPassword(password);
		const user = new User(username, email, hash);
		await dbInterface.insertModel(user);
		res.status(200).json({
			'message': 'Account successfully created',
		});
	} catch (error) {
		if (error.code === '23505') {
			res.status(400).json({
				'message': ((error.constraint as string).match(/_username_/) ? 'Username' : 'Email') + ' already taken',
			});
		} else {
			next(error);
		}
	}
});

// Log in (create session)
app.post('/session', async function (req: express.Request, res: express.Response, next: Function) {
	const username = req.body.username;
	const password = req.body.password;
	if (typeof username !== 'string' || typeof password !== 'string') {
		res.status(400).json({
			'message': 'Invalid request body',
		});
		return;
	}
	try {
		const token = await security.createSession(username, password);
		res.status(200).json({
			'token': token,
		});
	} catch (error) {
		if (error instanceof InvalidCredentials) {
			res.status(422).json({
				'message': 'Username or password is invalid',
			});
		} else {
			next(error);
		}
	}
});

}
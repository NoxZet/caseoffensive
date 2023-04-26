import express from 'express';
import DbInterface, { NoResult } from 'database/DbInterface';
import Security, { InvalidCredentials, InvalidToken } from 'server/Security';
import User from 'database/User';
import { USERNAME_PREDICATE, EMAIL_PREDICATE, PASSWORD_PREDICATE } from 'common/accountPredicates';

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
	let error: string | false;
	if (error = USERNAME_PREDICATE(username)) {
		res.status(422).json({
			'message': error,
		});
		return;
	}
	if (error = EMAIL_PREDICATE(email)) {
		res.status(422).json({
			'message': error,
		});
		return;
	}
	if (error = PASSWORD_PREDICATE(password)) {
		res.status(422).json({
			'message': error,
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
		// Code for Postgres unique constraint fail
		if (error.code === '23505') {
			res.status(409).json({
				'message': ((error.constraint as string).match(/_username_/) ? 'Username' : 'Email') + ' already taken',
			});
		} else {
			next(error);
		}
	}
});

app.get('/user', async function (req: express.Request, res: express.Response, next: Function) {
	if (typeof req.query.token === 'string') {
		security.getUser(req.query.token)
		.then(user => {
			res.status(200).json([user.toResource()]);
		})
		.catch(error => {
			if (error instanceof InvalidToken) {
				res.status(200).json([]);
			} else {
				next(error);
			}
		});
	} else {
		res.status(400).json({
			'message': 'Must specify token parameter',
		});
	}
});

app.get('/user/:userId([0-9]+)', security.getUserMiddleware, async function (req: express.Request, res: express.Response, next: Function) {
	dbInterface.selectModelById(User, parseInt(req.params.userId))
	.then(user => {
		res.status(200).json(user.toResource());
	})
	.catch(error => {
		if (error instanceof NoResult) {
			res.status(404).json({
				'message': 'Invalid user'
			});
		} else {
			next(error);
		}
	})
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

// Log out: Destroy session for the given token
// No feedback is provided about whether the token actually existed or not
app.delete('/session', function (req: express.Request, res: express.Response, next: Function) {
	const token = req.body.token;
	if (typeof token !== 'string') {
		res.status(400).json({
			'message': 'Invalid request body',
		});
		return;
	}
	security.deleteSession(token);
	res.status(200).json({
		'message': 'Ok',
	});
});

}

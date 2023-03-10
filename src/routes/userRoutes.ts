import express from 'express';
import DbInterface from 'database/DbInterface';
import User from 'database/User';

export default function addRoutes(app: express.Express, dbInterface: DbInterface) {

app.post('/user', async function (req: express.Request, res: express.Response, next: Function) {
	const username = req.body.username;
	const email = req.body.email;
	const password = req.body.password;
	if (typeof username !== 'string' || !username.match(/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,19}$/)) {
		res.status(400).json({
			'message': 'Username must have 1-20 characters that are a-z, A-Z, 0-9, - or _, first character must not be - or _',
		});
		return;
	}
	if (typeof email !== 'string' || !email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
		res.status(400).json({
			'message': 'Invalid email address',
		});
		return;
	}
	if (typeof password !== 'string' || password.length < 8 || !password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[0-9]/)) {
		res.status(400).json({
			'message': 'Password must be at least 8 characters long and must contain one lowercase letter, one uppercase letter and one number',
		});
		return;
	}
	try {
		const user = new User(username, email, password);
		await dbInterface.insertModel(user);
		res.status(200).json({
			'message': 'Account successfully created',
		});
	} catch (error) {
		if (error.code === '23505') {
			res.status(400).json({
				'message': ((error.constraint as string).match(/_username_/) ? 'Username' : 'Email') + ' already taken',
			});
		}
	}
});

}
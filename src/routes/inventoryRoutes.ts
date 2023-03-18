import express from 'express';
import DbInterface from 'database/DbInterface';
import Security, { InvalidCredentials } from 'server/Security';

export default function addRoutes(app: express.Express, dbInterface: DbInterface, security: Security) {

app.get('/item', security.getUserMiddleware, function (req: express.Request, res: express.Response, next: Function) {
	console.log(res.locals.user);
	res.status(200).json([]);
});

}

import express from 'express';
import { Client } from 'pg';
import errorHandler from 'server/errorHandler';

import DbInterface from 'database/DbInterface';
import Security from 'server/Security';

import User from 'database/User';
import ContainerItem from 'database/ContainerItem';
import SkinItem from 'database/SkinItem';
import addUserRoutes from 'routes/userRoutes';

//const container = new ContainerItem('caseChroma', 'knife1Chroma', 1, 0, ['souvenir', 'stattrak', 'festive'], 'godsMonsters', 'knifeFalchionOld', 0.3, 12, 9);

const isDevelopment = process.env.NODE_ENV === 'development';

const pgClient = new Client({
	'host': '127.0.0.1',
	'port': 5432,
	'database': 'postgres',
	'user': 'postgres',
	'password': 'postgres',
	'connectionTimeoutMillis': 30 * 1000,
})
pgClient.connect()
.then(() => {

console.log('CONNECTED');

const dbInterface = new DbInterface(pgClient, [User, ContainerItem, SkinItem]);
const security = new Security(dbInterface);

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

addUserRoutes(app, dbInterface, security);

app.use((error: Error, req: express.Request, res: express.Response, next: Function) => {
	errorHandler(error);
	if (isDevelopment) {
		res.status(500).json({'message': error.message, 'stack': error.stack});
	} else {
		res.status(500).json({'message': 'Internal server error'});
	}
});

app.listen(3000);

// Catch Postgres connection error
}).catch(e => {
	e.message = 'Failed to initialize Postgres connection';
	errorHandler(e);
});

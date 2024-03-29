import path from 'path';
import express from 'express';
import { Client } from 'pg';
import errorHandler from 'server/errorHandler';

import DbInterface from 'database/DbInterface';
import Security from 'server/Security';
import Questing from 'server/Questing';

import User from 'database/User';
import ContainerItem from 'database/ContainerItem';
import SkinItem from 'database/SkinItem';
import Quest from 'database/Quest';
import QuestUser from 'database/QuestUser';

import addUserRoutes from 'routes/userRoutes';
import addInventoryRoutes from 'routes/inventoryRoutes';
import addQuestRoutes from 'routes/questRoutes';
import QuestResult from 'database/QuestResult';
import UserSession from 'database/UserSession';

//const container = new ContainerItem('caseChroma', 'knife1Chroma', 1, 0, ['souvenir', 'stattrak', 'festive'], 'godsMonsters', 'knifeFalchionOld', 0.3, 12, 9);

const isDevelopment = process.env.NODE_ENV === 'development';

// TODO: Change architecture to using Pool so we can do transactions
const pgClient = new Client({
	'host': '127.0.0.1',
	'port': 5432,
	'database': 'postgres',
	'user': 'postgres',
	'password': 'postgres',
	'connectionTimeoutMillis': 30 * 1000,
})
pgClient.connect()
.then(async () => {
	const dbInterface = new DbInterface(pgClient, [User, UserSession, ContainerItem, SkinItem, Quest, QuestResult, QuestUser]);
	try {
		await dbInterface.updateDatabase();
		return dbInterface;
	} catch (error) {
		errorHandler(error);
		process.exit();
	}
})
.then((dbInterface) => {

console.log('CONNECTED');

const security = new Security(dbInterface);
const questing = new Questing(dbInterface);

const app = express();

app.use('/data', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

addUserRoutes(app, dbInterface, security);
addInventoryRoutes(app, dbInterface, security);
addQuestRoutes(app, dbInterface, security, questing);

app.get('/data/*', (req, res) => res.status(404).json({}));
app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname + '/../public/index.html')));

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

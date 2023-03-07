import express from 'express';
import fs from 'fs';
import { Client } from 'pg';
import errorHandler from 'server/errorHandler';

const isDevelopment = process.env.NODE_ENV === 'development';

const client = new Client({
	'host': '127.0.0.1',
	'port': 5432,
	'database': 'postgres',
	'user': 'postgres',
	'password': 'postgres',
})
client.connect()
.then(() => {

const app = express();

app.use(express.static('public'));

app.get('/asd', function (req: express.Request, res: express.Response, next: Function) {
	
});

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

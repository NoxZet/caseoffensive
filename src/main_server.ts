const isDevelopment = process.env.NODE_ENV === 'development';

import express from 'express';
import fs from 'fs';
import { Client } from 'pg';

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
	// TODO: Error handler
	next(error);
});

app.listen(3000);

}).catch((e) => console.log('Failed to initialize Postgres connection\n', e));

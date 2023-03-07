console.log('Server: ' + process.env.NODE_ENV);

import express from 'express';
import fs from 'fs';

const app = express();

app.use(express.static('public'));

app.get('/asd', function (req: express.Request, res: express.Response, next: Function) {
	
});

app.use((error: Error, req: express.Request, res: express.Response, next: Function) => {
	// TODO: Error handler
	next(error);
});

app.listen(3000);

import express, { Express, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import routes from './routes';

import { getLogger, write } from './helpers/logger';

const logger = getLogger('express');

const app : Express = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(morgan('common', { stream: { write: write }} ));

function logErrors (err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack);
    next(err);
  }

app.use(logErrors);


routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
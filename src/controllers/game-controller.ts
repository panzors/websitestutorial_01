import {Express, Request, Response } from 'express';
import {shuffle} from '../services/deck';

export function routes(app: Express) {
    app.get('/game/getcards', (request: Request, response: Response) => {
        response.setHeader('Content-Type', 'application/json');
        response.json({
            cards: shuffle()
        });
    })
};

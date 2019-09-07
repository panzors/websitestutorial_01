import {Express, Request, Response } from 'express';
import {randomDeck} from '../services/game-service';

export function routes(app: Express) {
    app.get('/game/start', (request: Request, response: Response) => {
        response.json({
            cards: randomDeck()
        });
    })
};

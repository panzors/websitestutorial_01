import {Express, Request, Response } from 'express';
import {randomDeck} from '../services/game-service';
import * as encryptor from '../helpers/card-encryptor';

export function routes(app: Express) {
    app.get('/game/start', (request: Request, response: Response) => {
        const cards = randomDeck();
        response.json({
            cards: cards,
            signature: encryptor.encrypt(JSON.stringify(cards)) 
        });
    })

    app.post('/game/validate', (request: Request, response: Response) => {
        const cards = JSON.parse(encryptor.decrypt(request.body));

        response.json({
            status: 'ok'
        })
    })
};

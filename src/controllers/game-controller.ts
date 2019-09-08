import {Express, Request, Response } from 'express';
import * as GameService from '../services/game-service';
import * as encryptor from '../helpers/card-encryptor';
import { Card, createCard } from '../model/card';

export function routes(app: Express) {
    app.get('/game/start', (request: Request, response: Response) => {
        const cards = GameService.randomDeck();
        response.json({
            cards: cards,
            deck: encryptor.encryptCards(cards) 
        });
    })

    app.post('/game/validate', (request: Request, response: Response) => {
        const deck = encryptor.decryptCards(request.body.deck);
        const validationResult = GameService.validateDeck(deck);

        response.status(200);
        response.json({
            status: validationResult ? 'valid' : 'invalid'
        })
    });
    
    app.post('/game/play', (request: Request, response: Response) => {
        const playedCard: Card = createCard(request.body.playedCard);
        const currentDeckState = encryptor.decryptCards(request.body.deck);

        const playResponse = GameService.play(playedCard, currentDeckState);

        response.json({
            status: playResponse.Status,
            deck: encryptor.encryptCards(playResponse.Deck)
        });
    });
};

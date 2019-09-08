import {Express, Request, Response } from 'express';
import * as GameService from '../services/game-service';
import * as encryptor from '../helpers/card-encryptor';
import { Card, createCard } from '../model/card';

export function routes(app: Express) {
    app.get('/game/start', (request: Request, response: Response) => {
        const cards = GameService.randomDeck();
        response.json({
            cards: cards,
            signature: encryptor.createSignature(cards) 
        });
    })

    app.post('/game/play', (request: Request, response: Response) => {
        // expecting body
        // body.playedCard, body.cards, body.signature. 
        // if you're claiming the cards are a certain type
        const playedCard: Card = createCard(request.body.playedCard);
        const cards = request.body.cards;
        const validState = encryptor.verifySignature(request.body.cards, request.body.signature);

        if (!validState){
            response.status(400); //bad request
            response.statusMessage = 'Unable to comply with request, signature does not match card state.';
            response.end();
        } else {
            const playResponse = GameService.play(playedCard, cards);   
            response.json({
                status: playResponse.Status,
                deck : playResponse.Deck,
                signature: encryptor.createSignature(playResponse.Deck)
            });
        }
    });
};

import 'jasmine';
import * as GameService from '../../src/services/game-service';
import { Card } from '../../src/model/card';
import { Suite } from '../../src/model/Suite';
import { GameResult, GameResponseType } from '../../src/model/GameResult';

describe('game-service', function () {
    it('cleanDeck has 52', function () {
        const deck = GameService.cleanDeck();
        expect(deck.length).toBe(52);
    });

    it('randomDeck is like a clean deck', function () {
        const left = GameService.cleanDeck();
        const right = GameService.randomDeck();
        
        for (let i = 0; i < 52; i++) {
            const l = left[i];
            const found = right.find((x) => { l.Suite, l.Value });
            expect(found).not.toBeNull();
        }
    });

    it('play valid card', function() {
        //card has to be in the valid set;
        const deck = GameService.cleanDeck();
        const playingCard : Card = new Card(Suite.Spade, 1)
        
        const result = GameService.play(playingCard, deck);
        expect(result.Status).toBe('ok');
        expect(result.Deck.length).toBe(51);
    });

    it('play a single card', function() {
        const deck = []
    })
})
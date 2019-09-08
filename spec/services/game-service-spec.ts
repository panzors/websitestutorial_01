import 'jasmine';
import * as GameService from '../../src/services/game-service';
import { Card, createCard } from '../../src/model/card';
import { Suite } from '../../src/model/Suite';

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
        const deck = [ createCard('h11')];
        const result = GameService.play(createCard('h11'), deck);

        expect(result.Status).toBe('ok');
        expect(result.Deck.length).toBe(0);
    });

    it ('play a card that does not exist in current deck', function() {
        const deck = [createCard('s01')];
        const result = GameService.play(createCard('h11'), deck);
        expect(result.Status).toBe('broken');
        expect(result.Deck.length).toBe(deck.length);
    });
    
    it ('validate default decks has no duplicates',function() {
        const deck = GameService.cleanDeck();
        expect(GameService.validateDeck(deck)).toBe(true);        
        
        const randomDeck = GameService.randomDeck();
        expect(GameService.validateDeck(randomDeck)).toBe(true);        
    });

    it('validate decks with duplicates', function() {
        const deck = [createCard('s1'), createCard('s1')];
        expect(GameService.validateDeck(deck)).toBe(false);
    });

    it('validate deck with more than 52 cards', function() {
        const deck = GameService.cleanDeck();
        deck.push(createCard('h11'));

        expect(GameService.validateDeck(deck)).toBe(false);
    })
});


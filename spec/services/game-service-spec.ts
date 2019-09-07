import 'jasmine';
import * as GameService from '../../src/services/game-service';

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
            const found = right.find((x) => { l.suite, l.value });
            expect(found).not.toBeNull();
        }
    })
})
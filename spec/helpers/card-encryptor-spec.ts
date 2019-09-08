import * as CardEncryptor from '../../src/helpers/card-encryptor';
import {Card, createCard} from '../../src/model/Card';
import {Suite} from '../../src/model/Suite';
import * as GameService from '../../src/services/game-service';

describe('card encryptor', function() {
    it('encrypt decrypt cycle with single card', function() {
        const deck = [createCard('h12')];
        const encryptedData = CardEncryptor.encryptCards(deck);

        const decryptedDeck: Card[] = CardEncryptor.decryptCards(encryptedData);
        expect(decryptedDeck[0].Suite).toBe(Suite.Heart);

    });

    it ('encrypt decrypt cycle with full deck', function() {
        const deck = GameService.cleanDeck();
        
        const encryptedData = CardEncryptor.encryptCards(deck);

        const decryptedDeck: Card[] = CardEncryptor.decryptCards(encryptedData);

        decryptedDeck.forEach(element => {
            expect(deck).toContain(element);
        });
    })
})
import * as Card from '../../src/model/Card';
import {Suite} from '../../src/model/Suite';

describe('Card model', function(){
    it('createCard makes sense', function(){
        expect(Card.createCard('d11').Value).toBe(11);
        expect(Card.createCard('s1').Value).toBe(1);
        expect(Card.createCard('h8').Value).toBe(8);
        expect(Card.createCard('d11').Suite).toBe(Suite.Diamond);
    })
})
import {Card } from '../src/model/card';
import 'jasmine';

describe('test', function(){
    it('blah', function() {
        expect(1).toBe(1);
    });

    it('Card check', function() {
        const c = new Card('spade', '20');
        expect(c.raw).toBe('spade20');
    })
});
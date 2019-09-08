import { Suite } from './Suite';

export class Card {
    constructor(public Suite: Suite, public Value: Number) {

    }

    get raw(): string {
        return this.Suite + this.Value.toString();
    }
}
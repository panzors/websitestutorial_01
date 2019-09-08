import { Suite, mapShortCode } from './Suite';

export class Card {
    constructor(public Suite: Suite, public Value: Number) {

    }

    get shortCode(): string {
        return this.Suite.charAt(0) + this.Value.toString().padStart(1, '0');
    }

    equals(shortCode: string): Boolean {
        return this.shortCode == shortCode;
    }
}

export function createCard(shortCode: String): Card {
    const suite: Suite = mapShortCode(shortCode.charAt(0));
    const value = Number(shortCode.substring(1,3));
    return new Card(suite, value);
}
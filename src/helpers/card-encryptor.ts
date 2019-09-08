import { Card, createCard } from '../model/Card';


export function encrypt(content: string): string{
    return content; // fix me later
}

export function decrypt(content: string) : string {
    return content; // so sad wow
}

export function encryptCards(cards: Card[]): string{
    const shortCodes = cards.map((x) => x.shortCode);
    return this.encrypt(JSON.stringify(shortCodes));
}

export function decryptCards(content: string) : Card[] {
    const shortCodes: string[] = JSON.parse(this.decrypt(content));
    return shortCodes.map((x) => createCard(x));
}
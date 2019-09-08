import { Card, createCard } from '../model/Card';
import * as ShaJs from 'sha.js';

export function createSignature(cards: Card[]): string {
    const sha = new ShaJs.sha256();
    const shortCodes = cards.map((x) => x.shortCode);
    return sha.update(JSON.stringify(shortCodes)).digest('hex');
}

export function verifySignature(cards: Card[], signature: string) : Boolean {
    const claimState = createSignature(cards);
    return claimState === signature;
}
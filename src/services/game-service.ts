import { Card } from "../model/Card";
import { Suite } from "../model/Suite";

const suites: Suite[] = [
    Suite.Spade,
    Suite.Heart,
    Suite.Diamond,
    Suite.Club,
]

export function cleanDeck(): Card[] {
    let results: Card[] = [];
    for(let i = 0; i < 52; i++){
        results.push(new Card(suites[i % 4], (i % 13) + 1));
    }

    return results;
}

export function randomDeck(): Card[] {
    let deck = cleanDeck();
    let result: Card[] = [];
    while(deck.length > 0){
        const r = Math.random() * deck.length;
        const c = deck.splice(r, 1);
        result.push(c[0]);
    }

    return result;
}

export function play(playingCard: Card, gameState: Card[]){
    const found = gameState.find((x) => { Suite})
}
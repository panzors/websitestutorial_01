import { Card } from "../model/Card";

const suites: string[] = [
    'Spade',
    'Heart',
    'Diamond',
    'Clubs'
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

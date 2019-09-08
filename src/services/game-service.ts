import { Card } from "../model/Card";
import { Suite } from "../model/Suite";
import {GameResult} from "../model/GameResult";

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

export function play(playingCard: Card, gameState: Card[]) : GameResult{
    const found = gameState.findIndex(() => { playingCard.Suite, playingCard.Value });
    if (found != null && this.validateDeck()){
        gameState.splice(found, 1);
        return new GameResult('ok', gameState);
    }

    return new GameResult("broken", gameState);
}

export function validateDeck(deck: Card[]) : Boolean{
    // implement me plz
    return true;

}
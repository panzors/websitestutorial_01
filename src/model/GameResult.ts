import {Card} from './Card';

export type GameResponseType = "ok" | "broken" | "win" | "lose";

export class GameResult{
    constructor(public Status: GameResponseType, public Deck: Card[]){

    }
}
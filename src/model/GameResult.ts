import {Card} from './Card';

export type GameResponseType = "ok" | "broken";

export class GameResult{
    constructor(public Status: GameResponseType, public Deck: Card[]){

    }
}
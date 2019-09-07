export class Card {

    constructor(public suite: string, public value: Number) {

    }

    get raw(): string {
        return this.suite + this.value;
    }

}

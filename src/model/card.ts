export class Card {

    constructor(public suite: string, public value: string) {

    }

    get raw(): string {
        return this.suite + this.value;
    }

}

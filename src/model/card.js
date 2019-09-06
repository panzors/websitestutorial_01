class Card {

    constructor(suite, value){
        this.suite = suite;
        this.value = value;
    }

    get raw() {
        this.suite + this.value;
    }

}

module.exports = Card;
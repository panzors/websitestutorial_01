const Card = require('../model/card');


function shuffle() {
    return [new Card('Heart', '1')];
}

module.exports = {
    shuffle
};

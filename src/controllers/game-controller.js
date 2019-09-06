const deck = require('../services/deck');


module.exports = function(app) {
    app.get('/game/getcards', (request, response) => {
        response.setHeader('Content-Type', 'application/json');
        response.json({
            cards:  deck.shuffle()
        });
    })
};
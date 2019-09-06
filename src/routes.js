const homeController = require('./controllers/home-controller');
const gameController = require('./controllers/game-controller');

module.exports = (app) => {

    homeController(app);
    gameController(app);
}
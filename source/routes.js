const homeController = require('./controllers/home-controller');


module.exports = (app) => {

    homeController(app);
}
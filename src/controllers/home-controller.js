

const path = require('path');

module.exports = function(app) {
    app.get('/', (request, response) => {
        response.sendFile(path.join(__dirname, '../view/index.html'));
    })

    // test file
    app.get('/fail', (request, response) => {
        if (request.query.code) {
            response.status(request.query.code).end();
        } else {
            response.status(500).end();
        }
    })
}
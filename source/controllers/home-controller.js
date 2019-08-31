

const path = require('path');

module.exports = function(app) {
    app.get('/', (request, response) => {
        response.sendFile(path.join(__dirname, '../view/index.html'));
    })
}
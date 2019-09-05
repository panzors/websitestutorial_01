const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

const winston = require('./source/helpers/logger');
const logger= winston.getLogger('express');
const routes = require('./source/routes');

app.use(express.static('public'));
app.use(morgan({"stream": winston.stream }));

function logErrors (err, req, res, next) {
    logger.
    console.error(err.stack)
    next(err)
  }

app.use(logErrors);


routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
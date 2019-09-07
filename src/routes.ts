

import * as homeController from  './controllers/home-controller';
import * as gameController from './controllers/game-controller';
import {Express} from 'express';

export default function(app: Express) {

    homeController.routes(app);
    gameController.routes(app);
}
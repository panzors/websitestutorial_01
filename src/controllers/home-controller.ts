
import { Express, Request, Response} from "express";
import path from "path";

export function routes(app: Express) {
    app.get("/", (request: Request, response: Response) => {
        response.send('root success')
    });

    // test file
    app.get("/fail", (request, response) => {
        if (request.query.code) {
            response.status(request.query.code).end();
        } else {
            response.status(500).end();
        }
    });
}

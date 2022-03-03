import { readFile } from 'fs';
import * as jwt from 'jsonwebtoken';

export function requireLogin(req, res, next) {
    readFile('./secrets/topSecret2.txt', 'utf8' , (err, secret) => {
        if (err) {
          console.error(err);
          return;
        }
        try {
            jwt.verify(req.get("Authorization"), secret + process.env.ENV_SECRET)
            next();
        } catch {
            // this failure case is handled by an angular interceptor
            res.sendStatus(401)
        }        
    })
}
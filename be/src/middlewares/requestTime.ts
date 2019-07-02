import * as express from 'express';

export default function (req: express.Request, res: express.Response, next: Function) {
  req['requestTime'] = Date.now();
  next()
}
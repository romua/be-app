import * as express from 'express';

export default function (err: Error, req: express.Request, res: express.Response, next: Function) {
  console.error(err.stack);
  res.status(500).send('Woops');
  next()
}

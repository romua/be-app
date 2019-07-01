import * as express from 'express';

export default function (req: express.Request, res: express.Response, next: Function) {

  console.log(`
    ***************************************************
    New request:
    method: ${req.method},
    ***************************************************
    url: ${req.url},
    ***************************************************
    body: ${JSON.stringify(req.body, null, 2)},
    ***************************************************
  `);
  next()
}
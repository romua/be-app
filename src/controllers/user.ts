import * as express from 'express';

const router: express.Router = express.Router();

router
  .get('/', (req: express.Request, res: express.Response) => {
    // Reply with a hello world when no name param is provided
    res.send('You want to get a user I guess, but where are your params?');
  })
  .get('/:name', (req: express.Request, res: express.Response) => {
    // Extract the name from the request parameters
    let { name } = req.params;

    // Greet the given name
    res.send(`Hello, mrs. ${name}`);
  })
  .post('/create', (req: express.Request, res: express.Response) => {
    // Reply with a hello world when no name param is provided
    console.log(req.body);
  });

export const UserController: express.Router = router;

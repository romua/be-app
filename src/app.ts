import * as dotenv from 'dotenv';
dotenv.config();
import * as path from 'path';
import * as helmet from 'helmet';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Middlewares } from './middlewares/middlewares';
import { _Controllers } from './controllers/controllers';

// Create Express server
const app: express.Application = express();

app.use(express.static(path.resolve(__dirname) + '/public'));
app.set('port', process.env.PORT || 8080);
app.use(helmet());

//apply middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(Middlewares.requestTime);
app.use(Middlewares.errorHandler);
app.use(Middlewares.logger);
//mount controllers

app.use('/api/users', _Controllers.userController);

app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Listen on provided port, on all network interfaces.
app.listen(4200, () => {
  console.log(('App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
  console.log('__dirname', path.resolve(__dirname));
});

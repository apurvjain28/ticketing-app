import express from 'express';
import 'express-async-errors';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorhandler } from './middlewares/error-handlers';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(express.json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

// at last
app.all('*', (req, res, next) => {
  throw new NotFoundError();
});
app.use(errorhandler);

app.listen(3000, () => {
  console.log(`Listening to Port 3000!!`);
});

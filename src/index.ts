import express from 'express';
// import {router} from './routes/loginRouter'
import cookieSession from 'cookie-session';
import { AppRouter } from './Approuter';
import './controllers/LoginController'
import './controllers/RootControllers'

const app = express();
app.use(express.urlencoded({ extended: true}))
app.use(cookieSession({keys: ['test']}))
// app.use(router)
app.use(AppRouter.getInstance())

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

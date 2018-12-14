import * as passport from 'passport';
import { Strategy } from 'passport-local';
import * as express from 'express';

import { AuthModelClass } from './models/auth';

export function setPassport(myExpress: express.Express) {
  myExpress.use(passport.initialize());
  myExpress.use(passport.session());

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  const authModel = new AuthModelClass();
  passport.use(new Strategy(authModel.loginActiveDirectory));
}

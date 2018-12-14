import * as express from 'express';

import { ApiCtrl } from './controllers/api';

export const router = express.Router();

router.use('/api', ApiCtrl);

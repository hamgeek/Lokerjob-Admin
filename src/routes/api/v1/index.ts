import express from 'express';
const router = express.Router();

// Routes Import

import Auth from './Auth';
import Users from './Users';

router.use('/', [Auth, Users])

export default router;
import express from 'express';
import _Users from '../../../controllers/_Users';

const router = express.Router();

router.get('/users/create', (req, res) => {
      _Users.create(req, res);
});

export default router;
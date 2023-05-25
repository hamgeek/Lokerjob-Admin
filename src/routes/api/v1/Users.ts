import express from 'express';
import _Users from '../../../controllers/_Users';

const router = express.Router();


router.post('/users/create', (req, res) => {
      _Users.create(req, res);
});
router.post('/users/auth', (req, res) => {
      _Users.auth(req, res);
});


export default router;
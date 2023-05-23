import express from 'express';
import Helpers from '../../../helpers';

const router = express.Router();

router.get('/auth', (req, res) => {
      Helpers.Response.api(res, 200, '', []);
});

export default router;
import express from 'express';
import ApiCtrl from '../controllers/api';

const router = express.Router();
const apiCtrl = new ApiCtrl();

router.get('/', apiCtrl.base);
router.get('/shopping', apiCtrl.list);

export default router;

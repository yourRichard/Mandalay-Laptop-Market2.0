import express from 'express';
import userDetailController from '../controllers/userDetail.controller.js';
import authToken from '../middleware/authToken.js';

const router = express.Router();

router.get('/user-details',authToken,userDetailController);

export default router;
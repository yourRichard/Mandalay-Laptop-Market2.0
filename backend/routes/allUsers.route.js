import express from 'express';
import authToken from '../middleware/authToken.js';
import allUsers from '../controllers/allUsers.controller.js';

const router = express.Router();

router.get('/all-users',authToken,allUsers);

export default router;
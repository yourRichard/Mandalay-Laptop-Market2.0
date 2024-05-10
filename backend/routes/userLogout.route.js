import express from 'express';
import userLogout from '../controllers/userLogout.controller.js';


const router = express.Router();

router.get('/user-logout',userLogout);

export default router;
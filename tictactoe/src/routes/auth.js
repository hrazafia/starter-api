import express from 'express';
import * as ctrl from '../controllers/authController.js';
const router = express.Router();

router.post('/register', ctrl.register);
router.post('/login', ctrl.login);
router.post('/refresh', ctrl.refresh);
router.post('/logout', ctrl.logout);

export default router;

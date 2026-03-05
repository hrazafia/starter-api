import express from 'express';
import * as ctrl from '../controllers/usersController.js';
import requireAuth from '../middlewars/requireAuth.js';
import multer from 'multer';
const upload = multer({ limits: { fileSize: 2 * 1024 * 1024 } }); // 2MB mock

const router = express.Router();

// public profile
router.get('/:id', ctrl.getPublicProfile);

// private
router.get('/me', requireAuth, ctrl.getMe);
router.put('/me', requireAuth, ctrl.updateMe);
router.post('/me/avatar/presign', requireAuth, ctrl.presignAvatar);
router.post('/me/avatar', requireAuth, upload.single('file'), ctrl.uploadAvatar); // simulation

// username lookup
router.get('/by-username/:username', ctrl.getByUsername);

export default router;

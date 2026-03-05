import express from 'express';
import * as ctrl from '../controllers/friendsController.js';
import requireAuth from '../middlewars/requireAuth.js';

const router = express.Router();

router.get('/', requireAuth, ctrl.listFriends);
router.post('/requests', requireAuth, ctrl.sendFriendRequest);
router.get('/requests', requireAuth, ctrl.listFriendRequests);
router.post('/requests/:id/accept', requireAuth, ctrl.acceptRequest);
router.post('/requests/:id/reject', requireAuth, ctrl.rejectRequest);
router.delete('/:friendId', requireAuth, ctrl.removeFriend);
router.get('/:userId/status', requireAuth, ctrl.getStatus);

export default router;

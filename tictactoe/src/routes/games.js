import express from 'express';
import * as ctrl from '../controllers/gamesController.js';
import requireAuth from '../middlewars/requireAuth.js';

const router = express.Router();

router.get('/', ctrl.listGames);                    // GET /api/v1/games
router.post('/', requireAuth, ctrl.createGame);     // POST
router.get('/:id', ctrl.getGame);                   // GET /api/v1/games/:id
router.post('/:id/join', requireAuth, ctrl.joinGame);
router.post('/:id/leave', requireAuth, ctrl.leaveGame);
router.post('/:id/rematch', requireAuth, ctrl.rematch);
router.post('/:id/move', requireAuth, ctrl.moveHttpFallback); // fallback HTTP move

export default router;

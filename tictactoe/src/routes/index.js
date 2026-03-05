import express from 'express';
import auth from './auth.js';
import users from './users.js';
import games from './games.js';
import friends from './friends.js';

const router = express.Router();

router.use('/users', users);
router.use('/games', games);
router.use('/friends', friends);

export default { default: router, auth };

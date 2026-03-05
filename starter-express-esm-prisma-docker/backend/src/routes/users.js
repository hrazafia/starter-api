import express from 'express';
import { getAllUsers, createUser } from '../controllers/userController.js';
import validate from '../middlewares/validate.js';
import { createUserSchema } from '../validators/userSchema.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', validate(createUserSchema), createUser);

export default router;

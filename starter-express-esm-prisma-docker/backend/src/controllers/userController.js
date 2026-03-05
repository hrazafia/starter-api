import * as userService from '../services/userService.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.listUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  try {
    // validate middleware already put parsed data into req.validatedBody
    const payload = req.validatedBody;
    const user = await userService.createUser(payload);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

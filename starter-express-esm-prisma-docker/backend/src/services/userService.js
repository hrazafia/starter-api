import * as repo from '../repositories/userRepository.js';

export const listUsers = async () => {
  return repo.findAll();
};

export const createUser = async (data) => {
  // Example business rule: name should be trimmed and capitalized
  const cleaned = { ...data, name: data.name.trim() };
  const created = await repo.create(cleaned);
  return created;
};

export function validateCreateGame(body) {
  if (!body.boardSize) return { valid: false, message: 'boardSize required' };
  return { valid: true };
}

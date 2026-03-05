export function create(game) {
  console.log('[REPO] create game', game);
  return { gameId: 'g_new', ...game };
}

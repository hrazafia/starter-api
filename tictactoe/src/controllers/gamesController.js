export async function listGames(req, res) {
  console.log('[GAMES] listGames query=', req.query);
  res.json({ data: [{ gameId: 'g_1', status: 'waiting' }] });
}

export async function createGame(req, res) {
  console.log('[GAMES] createGame user=', req.user?.id, 'body=', req.body);
  res.status(201).json({ gameId: 'g_created', status: 'waiting' });
}

export async function getGame(req, res) {
  console.log('[GAMES] getGame id=', req.params.id);
  res.json({
    gameId: req.params.id,
    status: 'in_progress',
    board: [['','',''],['','',''],['','','']]
  });
}

export async function joinGame(req, res) {
  console.log('[GAMES] joinGame', req.params.id, 'user=', req.user?.id);
  res.json({ gameId: req.params.id, status: 'in_progress', yourSymbol: 'O' });
}

export async function leaveGame(req, res) {
  console.log('[GAMES] leaveGame', req.params.id, 'user=', req.user?.id);
  res.json({ status: 'left' });
}

export async function rematch(req, res) {
  console.log('[GAMES] rematch', req.params.id, 'user=', req.user?.id);
  res.json({ status: 'rematch_requested' });
}

// fallback HTTP move
export async function moveHttpFallback(req, res) {
  console.log('[GAMES] moveHttpFallback', req.params.id, 'body=', req.body, 'user=', req.user?.id);
  res.json({ accepted: true, newState: { } });
}

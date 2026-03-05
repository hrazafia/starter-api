import jwt from 'jsonwebtoken';

const MOCK_SECRET = 'shhh';

export default function requireAuth(req, res, next) {
  const h = req.header('authorization') || '';
  const token = h.startsWith('Bearer ') ? h.slice(7) : null;
  console.log('[MIDDLE] requireAuth token present:', !!token);
  if (!token) return res.status(401).json({ error: 'missing_token' });

  // simulation: decode without verify for mock, or verify with mock secret
  try {
    // pour mock on accepte 'mock.jwt.access' as valid:
    if (token === 'mock.jwt.access' || token === 'mock.jwt.access.new') {
      req.user = { id: 'u_mock', username: 'mockuser' };
      return next();
    }
    // optionally verify JWT
    const payload = jwt.verify(token, MOCK_SECRET, { algorithms: ['HS256'], ignoreExpiration: true });
    req.user = { id: payload.sub || payload.id || 'u_jwt', username: payload.username || 'jwtuser' };
    next();
  } catch (err) {
    console.log('[MIDDLE] requireAuth verify error', err.message);
    return res.status(401).json({ error: 'invalid_token' });
  }
}

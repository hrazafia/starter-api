export default function rateLimiterMock(req, res, next) {
  // simple mock that logs and allows; could respond 429 for specific path to test
  console.log('[MIDDLE] rateLimiterMock path=', req.path, 'apiKey=', req.apiKey);
  // Example: simulate limit on creating games
  if (req.path === '/api/games' && req.method === 'POST' && req.header('x-api-key') === 'limited') {
    return res.status(429).json({ error: 'too_many_requests', retryAfter: 60 });
  }
  next();
}

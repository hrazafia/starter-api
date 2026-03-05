export default function requireApiKey(req, res, next) {
  // accepter les routes auth sans apiKey? ici on exige apiKey globalement
  const key = req.header('x-api-key') || req.query.api_key;
  console.log('[MIDDLE] requireApiKey header:', !!key);
  if (!key) {
    return res.status(401).json({ error: 'missing_api_key' });
  }
  // pour simuler: si key === "revoked" => fail, sinon next()
  if (key === 'revoked') return res.status(403).json({ error: 'api_key_revoked' });
  req.apiKey = key;
  next();
}

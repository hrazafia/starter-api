import * as authService from '../services/authService.js';

export async function register(req, res) {
  console.log('[AUTH] register body:', req.body);
  // simulation: create user
  const user = { id: 'u_100', email: req.body.email };
  res.status(201).json(user);
}

export async function login(req, res) {
  console.log('[AUTH] login body:', req.body);
  // simulation: return tokens
  const tokens = { accessToken: 'mock.jwt.access', refreshToken: 'mock.refresh' };
  res.json(tokens);
}

export async function refresh(req, res) {
  console.log('[AUTH] refresh body:', req.body);
  res.json({ accessToken: 'mock.jwt.access.new' });
}

export async function logout(req, res) {
  console.log('[AUTH] logout body:', req.body, 'user:', req.user || null);
  // simulate revoke refresh token
  res.json({ status: 'ok', revoked: true });
}

export function issueTokens(user) {
  console.log('[SERVICE] issueTokens for', user);
  return { accessToken: 'mock.jwt.access', refreshToken: 'mock.refresh' };
}

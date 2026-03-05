export async function getPublicProfile(req, res) {
  console.log('[USERS] getPublicProfile id=', req.params.id);
  res.json({
    id: req.params.id,
    username: 'player_' + req.params.id,
    displayName: 'Player ' + req.params.id,
    avatarUrl: null,
    bio: 'Profil public mock'
  });
}

export async function getMe(req, res) {
  console.log('[USERS] getMe user=', req.user?.id);
  res.json({ id: req.user?.id || 'u_mock', email: 'me@example.com', displayName: 'Me' });
}

export async function updateMe(req, res) {
  console.log('[USERS] updateMe user=', req.user?.id, 'body=', req.body);
  res.json({ status: 'updated', data: req.body });
}

// avatar presign
export async function presignAvatar(req, res) {
  console.log('[USERS] presignAvatar user=', req.user?.id, 'body=', req.body);
  res.json({
    uploadUrl: 'https://mock-storage/upload/put-url',
    publicUrl: `https://cdn.example.com/avatars/${req.user?.id}.png`
  });
}

// direct upload (multipart)
export async function uploadAvatar(req, res) {
  console.log('[USERS] uploadAvatar user=', req.user?.id, 'file=', req.file?.originalname);
  res.json({ avatarUrl: `https://cdn.example.com/avatars/${req.user?.id}.png` });
}

export async function getByUsername(req, res) {
  console.log('[USERS] getByUsername', req.params.username);
  res.json({ id: 'u_42', username: req.params.username, displayName: 'Found User' });
}

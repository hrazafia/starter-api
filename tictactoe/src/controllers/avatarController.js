export async function getAvatar(req, res) {
  console.log('[AVATAR] get avatar for', req.params.userId);
  res.redirect('https://cdn.example.com/default-avatar.png');
}

export async function listFriends(req, res) {
  console.log('[FRIENDS] listFriends user=', req.user?.id);
  res.json([{ id: 'u_13', username: 'bob', online: true }]);
}

export async function sendFriendRequest(req, res) {
  console.log('[FRIENDS] sendFriendRequest from=', req.user?.id, 'body=', req.body);
  res.status(201).json({ requestId: 'fr_1', status: 'pending' });
}

export async function listFriendRequests(req, res) {
  console.log('[FRIENDS] listFriendRequests user=', req.user?.id);
  res.json([{ requestId: 'fr_1', from: 'u_99', status: 'pending' }]);
}

export async function acceptRequest(req, res) {
  console.log('[FRIENDS] acceptRequest', req.params.id, 'user=', req.user?.id);
  res.json({ status: 'accepted' });
}

export async function rejectRequest(req, res) {
  console.log('[FRIENDS] rejectRequest', req.params.id, 'user=', req.user?.id);
  res.json({ status: 'rejected' });
}

export async function removeFriend(req, res) {
  console.log('[FRIENDS] removeFriend', req.params.friendId, 'user=', req.user?.id);
  res.status(204).send();
}

export async function getStatus(req, res) {
  console.log('[FRIENDS] getStatus', req.params.userId, 'requester=', req.user?.id);
  res.json({ userId: req.params.userId, online: true, lastSeen: new Date().toISOString() });
}

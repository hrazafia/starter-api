export default (err, req, res, next) => {
  console.error(err);
  // Prisma unique constraint error handling
  if (err.code === 'P2002') {
    return res.status(400).json({ error: 'Unique constraint failed', details: err.meta });
  }
  res.status(500).json({ error: err.message ?? 'Internal error' });
};

export default (schema) => (req, res, next) => {
  try {
    const result = schema.parse({ body: req.body });
    req.validatedBody = result.body;
    return next();
  } catch (err) {
    // zod error
    return res.status(400).json({ error: err.errors ?? err.message });
  }
};

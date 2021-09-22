const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Search for token
  const token = req.header('auth-token');

  // Verify if token exists
  if(!token) {
    return res.status(400).send('Access denied');
  }

  try {
    // Set the user to a verified user
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;

    return next();
  } catch (err) {
    return res.status(400).send('Invalid Token');
  }
}
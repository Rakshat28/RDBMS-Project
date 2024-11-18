// authMiddleware.js
const jwt = require('jsonwebtoken'); // Assuming you're using JWT for authentication
const JWT_SECRET = process.env.JWT_SECRET;
const authenticate = (req, res, next) => {
  const token = req.headers['authentication']; // Expecting a "Bearer <token>" format

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const verified = jwt.verify(token.split(' ')[1], JWT_SECRET); // Replace 'your_secret_key' with your actual secret
    req.user = verified; // Attach user data to request object
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token.' });
  }
};

module.exports = authenticate;

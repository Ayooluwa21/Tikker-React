module.exports = function authorize(allowedRoles = []) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: 'Not authenticated' });
    if (allowedRoles.length === 0) return next();
    const role = req.user.role;
    if (allowedRoles.includes(role)) return next();
    return res.status(403).json({ message: 'Forbidden' });
  };
};

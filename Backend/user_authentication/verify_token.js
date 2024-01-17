const jwt = require('jsonwebtoken')
const jwtSecretKey = require('../config/jwtsecretkey')

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json('Access denied. Token not provided');
    }

    jwt.verify(token, jwtSecretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json('session expired, please login again');
        }
        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;
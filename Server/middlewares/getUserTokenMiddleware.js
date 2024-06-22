const jwt = require('jsonwebtoken');

const userService = require("../services/userService");

const getJwtToken = async (req, res, next) => {
    const token = req.cookies.authCookie;
    
    if (!token) {
        return res.status(401).json({ message: "No token provided!" });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        req.userToken = decodedToken;

        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid token!" });
    }
};

module.exports = getJwtToken;
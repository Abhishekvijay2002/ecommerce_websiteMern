const jwt = require("jsonwebtoken");

const authuser = (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({ msg: "JWT not found" });
        }

        let verifyToken;
        try {
            verifyToken = jwt.verify(token, 'secrete-key');
        } catch (err) {
            return res.status(401).json({ msg: "Invalid JWT token" });
        }

        if (verifyToken.role !== "user") {
            return res.status(403).json({ msg: "Access denied. Admin verification failed" });
        }

        req.userId = verifyToken.id; // Ensure `req.userId` is set correctly.
        next();
    } catch (error) {
        res.status(error.status || 500).json({ msg: error.message || "Internal server error" });
    }
};

module.exports = authuser;



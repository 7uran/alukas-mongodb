const jwt = require("jsonwebtoken");
const VerifyToken = async (req, res, next) => {
    if (!req.headers["authorization"]) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedJwt.user;
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
};

const VerifyAdminRole = (req, res, next) => {
    const { role } = req.user;
    if (role === "admin") {
        next();
    } else {
        return res.status(401).json({ message: "Unauthorized" });
    }
};
module.exports = VerifyToken;
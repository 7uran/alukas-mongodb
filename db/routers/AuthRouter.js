const express = require("express");
const { AuthRegister, AuthLogin } = require("../controllers/UserController");
const router = express.Router();

router.post("/register", AuthRegister);
router.post("/login", AuthLogin);

module.exports = router;
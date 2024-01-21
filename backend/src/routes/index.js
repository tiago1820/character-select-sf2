const { Router } = require("express");
const router = Router();

const AuthController = require("../controllers/authController");
const auth = new AuthController();

// Authentication
router.get("/auth", (req, res) => auth.signIn(req, res));

module.exports = router;
const express = require("express");
const router = express.Router();
const { registerUser, authUser } = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/register", registerUser);
router.post("/login", authUser);

module.exports = router;

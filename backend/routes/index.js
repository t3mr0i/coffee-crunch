const express = require("express");
const router = express.Router();

router.use("/api/auth", require("./authRoutes"));
router.use("/api/coffee", require("./coffeeRoutes"));
router.use("/api/posts", require("./postRoutes"));
router.use("/api/users", require("./userRoutes"));
router.use("/api/chat", require("./chatRoutes"));

module.exports = router;

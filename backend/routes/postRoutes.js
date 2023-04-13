const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const checkAuth = require("../middleware/checkAuth");

router.post("/", checkAuth, postController.addPost);
router.get("/", postController.getAllPosts);
router.post("/:id/comments", checkAuth, postController.addComment);

module.exports = router;

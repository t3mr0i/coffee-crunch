const { Post } = require("../models");

exports.addPost = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body, userId: req.userId });
    res.status(201).json({ message: "Post created", post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json({ posts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addComment = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const comment = { userId: req.userId, text: req.body.text };
    post.comments = [...post.comments, comment];
    await post.save();
    res.status(201).json({ message: "Comment added", post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

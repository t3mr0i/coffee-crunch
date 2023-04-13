const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Sample chat route
router.get('/chats', chatController.getAllChats);

// Add more routes here as needed

module.exports = router;

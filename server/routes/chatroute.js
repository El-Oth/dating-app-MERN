const express = require('express');
const router = express.Router();
const {getMessages, addMessages} = require("../controllers/chatcontroller")

router
// Get Messages
app.get('/messages', getMessages)

// Add a Message
app.post('/messages', addMessages)

module.exports = router
var express = require('express');
var router = express.Router();

// Require controller modules.
var chat_controller = require('../controllers/chatController.js');


/// BOOK ROUTES ///
// GET catalog home page.
router.get('/', chat_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).

module.exports = router;
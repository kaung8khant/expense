var express = require('express');
var router = express.Router();

// Require controller modules.
var balance_controller = require('../controllers/balanceController');


/// BOOK ROUTES ///
// GET catalog home page.
router.get('/', balance_controller.index);
router.post('/', balance_controller.insert);
router.delete('/:id', balance_controller.delete);
router.put('/:id', balance_controller.update);
// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).

module.exports = router;
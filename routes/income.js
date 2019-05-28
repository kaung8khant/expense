var express = require('express');
var router = express.Router();

// Require controller modules.
var income_controller = require('../controllers/incomeController');


/// BOOK ROUTES ///
// GET catalog home page.
router.get('/', income_controller.index);
router.post('/', income_controller.insert);
router.delete('/:id', income_controller.delete);
// router.delete('/:id', income_controller.delete);
// router.post('/:id', income_controller.update);
// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).

module.exports = router;
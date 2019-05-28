var express = require('express');
var router = express.Router();

// Require controller modules.
var category_controller = require('../controllers/categoryController.js');


/// BOOK ROUTES ///
// GET catalog home page.
router.get('/', category_controller.index);
router.post('/', category_controller.insert);
router.put('/:id', category_controller.update);
router.delete('/:id', category_controller.delete);
// router.put('/:id', balance_controller.update);
// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).

module.exports = router;
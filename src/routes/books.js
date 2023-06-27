var express = require('express');
var router = express.Router();
var booksCtrl = require('../controllers/books');


router.get('/:skip', booksCtrl.getAllBooks); // get all books
router.post('/add', booksCtrl.addBook) // add a book

module.exports = router;

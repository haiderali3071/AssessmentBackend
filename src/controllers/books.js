const bookService = require('../services/books');

exports.getAllBooks = async (req, res) => {
    try {
        const { skip } = req.params;
        if (skip !== null && skip !== undefined) {
            const books = await bookService.getAllBooks(skip);
            if (books) {
                res.status(200).send({ result: 'success', books });
            }
            else {
                res.status(400).send({ result: 'error occured' });
            }
        }
        else {
            res.status(400).send({ result: 'error occured' });
        }
    }
    catch (err) {
        res.status(500).send();
    }
}



exports.addBook = async (req, res) => {
    try {
        const { title, description, discountRate, coverImageUrl, price } = req.body;
        if (title && description && price) {
            const result = await bookService.createBook(title, description, price, discountRate, coverImageUrl);
            if (result) {
                res.status(200).send({ result: 'success' });
            }
            else {
                res.status(400).send({ result: 'error occured' });
            }
        }
        else {
            res.status(400).send({ result: 'invalid request' });
        }
    }
    catch (err) {
        res.status(500).send({});
    }
}
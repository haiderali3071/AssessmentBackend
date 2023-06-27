const Book = require('../entities/book');
const { pageSize } = require('../../utilities/config');

exports.createBook = async (title, description, price, discountRate, coverImageUrl) => {
    let result = true;
    try {
        const book = new Book({ title, description, price, discountRate, coverImageUrl });
        await book.save();
    }
    catch (err) {
        result = false;
    }
    finally {
        return result;
    }
}

exports.getAllBooks = async (skip) => {
    let result;
    try {
        const books = await Book.find({}).lean().skip(Number(skip)).limit(pageSize);
        result = books;
    }
    catch (err) {
        result = false;
    }
    finally {
        return result;
    }
}
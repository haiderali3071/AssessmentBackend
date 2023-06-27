const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    discountRate: {
        type: Number,
        validate: (value) => {
            if (value < 1 || value > 99) {
                throw new Error('Invalid discount');
            }
        }
    },
    coverImageUrl: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        validate: (value) => {
            if (typeof value !== 'number') {
                throw new Error('Invalid price');
            }
        }
    },
    comments: {
        type: [Object]
    }
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book
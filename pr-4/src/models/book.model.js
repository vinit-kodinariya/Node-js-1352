const mongoose = require("mongoose")
const bookSchema = new mongoose.Schema(
    {
        book_name: {
            type: String,
            trim: true,
        },
        book_desc: {
            type: String,
            trim: true,
        },
        book_condition: {
            type: String,
            trim: true,
        },
        book_price: {
            type: String,
            trim: true,
        },
        book_pages: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
        category:{
            type:mongoose.Types.ObjectId,
            ref:"stationary"
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const Book = mongoose.model("book", bookSchema)
module.exports = Book;
const mongoose = require("mongoose")

const groceryShema = new mongoose.Schema(
    {
        Products_name: {
            type: String,
            trim: true,
        },
        Customers_name: {
            type: String,
            trim: true,
        },
        Categories: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const grocery =mongoose.model("grocery",groceryShema);
module.exports = grocery;
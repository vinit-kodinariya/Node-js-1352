const mongoose = require("mongoose")
const schoolSchema = new mongoose.Schema(
    {
        school_name: {
            type: String,
            trim: true,
        },
        student_name: {
            type: String,
            trim: true,
        },
        student_dob: {
            type:String,
            trim: true,
        },
        student_gender: {
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
        versionKey: false,
    }
)

const School = mongoose.model("school", schoolSchema)
module.exports = School;
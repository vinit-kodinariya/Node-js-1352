const mongoose = require("mongoose")

const musicShema = new mongoose.Schema(
    {
        Songs_name: {
            type: String,
            trim: true,
        },
        Artists_name: {
            type: String,
            trim: true,
        },
        Songs_duration: {
            type: String,
            trim: true,
        },
        Playlists: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
        category:{
            type:mongoose.Types.ObjectId,
            ref:"movie"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const music =mongoose.model("music",musicShema);
module.exports = music;
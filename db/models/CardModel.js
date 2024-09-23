const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        trim: true,
    },
    image: {
        type: String,
    },
    image2: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    cardType: {
        type: String,
        required: [true, "Type is required"],
    }
});


module.exports = mongoose.model("Card", CardSchema);

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
    features: {
        color: {
            type: String,
            required: [true, "color is required"],
        },
        size: {
            type: String,
            required: [true, "size is required"],
        },
        material: {
            type: String,
            required: [true, "material is required"],
        },
    },
});

module.exports = mongoose.model("ShopCard", CardSchema);

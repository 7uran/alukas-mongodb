const Card = require("../models/ShopCardModel");

const { ErrorHandler } = require("../utils/ErrorHandlers");

const getAllCards = async (req, res, next) => {
    try {
        const cards = await Card.find();
        if (!cards.length) {
            return next(new ErrorHandler("No cards found", 404));
        }
        res.status(200).json({ success: true, cards });
    } catch (error) {
        next(error);
    }
};

const getCardById = async (req, res, next) => {
    try {
        const card = await Card.findById(req.params.id);
        if (!card) {
            return next(new ErrorHandler("Card not found", 404));
        }
        res.status(200).json({ success: true, card });
    } catch (error) {
        next(new ErrorHandler("Invalid card ID", 400));
    }
};

const createCard = async (req, res) => {
    try {
        const { title, price, features } = req.body;

     
        const { size, color, material } = features || {};

        if (!size || !color || !material) {
            return res.status(400).json({
                message: "All features (size, color, material) are required."
            });
        }

        const uploadedFile1 = req.files?.image ? req.files.image[0] : null;
        const uploadedFile2 = req.files?.image2 ? req.files.image2[0] : null;

        const newCard = await Card.create({
            title,
            price,
            image: uploadedFile1 ? `/uploads/${uploadedFile1.filename}` : null,
            image2: uploadedFile2 ? `/uploads/${uploadedFile2.filename}` : null,
            createdAt: Date.now(),
            features: {
                size,
                color,
                material,
            },
        });

        return res.status(201).json({
            success: true,
            newCard,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



const deleteCard = async (req, res, next) => {
    try {
        const card = await Card.findByIdAndDelete(req.params.id);
        if (!card) {
            return next(new ErrorHandler("Card not found", 404));
        }

        res.status(200).json({
            success: true,
            message: "Card successfully deleted",
        });
    } catch (error) {
        next(new ErrorHandler("Invalid card ID", 400));
    }
};

module.exports = { getAllCards, getCardById, createCard, deleteCard };

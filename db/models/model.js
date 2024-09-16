const mongoose = require("mongoose");
const slugify = require("slugify");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
  },
  image: {
    type: String,
  },
  slug: {
    type: String,
    unique: true,
    trim: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});


todoSchema.pre("save", function (next) {
  if (this.title && !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model("Todo", todoSchema);

const bloglist = require("../models/model");
const { ErrorHandler } = require("../utils/ErrorHandlers");


const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await bloglist.find();
    if (!blogs.length) {
      return next(new ErrorHandler("No blogs found", 404));
    }
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    next(error);
  }
};

const getBlogById = async (req, res, next) => {
  try {
    const blog = await bloglist.findById(req.params.id);
    if (!blog) {
      return next(new ErrorHandler("Blog not found", 404));
    }
    res.status(200).json({ success: true, blog });
  } catch (error) {
    next(new ErrorHandler("Invalid blog ID", 400));
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, description, slug, createAt } = req.body;

    const uploadedFile = req.file;

    const newBlog = await bloglist.create({
      title,
      description,
      slug,
      createAt,
      image: uploadedFile ? `/uploads/${uploadedFile.filename}` : null,

    });

    return res.status(201).json({
      success: true,
      newBlog,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


const deleteBlog = async (req, res, next) => {
  try {
    const blog = await bloglist.findByIdAndDelete(req.params.id);
    if (!blog) {
      return next(new ErrorHandler("Blog not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Blog successfully deleted",
    });
  } catch (error) {
    next(new ErrorHandler("Invalid blog ID", 400));
  }
};

module.exports = { getAllBlogs, getBlogById, createBlog, deleteBlog };

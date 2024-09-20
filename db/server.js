const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db/dbserver");
const authRouters = require("./routers/AuthRouter");
const blogRouter = require("./routers/routers")
const path = require("path");

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

connectDB();

const PORT = process.env.PORT || 8080;

app.use("/api/v1/data", blogRouter);
app.use("/api/v1/auth", authRouters);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
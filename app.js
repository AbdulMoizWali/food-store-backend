const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./api/config/db");
const userRoutes = require("./api/routes/userRoutes");
const uploadRoutes = require("./api/routes/uploadRoutes");
const restaurantRoutes = require("./api/routes/restaurantRoutes");
const foodRoutes = require("./api/routes/foodRoutes");
const orderRoutes = require("./api/routes/orderRoutes");
const path = require("path");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/orders", orderRoutes);

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

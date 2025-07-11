import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js"; // Import the user routes
import cors from "cors"; // Import CORS middleware

dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Use CORS middleware to allow requests from your React frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Ensure this matches your frontend's address
    credentials: true, // Allow cookies to be sent with the request
  })
);

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);  // Authentication routes (login, signup, etc.)

// Test route
app.get("/test", (req, res) => {
  res.send("Server is up and running");
});

// Start server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
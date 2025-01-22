import express from "express";
const app = express();

// env
import dotenv from "dotenv";
dotenv.config();

//PORT
const PORT = process.env.PORT || 6000;

// json middleware
app.use(express.json());

// routes
import UserRoutes from "./routes/blog.js";
app.use("/api/v1", UserRoutes);

// port running
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

// db connection
import DbConnection from "./config/db.js";
DbConnection();

// Default Route
app.get("/", (req, res) => {
  res.send("Hello Working fine");
});

import express from "express";
import connectDB from "./config/db.js";
import Todo from "./routes/api/todoList.js";
const app = express();

connectDB();

app.use(express.json({ extended: false, limit: "50mb" }));
app.use("/api", Todo);

app.listen(3000, () => {
  console.log("server started");
});

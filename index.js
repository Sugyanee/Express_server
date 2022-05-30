import express from "express";
import connectDB from "./config/db.js";
const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("Hello world ! I am sugyanee");
});
app.get("/about", (req, res) => {
  res.send("I am a 3rd year student of NIT Silchar");
});

app.listen(3000, () => {
  console.log("server started");
});

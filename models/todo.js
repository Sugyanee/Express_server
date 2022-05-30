import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: "string",
  desc: "string",
  date: { type: Date, default: Date.now },
});

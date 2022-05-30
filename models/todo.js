import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: "String",
    required: true,
  },
  desc: {
    type: "String",
    required: true,
  },
  date: { type: Date, default: Date.now },
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;

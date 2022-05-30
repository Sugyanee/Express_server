import express from "express";
import Todo from "../../models/Todo.js";
import mongoose from "mongoose";

const Router = express.Router();
//routes POST api/todo/create
//desc: to create a todo list
//access public

Router.post("/todo/create", async (req, res) => {
  const { title, desc } = req.body;
  console.log({ title, desc });
  try {
    const newTodo = new Todo({ title, desc });
    await newTodo.save();
    res.status(200).json(newTodo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

export default Router;

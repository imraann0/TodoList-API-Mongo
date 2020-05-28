const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

//GET ALL TODO LISTS
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMIT TODO LIST
router.post("/", async (req, res) => {
  const todo = new Todo({
    description: req.body.description,
  });

  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET SPECIFIC TODO
router.get("/:todoId", async (req, res) => {
  console.log(req.params.todoId);

  try {
    const todo = await Todo.findById(req.params.todoId);
    res.json(todo);
  } catch (err) {
    res.json({ mesage: err });
  }
});

// REMOVE SPECIFIC TODO
router.delete("/:todoId", async (req, res) => {
  try {
    const removeTodo = await Todo.remove({ _id: req.params.todoId });
    res.json(removeTodo);
  } catch (error) {
    res.json({ mesage: err });
  }
});

//COMPLETED TODO LIST
router.patch("/:todoId", async (req, res) => {
  try {
    const updatedTodo = await Todo.updateOne(
      { _id: req.params.todoId },
      { $set: { completed: req.body.completed } }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.json({ mesage: err });
  }
});

module.exports = router;

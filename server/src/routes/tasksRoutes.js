import { Router } from "express";
import { getCollection } from "../models/taskModels.js";
import { Task } from "../models/taskModels.js";

// create an instance of our router
const router = Router();

// GET /todos
router.get("/todos", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(404);
  }
});

// POST /todos
router.post("/todos", async (req, res) => {
  let { title } = req.body;
  try {
    const newTask = await Task.create({ title, isCompleted: false });

    res.status(201).json({ title, isCompleted: false, _id: newTask.insertedID });
  } catch (error) {
    console.log(error);
  }
});

// DELETE /todos/:id
router.delete("/todos/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const delTask = await Task.deleteOne({ _id });
    res.status(200).json(delTask);
  } catch (error) {
    console.log(error);
  }
});

// PUT /todos/:id
router.put("/todos/:id", async (req, res) => {
  const _id = req.params.id;
  const { isCompleted } = req.body;

  const updateTask = await Task.updateOne({ _id }, { $set: { isCompleted: !isCompleted } });
  res.status(200).json(updateTask);
});

export default router;

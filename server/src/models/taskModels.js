import mongoose from "mongoose";
import { Schema } from "mongoose";
import { getConnectedClient } from "../config/db.js";

const taskSchema = new Schema({
  title: {
    type: String,
    true: true,
    required: true,
  },
  isCompleted: {
    type: Boolean,
  },
});

export const Task = mongoose.model("Task", taskSchema);

export const getCollection = () => {
  const client = getConnectedClient();
  const collection = client.db("Taskers4").collection("tasks");
  return collection;
};

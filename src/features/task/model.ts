import mongoose from "../../services/db";
const Schema = mongoose.Schema;
const todoTask = new Schema(
  {
    taskId: String,
    userId: String,
    title: String,
    desc: String,
    task_priority: String,
    status: String,
    attachment: Array,
    isActive: Boolean,
    plannedStart: String,
    plannerEnd: String,
    listId: String,
  },
  { timestamps: true }
);
const task = mongoose.model("task", todoTask);
export default task;

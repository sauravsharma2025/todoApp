"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../services/db"));
const Schema = db_1.default.Schema;
const todoTask = new Schema({
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
}, { timestamps: true });
const task = db_1.default.model("task", todoTask);
exports.default = task;

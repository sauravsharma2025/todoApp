"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../services/db"));
const Schema = db_1.default.Schema;
const todoSchema = new Schema({
    listid: String,
    listTitle: String,
    userId: String,
}, {
    timestamps: true,
});
const list = db_1.default.model("list", todoSchema);
exports.default = list;

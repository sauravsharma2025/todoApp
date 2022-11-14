"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
// import list from "./model";
console.log("list");
// route.get("/post/:id/:name", function (req, res, next) {
//   const { query } = req;
//   console.log("SK@", query); //Query Param
//   console.log("SK@", req.params.id); //Path Param
//   console.log("SK@", req.params.name); //Path Param
//   console.log("SK@", req.body); //body payload
//   res.end();
// });
// route.get("/hi", (req, res) => {
// res.send("hi");
// });
exports.default = route;

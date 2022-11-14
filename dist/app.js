"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./features/list/route"));
const route_2 = __importDefault(require("./features/task/route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/list", route_1.default);
app.use("/task", route_2.default);
console.log("SK@12", process.env);
app.listen(3000, () => {
    console.log(`listening port 3000`);
});

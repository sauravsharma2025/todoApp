import express, { Express, Request, Response } from "express";

 import UserRoute from  "./features/list/route";
 import TaskRoute from "./features/task/route";
const app:Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/list", UserRoute);
 app.use("/task", TaskRoute);
console.log("SK@12", process.env);
app.listen(3000, () => {
  console.log(`listening port 3000`);
});


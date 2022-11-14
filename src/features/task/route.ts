import express, { Express, Request, Response } from "express";
const route = express.Router();
import Task from "./model";

// route.get("/createsDb", async (req, res) => {
//   console.log("@TaskGet");
//   // const task:any = await task.find();
//   // res.setEncoding(task);
// });
route.get("/", async (req:Request, res:Response) => {
  console.log("SK@");
   const tasks:any = await Task.find();
  res.send(tasks);
});
export default route;

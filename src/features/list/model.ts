import mongoose from "../../services/db";
const Schema = mongoose.Schema;
const todoSchema = new Schema(
  {
    listid: String,
    listTitle: String,
    userId: String,
  },
  {
    timestamps: true,
  }
);
const list = mongoose.model("list", todoSchema);
export default list;

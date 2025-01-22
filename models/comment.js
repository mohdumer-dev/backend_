import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CommnetSchema = new Schema({
  post: { type: ObjectId, ref: "Post" },
  description: { type: String, min: 6 },
  user: { type: String, required: true },
});
const CommentModel = mongoose.model("Comment", CommnetSchema);

export default CommentModel;

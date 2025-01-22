import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    username: { type: String, unique: true },
    title: { type: String, require: true },
    description: { type: String },
    like: [{ ref: "Like", type: Schema.ObjectId }],
    comment: [{ ref: "Comment", type: Schema.ObjectId }],
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Post", PostSchema);

export default PostModel;

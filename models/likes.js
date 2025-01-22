import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const LikeSchema = new Schema({
  post: { ref: "Post", type: ObjectId },
  user: { type: String, required: true },
});

const LikeModel = mongoose.model("Like", LikeSchema);

export default LikeModel;

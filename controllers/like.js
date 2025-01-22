import PostModel from "../models/post_blog.js";
import LikeModel from "../models/likes.js";

export const likePost = async (req, res) => {
    const { post, user } = req.body;
    try {
      const Like = new LikeModel({
        post,
        user,
      });
      const newLike = await Like.save();
      const Post = await PostModel.findOneAndUpdate(
        { _id: post },
        { $push: { like: newLike._id } },
        { new: true }
      ).populate('like').exec()
  
      res
        .status(200)
        .json({ status: true, msg: "Post Like", data: Post, like:Post });
    } catch (err) {
      console.error(err);
      res.json("Server Issue");
    }
  };


  
export const unlikePost = async (req, res) => {
  const { post, user } = req.body;
  try {
   const Like=await LikeModel.findByIdAndDelete({post,_id:user})
    const Post = await PostModel.findOneAndUpdate(
      { _id: post },
      { $pull: { like: Like._id } },
      { new: true }
    ).populate('like').exec()

    res
      .status(200)
      .json({ status: true, msg: "Post Unliked", data: Post, like: Post });
  } catch (err) {
    console.error(err);
    res.json("Server Issue");
  }
};
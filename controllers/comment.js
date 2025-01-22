import CommentModel from "../models/comment.js";
import PostModel from "../models/post_blog.js";

export const createComment = async (req, res) => {
  const { user, post, description } = req.body;
  try {
    const comment = new CommentModel({
      post,
      user,
      description,
    });
    const NewComment = await comment.save();
    const BlogUpdate = await PostModel.findOneAndUpdate(
      { _id: post },
      { $push: { comment: NewComment._id } },
      { new: true }
    )
      .populate("comment")
      .exec();
    res
      .status(200)
      .json({ status: true, msg: "Comment added", UpdatedBlog: BlogUpdate });
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Down");
  }
};

export const deleteComment = async (req, res) => {
  const { user, post } = req.body;
  try {
    const Comment = await CommentModel.findByIdAndDelete({ _id: user, post });
    const BlogUpdate = await PostModel.findOneAndUpdate(
      { _id: post },
      { $push: { comment: Comment._id } },
      { new: true }
    )
      .populate("comment")
      .exec();
    res
      .status(200)
      .json({ status: true, msg: "Comment Deleted", UpdatedBlog: BlogUpdate });
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Down");
  }
};

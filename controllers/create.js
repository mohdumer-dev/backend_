import PostModel from "../models/post_blog.js";

// createUser
export const createUser = async (req, res) => {
  const { username, title, description } = req.body;
  const User = await PostModel.create({
    username,
    title,
    description,
  });
  res.status(200).json({
    status: true,
    message: "User post created",
    user: User,
  });
};

export const allPosts = async (req, res) => {
  const AllUsers = await PostModel.find()
    .populate("comment")
    .populate("like")
    .exec();
  res.json({ AllUsers });
};


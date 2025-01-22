import express from "express";
const UserRoutes = express.Router();

// importing controllers
import { allPosts, createUser } from "../controllers/create.js";
import { likePost, unlikePost } from "../controllers/like.js";
import {  createComment, deleteComment } from "../controllers/comment.js";

// differnt routes controllers
UserRoutes.post("/signin", createUser);
UserRoutes.post("/like",likePost);
UserRoutes.post('/comment',createComment)
UserRoutes.get('/all',allPosts)
UserRoutes.post('/unlike',unlikePost)
UserRoutes.post('/deleteComment',deleteComment)

export default UserRoutes;

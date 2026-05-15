const express = require("express");
const postRouter = express.Router();

const {
  createPost,
  getPosts,
  updatePost,
  deletePost
} = require ("../controllers/controller.js")


postRouter.route("/post").post(createPost).get(getPosts).put(updatePost).delete(deletePost);

module.exports = postRouter;




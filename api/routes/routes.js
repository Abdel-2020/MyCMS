const express = require("express");
const postRouter = express.Router();
const picRouter = express.Router();

const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
} = require ('../controllers/postsController.js')


const {
  getPics
} = require('../controllers/picsController.js')

// Posts

postRouter.route('/post/:id').get(getPost);
postRouter.route('/post').post(createPost).get(getPosts).put(updatePost).delete(deletePost);

// Pics

picRouter.route('/').get(getPics);


module.exports = { postRouter, picRouter };




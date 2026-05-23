const posts = require ('../../services/posts.js');

// Create Post
 const createPost = async (req,res) => {
  try {
   const {title, body, author} = req.body;
   data = posts.createPost(title, body, author);

   res.status(200).json({msg:'Post created successfully', data});

  } catch (error) {
   res.status(500).json({msg:'Internal Server Error', error});
  };
};

// Read Post(s)
const getPost = async (req,res) => {
  try {

    const { id } = req.params
    data = posts.getPost(id);
    res.status(200).render('article.njk', {post: data[0]})

  } catch (error) {
   res.status(500).json({msg:'Internal Server Error', error});
  };
};

const getPosts = async (req,res) => {
  try {

   data = posts.getPosts();
   return res.status(200).render('postList.njk', {posts: data});

  } catch (error) {
   res.status(500).json({msg:'Internal Server Error', error});
  };
};

// Update Post
const updatePost = async (req,res) => {
  try {
   const post = req.body;
   console.log(`Updating post with ID:${post.id}, Title:${post.title}`);

   data = posts.updatePost(post);
   console.log('Post Updated');

   res.status(200).json({msg:'Post updated successfully', data});
  } catch (error) {
   res.status(500).json({msg:'Internal Server Error', error});
  };
};

// Delete Post(s)
const deletePost = async (req, res) => {
  try {
   const {id} = req.body;
   data = posts.deletePost(id);

   res.status(200).json({msg: "Post deleted successfully", data});
  } catch (error) {
   res.status(500).json({msg:'Internal Server Error', error});
  };
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
};

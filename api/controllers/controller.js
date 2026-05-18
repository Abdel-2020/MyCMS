const posts = require ('../../services/posts.js')

// Create Post
 const createPost = async (req,res) => {
  try {
   const {title, body, date, author, last_updated} = req.body;
   data = posts.createPost(title, body, date, author, last_updated);

   res.status(200).json({msg:'success', data})
  } catch (error) {
   res.status(500).json({msg:'Internal Server Error', error}) 
  }
}

// Read Post(s)
const getPost = async (req,res) => {
  try {
    console.log('Post Read')  

  } catch (error) {
   res.status(500).json({msg:'Internal Server Error', error}) 
  }
}

const getPosts = async (req,res) => {
  try {
   data = posts.getPosts()

    return res.status(200).json({msg:'success', data})
  } catch (error) {
   res.status(500).json({msg:'Internal Server Error', error}) 
  }
}

// Update Post
const updatePost = async (req,res) => {
  try {
   const post = req.body;
   console.log(`Updating post with ID:${post.id}, Title:${post.title}`)

   data = posts.updatePost(post);
   console.log('Post Updated')

   res.status(200).json({msg:'success', data})
  } catch (error) {
   res.status(500).json({msg:'Internal Server Error', error}) 
  }
}

// Delete Post(s)
const deletePost = async (req, res) => {
  try {
   const { id } = req.body
   data = posts.deletePost( id )

   console.log('Post Deleted')
   res.status(200).json({msg: "success", data})
  } catch (error) {
   res.status(500).json({msg:'Internal Server Error', error}) 
  }
}

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost
}

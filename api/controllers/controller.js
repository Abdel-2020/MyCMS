const posts = require ('../../services/posts.js')

// Create Post
 const createPost = async (req,res) => {
  try {
   const {title, body, date, author, last_updated} = req.body;
   console.log(`Creating post: ${title}, ${body}, ${date}, ${author}, ${last_updated}`)
   posts.createPost(title, body, date, author, last_updated);
   console.log("Post Created")
   res.status(200).json({msg:"success"}) 
  } catch (error) {
   console.log(error) 
  }
}

// Read Post(s)
const getPost = async (req,res) => {
  try {
    console.log("Post Read")  
  } catch (error) {
   console.log(error) 
  }
}

const getPosts = async (req,res) => {
  try {
   console.log("getting posts:")
   data = posts.getPosts()
    return res.status(200).json({msg:"success", data:data})
  } catch (error) {
   console.log(error) 
  }
}

// Update Post
const updatePost = async (req,res) => {
  try {
   console.log("Post Updated") 
  } catch (error) {
   console.log(error) 
  }
}

// Delete Post(s)
const deletePost = async (req, res) => {
  try {
   const { id } = req.body
   posts.deletePost( id )
   console.log("Post Deleted") 
  } catch (error) {
   console.log(error) 
  }
}

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost
}

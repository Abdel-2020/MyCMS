

// Create Post
 const createPost = async (req,res) => {
  try {
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
   console.log("Posts Read") 
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

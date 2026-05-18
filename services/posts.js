const { db } = require ('../db/connect.js');

// Workflow:
// Use db.prepare to prepare a query.
// Then use the statement class API in order to execute queries synchronously
// A prepared statement is an efficient binary representation of the SQL query.
// They are parameterizeable which helps to protect against SQL Injection.

const createPost = (title, body, date, author, last_updated) => {
  const statement = db.prepare(`INSERT INTO blog_posts ( title, body, date, author, last_updated) VALUES (?, ?, ?, ?, ?)`);
  const result = statement.run(title, body, date, author, last_updated);
  console.log(result)
  return result
}

const getPosts = () => {
  const statement = db.prepare(`SELECT * FROM blog_posts`);
  const result = statement.all();
  return result
}

// Order of the parameters matters here.... Annoyingly!
// title, body, date, author, last_updated, id
const updatePost = (updatedPost) => { 
// Build the query including only parameters that have been passed.
  keys = Object.keys(updatedPost) 
  const setClause = keys.map(key => `${key} = '${updatedPost[key]}'`).join(', ')

  const statement = db.prepare(`
    UPDATE blog_posts
    SET ${setClause}
    WHERE id = ?
  `)
  const result = statement.run(updatedPost.id) 
}

const deletePost = (id) => {
  const statement = db.prepare(`DELETE FROM blog_posts WHERE id = ? `)
  const result = statement.run(id)
  return result
}

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
}

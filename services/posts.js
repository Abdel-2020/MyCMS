const { db } = require ('../db/connect.js');

// Workflow:
// Use db.prepare to prepare a query.
// Then use the statement class API in order to execute queries synchronously
// A prepared statement is an efficient binary representation of the SQL query.
// They are parameterizeable which helps to protect against SQL Injection.

// A post consists of:
// title        = string
// body         = string
// date         = int (Unix Timestamp)
// author       = string
// last_updated = int (Unix Timestamp)


const createPost = (title, body, author) => {
  console.log('Create Post Service')
  const statement = db.prepare(`INSERT INTO blog_posts ( title, body, author) VALUES (?, ?, ?)`);
  const result = statement.run(title, body, author);
  console.log(result);
  return result;
};

// Returns an array of JSON objects. Need to convert this to HTML
// to render direclty in browser with HTMX
const getPosts = () => {

  const statement = db.prepare(`SELECT * FROM blog_posts`);
  const data = statement.all();
  return data
};

// I'm not 100% sure if this is protected from SQL Injection
// given that we're directly using the parameters within the updated post object.
// Needs reviewing
const updatePost = (updatedPost) => {
// Build the query including only parameters that have been passed.
  keys = Object.keys(updatedPost);
  const setClause = keys.map(key => `${key} = '${updatedPost[key]}'`).join(', ');

  const statement = db.prepare(`
    UPDATE blog_posts
    SET ${setClause}
    WHERE id = ?
  `);

  const result = statement.run(updatedPost.id);
};

const deletePost = (id) => {
  const statement = db.prepare(`DELETE FROM blog_posts WHERE id = ? `);
  const result = statement.run(id);
  return result;
};

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
};

const { db } = require ('../db/connect.js');

// Workflow:
// Create a prepared statement to insert data:
//  let insert = db.prepare(sql)
//
// Execute prepared statement with:
//  statement.run(params)
//
// To read from a table the process is similar:
//  let read = database.prepare('SELECT * FROM data ORDER BY key');
//
// Execute the read statement:
//  console.log(query.all());
//
// So to recap, use db.prepare to prepare a query.
// Then use the statement class API in order to execute queries synchronously
// A prepared statement is an efficient binary representation of the SQL query.
// They are parameterizeable which helps to protect against SQL Injection.

const createPost = (title, body, date, author, last_updated) => {
  const statement = db.prepare(`INSERT INTO blog_posts ( title, body, date, author, last_updated) VALUES (?, ?, ?, ?, ?)`);
  const result = statement.run(title, body, date, author, last_updated);
  console.log(result)
}

const getPosts = () => {
  const statement = db.prepare(`SELECT * FROM blog_posts`);
  const result = statement.all();
  return result
}

/*
const updatePost = (id, title, body, date, author, last_updated) => {
  const statement = db.prepare(`UPDATE blog_posts SET`)
}
*/

const deletePost = (id) => {
  const statement = db.prepare(`DELETE FROM blog_posts WHERE id = ${id} `)
  const result = statement.run()
  console.log(result);
}

module.exports = {
  getPosts,
  createPost,
  deletePost,
}

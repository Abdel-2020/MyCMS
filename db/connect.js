const sqlite = require('node:sqlite');
const path = require ('node:path');

dbPath = path.resolve(__dirname, 'cms.db');

// I guess this could be considered the schema...
const createBlogPostsTable = () =>{
  const statement = db.prepare(`
      CREATE TABLE IF NOT EXISTS blog_posts(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      body TEXT NOT NULL,
      date DATETIME DEFAULT CURRENT_TIMESTAMP,
      author TEXT NOT NULL,
      last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
      );
  `);
  result = statement.all();
  return result;
}

const createPicturesTable = () => {
  const statement = db.prepare(`
    CREATE TABLE IF NOT EXISTS pictures(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    file_path TEXT NOT NULL UNIQUE,
    file_name TEXT NOT NULL,
    mime_type TEXT NOT NULL,
    alt_text TEXT DEFAULT ''
    );
 `);
 result = statement.all();
 return result;
}

// Represents a single, synchronous connection to the DB
const db = new sqlite.DatabaseSync(dbPath, {
  open: false
});

// connect to db
function connect(){
  if(!db.isOpen){
    db.open();
    createPicturesTable();
    createBlogPostsTable();
  } else {
    console.log('There is already a connection to the database...');
  };
};

module.exports = {
  db,
  connect
};

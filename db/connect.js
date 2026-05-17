const sqlite = require('node:sqlite');
const path = require ('node:path');

dbPath = path.resolve(__dirname, 'cms.db')

// Represents a single, synchronous connection to the DB
const db = new sqlite.DatabaseSync(dbPath, {
  open: false
});


// connect to db
function connect(){
  if(!db.isOpen){
    db.open()
  } else {
    console.log('There is already a connection to the database...')
  }
}


module.exports = {
  db,
  connect
}





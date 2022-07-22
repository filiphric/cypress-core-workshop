const fs = require('fs')
const path = require('path')
const dbPath = path.resolve('./trelloapp/backend/data/database.json')

module.exports.clearDatabase = () => {

  const emptyDb = {
    "boards": [],
    "cards": [],
    "users": [],
    "lists": []
  }

  fs.writeFileSync(dbPath, JSON.stringify(emptyDb, null, 2))

  return emptyDb;

};
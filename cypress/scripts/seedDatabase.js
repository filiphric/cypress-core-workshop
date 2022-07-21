const fs = require('fs')
const path = require('path')
const dbPath = path.resolve('./trelloapp/backend/data/database.json')

module.exports.seedDatabase = (data) => {

  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))

  return data;

};
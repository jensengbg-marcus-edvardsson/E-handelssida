const lowdb = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const adapter = new FileAsync('database.json');
const database = lowdb(adapter);

database.defaults({products: []}).write();

module.exports = db;
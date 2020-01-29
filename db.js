const lowdb = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const adapter = new FileAsync('database.json');
const database = lowdb(adapter);

exports.initiateDatabase = () => {
    const hasDatabase = database.has('products').value();

    if (!hasDatabase) {
        database.defaults({ products: [] }).write();
    }
};

exports.getProducts = () => {
    return database.get('products').value();
}
const http = require('http');
const app = require('./app');
const database = require('./db');

const port = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server started on port: ', port);
    database.initiateDatabase();
});
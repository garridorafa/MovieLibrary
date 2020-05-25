const db = require('mysql');

let conn = db.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'moviedata'
});

module.exports = {
    conn,
    dbConnect,
    dbDisconnect
}

function dbConnect(cb) {
    conn.connect();
}

function dbDisconnect(cb) {
    conn.end();
}

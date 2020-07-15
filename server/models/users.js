const dbController = require('./db-mysql');

module.exports = {
    getUserByUsername,
    setUserToken
}

function getUserByUsername(username, cb) {
    dbController.conn.query(`SELECT * FROM users WHERE username = '${username}'`, (err, result) => {
        if (err) throw err;
        cb(result.length === 0 ? null : result[0]);
    })
}

function setUserToken (id, token, cb) {
    dbController.conn.query(`UPDATE users SET token = '${token}' WHERE id = ${id}`, (err, result) => {
        if (err) throw err;
        cb(result);
    })
}
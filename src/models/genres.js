const dbController = require('./db-mysql');

module.exports = {
    getAllGenres,
    getGenreByID,
    AddGenre,
    deleteGenreById
}

function getAllGenres(cb) {
    dbController.dbConnect(err => {
        if (err) throw err        
    });
    dbController.conn.query('SELECT * FROM genres', (err, result) => {
        if (err) throw err;
        cb(result);
    })
    dbController.dbDisconnect();
}

function getGenreByID(id, cb) {
    dbController.dbConnect(err => {
        if (err) throw err        
    });
    dbController.conn.query(`SELECT * FROM genres WHERE genreID = ${id}`, (err, result) => {
        if (err) throw err;
        cb(result);
    })
    dbController.dbDisconnect();
}

function AddGenre(genreName, cb) {
    dbController.dbConnect(err => {
        if (err) throw err        
    });
    dbController.conn.query(`INSERT INTO genres (genreName) VALUES ('${genreName}')`, (err, result) => {
        if (err) throw err;
        cb(result);
    })
    dbController.dbDisconnect();
}

function deleteGenreById(id, cb) {
    dbController.dbConnect(err => {
        if (err) throw err        
    });
    dbController.conn.query(`DELETE FROM genres WHERE genreID = ${id}`, (err, result) => {
        if (err) throw err;
        cb(result);
    })
    dbController.dbDisconnect();
}

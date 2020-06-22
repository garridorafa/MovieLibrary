const dbController = require('./db-mysql');

module.exports = {
    getAllMovies,
    getMovieByID,
    AddMovie,
    deleteMovieById
}

function getAllMovies(cb) {
    dbController.conn.query('SELECT * FROM movies', (err, result) => {
        if (err) throw err;
        cb(result);
    })
}

function getMovieByID(id, cb) {
    dbController.conn.query(`SELECT * FROM movies WHERE movieID = ${id}`, (err, result) => {
        if (err) throw err;
        cb(result);
    })
}

function AddMovie(movieName, year, cover, youtubelink, cb) {
    dbController.conn.query(`INSERT INTO movies (name, year, cover, youtubelink) VALUES ('${movieName}', ${year},'${cover}', '${youtubelink}')`, (err, result) => {
        if (err) throw err;
        cb(result);
    })
}

function deleteMovieById(id, cb) {
    dbController.conn.query(`DELETE FROM movies WHERE movieID = ${id}`, (err, result) => {
        if (err) throw err;
        cb(result);
    })
}

const dbController = require('./db-mysql');

module.exports = {
	getAllGenres,
	getGenreByID,
	AddGenre,
	deleteGenreById
}

function getAllGenres(cb) {
	dbController.conn.query('SELECT * FROM genres', (err, result) => {
		if (err) throw err;
		cb(result);
	})
}

function getGenreByID(id, cb) {
	dbController.conn.query(`SELECT * FROM genres WHERE genreID = ${id}`, (err, result) => {
		if (err) throw err;
		cb(result);
	})
}

function AddGenre(genreName, cb) {
	dbController.conn.query(`INSERT INTO genres (genreName) VALUES ('${genreName}')`, (err, result) => {
		if (err) throw err;
		cb(result);
	})
}

function deleteGenreById(id, cb) {
	dbController.conn.query(`DELETE FROM genres WHERE genreID = ${id}`, (err, result) => {
		if (err) throw err;
		cb(result);
	})
}

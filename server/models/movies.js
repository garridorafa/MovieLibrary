const dbController = require('./db-mysql');
const casting = require('./casting');
const genres = require('./genres_movies');

module.exports = {
	getAllMovies,
	getMovieByID,
	AddMovie,
	deleteMovieById
}

function getActorsMovies(cb) {
	casting.getAllCasting(result => cb(result))
}

function mergeActorAndMovies(movies, cb) {
	getActorsMovies(casting => {
		for (let j = 0; j < casting.length; j++) {
			for (let i = 0; i < movies.length; i++) {
				if (j === 0) {
					movies.forEach(movies => {
						movies.actors = [];
					});
				}
				if (movies[i].movieID === casting[j].movieID) {
					movies[i].actors = [
						...movies[i].actors,
						{
							id: casting[j].actorID,
							name: casting[j].actorName
						}
					];
				}
			}
		}
		cb(movies)
	});
}

function getGenresMovies(cb) {
	genres.getAllCasting(result => cb(result))
}

function mergeGenresAndMovies(movies, cb) {
	getGenresMovies(genres => {
		for (let j = 0; j < genres.length; j++) {
			for (let i = 0; i < movies.length; i++) {
				if (j === 0) {
					movies.forEach(movies => {
						movies.genres = [];
					});
				}
				if (movies[i].movieID === genres[j].movieID) {
					movies[i].genres = [
						...movies[i].genres,
						{
							id: genres[j].genreID,
							name: genres[j].genreName
						}
					];
				}
			}
		}
		cb(movies)
	});
}

function getAllMovies(cb) {
	dbController.conn.query('SELECT * FROM movies', (err, movies) => {
		if (err) throw err;
		mergeActorAndMovies(movies, actors => cb(actors));
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

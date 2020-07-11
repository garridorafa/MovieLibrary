const dbController = require('./db-mysql');

module.exports = {
  getAllGenres_movies,
  addGenres_movies,
  deleteGenres_movies
}

function getAllGenres_movies(cb) {
  dbController.conn.query(`SELECT genrelist.genreID, genrelist.movieID, genres.genreName as genreName FROM genrelist INNER JOIN movies ON genrelist.movieID=movies.movieID INNER JOIN genres ON genrelist.genreID=genres.genreID;`, (err, result) =>{
    if (err) throw err;
    cb(result)
  });
};

function addGenres_movies(movieID, genreID, cb) {
  dbController.dbConnect(err =>{
    if (err) throw err;
  })
  dbController.conn.query(`INSERT INTO genrelist (movieID, genreID) VALUES ('${movieID}', '${genreID}')` , (err => {
    if (err) throw err;
  }))
}

function deleteGenres_movies(movieID, genreID, cb) {
  dbController.conn.query(`DELETE FROM genrelist HHERE movieID=${movieID} AND genreID=${genreID}`, err => {
    if (err) throw err;
  })  
}
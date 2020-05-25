const dbController = require('./db-mysql');

function getAllMovies(cb) {
    dbController.dbConnect(err => {
        if (err) throw err        
    });
    dbController.conn.query('SELECT * FROM movies', (err, result) => {
        if (err) throw err;
        cb(result);
    })
    dbController.dbDisconnect();
}

function getMovieByID(id, cb) {
    dbController.dbConnect(err => {
        if (err) throw err        
    });
    dbController.conn.query(`SELECT * FROM movies WHERE movieID = ${id}`, (err, result) => {
        if (err) throw err;
        cb(result);
    })
    dbController.dbDisconnect();
}

function AddMovie(movieName, year, cover, youtubelink, cb) {
    dbController.dbConnect(err => {
        if (err) throw err        
    });
    dbController.conn.query(`INSERT INTO movies (name, year, cover, youtubelink) VALUES ('${movieName}', ${year},'${cover}', '${youtubelink}')`, (err, result) => {
        if (err) throw err;
        cb(result);
    })
    dbController.dbDisconnect();
}

function deleteMovieById(id, cb) {
    dbController.dbConnect(err => {
        if (err) throw err        
    });
    dbController.conn.query(`DELETE FROM movies WHERE movieID = ${id}`, (err, result) => {
        if (err) throw err;
        cb(result);
    })
    dbController.dbDisconnect();
}

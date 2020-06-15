const dbController = require('./db-mysql');

module.exports = {
  getAllCasting,
  addCasting,
  deleteCasting
}

function getAllCasting(cb) {
  dbController.dbConnect(err => {
    if (err) throw err;
  });
  dbController.conn.query('SELECT casting.actorID, casting.movieID, movies.name, movies.year FROM casting INNER JOIN movies ON casting.movieID=movies.movieID;', (err, result) =>{
    if (err) throw err;
    cb(result)
  });
  dbController.dbDisconnect();
};

function addCasting(movieID, actorID, cb) {
  dbController.dbConnect(err =>{
    if (err) throw err;
  })
  dbController.conn.query(`INSERT INTO casting (movieID, actorID) VALUES ('${movieID}', '${actorID}')` , (err => {
    if (err) throw err;
  }))
  dbController.dbDisconnect();
}

function deleteCasting(movieID, actorID, cb) {
  dbController.dbConnect(err => {
    if (err) throw err;
  });
  dbController.conn.query(`DELETE FROM casting HHERE movieID=${movieID} AND actorID=${actorID}`, err => {
    if (err) throw err;
  })  
}
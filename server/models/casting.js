const dbController = require('./db-mysql');

module.exports = {
  getAllCasting,
  addCasting,
  deleteCasting
}

function getAllCasting(cb) {
  dbController.conn.query(`SELECT casting.actorID, casting.movieID, actors.name as actorName, movies.name, movies.year FROM casting INNER JOIN movies ON casting.movieID=movies.movieID INNER JOIN actors ON casting.actorID=actors.actorID;`, (err, result) =>{
    if (err) throw err;
    cb(result)
  });
};

function addCasting(movieID, actorID, cb) {
  dbController.dbConnect(err =>{
    if (err) throw err;
  })
  dbController.conn.query(`INSERT INTO casting (movieID, actorID) VALUES ('${movieID}', '${actorID}')` , (err => {
    if (err) throw err;
  }))
}

function deleteCasting(movieID, actorID, cb) {
  dbController.conn.query(`DELETE FROM casting HHERE movieID=${movieID} AND actorID=${actorID}`, err => {
    if (err) throw err;
  })  
}
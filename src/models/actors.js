const dbController = require('./db-mysql');

function getAllActors(cb) {
    dbController.dbConnect(err => {
        if (err) throw err        
    });
    dbController.conn.query('SELECT * FROM actors', (err, result) => {
        if (err) throw err;
        cb(result);
    })
    dbController.dbDisconnect();
}

function getActorByID(id, cb) {
    dbController.dbConnect(err => {
        if (err) throw err        
    });
    dbController.conn.query(`SELECT * FROM actors WHERE actorID = ${id}`, (err, result) => {
        if (err) throw err;
        cb(result);
    })
    dbController.dbDisconnect();
}

function AddActor(name, dateOfBirth, photo, cb) {
    dbController.dbConnect(err => {
        if (err) throw err        
    });
    dbController.conn.query(`INSERT INTO actors (name, dateOfBirth, photo) VALUES ('${name}', ${dateOfBirth}, '${photo}')`, (err, result) => {
        if (err) throw err;
        cb(result);
    })
   dbController.dbDisconnect();
}

function deleteActorById(id, cb) {
    dbController.dbConnect(err => {
        if (err) throw err        
    });
    dbController.conn.query(`DELETE FROM actors WHERE actorID = ${id}`, (err, result) => {
        if (err) throw err;
        cb(result);
    })
    dbController.dbDisconnect();
}

const dbController = require('./db-mysql');
const casting = require('./casting');
const { getAllCasting } = require('./casting');

module.exports = {
	getAllActors,
	getActorByID,
	AddActor,
	deleteActorById
}

function getAllActors(cb) {
	dbController.conn.query('SELECT * FROM actors', (err, result) => {
		if (err) throw err;
		cb(result);
	})
}

function getActorByID(id, cb) {
	dbController.conn.query(`SELECT * FROM actors WHERE actorID = ${id}`, (err, result) => {
		if (err) throw err;
		cb(result);
	})
}

function AddActor(name, dateOfBirth, photo, cb) {
	dbController.conn.query(`INSERT INTO actors (name, dateOfBirth, photo) VALUES ('${name}', ${dateOfBirth}, '${photo}')`, (err, result) => {
		if (err) throw err;
		cb(result);
	})
}

function deleteActorById(id, cb) {
	dbController.conn.query(`DELETE FROM actors WHERE actorID = ${id}`, (err, result) => {
		if (err) throw err;
		cb(result);
	})
}

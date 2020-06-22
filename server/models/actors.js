const dbController = require('./db-mysql');
const casting = require('./casting');

module.exports = {
	getAllActors,
	getActorByID,
	AddActor,
	deleteActorById
}

function getActorsMovies(cb) {
	casting.getAllCasting(result => cb(result))
}

function mergeActorAndMovies(actors, cb) {
	getActorsMovies(casting => {
		for (let j = 0; j < casting.length; j++) {
			for (let i = 0; i < actors.length; i++) {
				if (j===0) {
					actors.forEach(actors => {
						actors.movies = [];			
					});
				}
				if (actors[i].actorID === casting[j].actorID) {
					actors[i].movies = [
						...actors[i].movies,
						{	
							id: casting[j].movieID,
							title: casting[j].name}
					];
				}
			}
		}
		cb(actors)
	});
	
}



function getAllActors(cb) {
	dbController.conn.query('SELECT * FROM actors', (err, actors) => {
		if (err) throw err;
		
		mergeActorAndMovies(actors, movies => cb(movies))
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

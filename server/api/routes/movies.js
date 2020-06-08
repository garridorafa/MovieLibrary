const Router = require('express');
const router = Router();
const db = require('../../models/movies');

router.get('/movies', (req, res, next) => {
    db.getAllMovies((data) => {
        res.json(data)   
    })
})

router.get('/movies/:id', (req, res) => {
    db.getMovieByID(req.params.id, (data) => {
        res.json(data);
    })
})

router.post('/movies', (req, res) => {
    db.AddMovie(req.body.name, req.body.dateOfBirth, req.body.photo, (data) => {
        res.json(data);
    })
})

router.delete('/movies/:id', (req, res) => {
    db.deleteMovieById(req.params.id, (data) => {
        res.json(data);
    })
})

module.exports = router;
const Router = require('express');
const router = Router();
const db = require('../../models/genres');

router.get('/genres', (req, res) => {
    db.getAllGenres((data) => {
        res.json(data)   
    }); 
});

router.get('/genres/:id', (req, res) => {
    db.getGenreByID(req.params.id, (data) => {
        res.json(data);
    });
});

router.post('/genres', (req, res) => {
    db.AddGenre(req.body.name, req.body.dateOfBirth, req.body.photo, (data) => {
        res.json(data);
    });
});

router.delete('/genres/:id', (req, res) => {
    db.deleteGenreById(req.params.id, (data) => {
        res.json(data);
    });
});

module.exports = router;
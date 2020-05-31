const Router = require('express');
const router = Router();
const db = require('../../models/actors');

router.get('/actors', (req, res) => {
    db.getAllActors((data) => {
        res.json(data)   
    }); 
});

router.get('/actors/:id', (req, res) => {
    db.getActorByID(req.params.id, (data) => {
        res.json(data);
    });
});

router.post('/actors', (req, res) => {
    db.AddActor(req.body.name, req.body.dateOfBirth, req.body.photo, (data) => {
        res.json(data);
    });
});

router.delete('/actors/:id', (req, res) => {
    db.deleteActorById(req.params.id, (data) => {
        res.json(data);
    });
});

module.exports = router;
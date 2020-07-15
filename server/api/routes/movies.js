const Router = require('express');
const router = Router();
const db = require('../../models/movies');

// router.use(userAuthMiddleware)

router.get('/movies', (req, res, next) => {
    db.getAllMovies((data) => {
        res.json(data)   
    })
})

router.get('/movies/favorite', userAuthMiddleware, (req, res, next) => {
    // console.log(req.userId)
    res.json({ favorite: true })  
})

router.get('/movies/:id', (req, res) => {
    db.getMovieByID(req.params.id, (data) => {
        res.json(data);
    })
})

router.post('/movies', (req, res) => {
    db.AddMovie(req.body.name, req.body.year, req.body.cover, req.body.youtubelink, (data) => {
        res.json(data);
    })
})

router.delete('/movies/:id', (req, res) => {
    db.deleteMovieById(req.params.id, (data) => {
        res.json(data);
    })
})

function userAuthMiddleware(req, res, next) {
    if (!req.headers['authorization']) {
        res.status(401).json({ error: 'Unauthorized' })
    } else {
        const token = req.headers['authorization'].replace('Bearer ', '')
        db.getUserByToken(token, (user) => {
            if (user === null) res.status(401).json({ error: 'Unauthorized' })
            else {
                req.userId = user.id
                next()
            }
        })
    }
}

module.exports = router;
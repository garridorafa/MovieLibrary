const Router = require('express');
const crypto = require('crypto');
const router = Router();
const bodyParser = require('body-parser')
const db = require('../../models/users');

router.use(bodyParser.urlencoded({ extended: false }))

router.post('/auth/login', (req, res) => {    
    const { username, password } = req.body
    db.getUserByUsername(username, (user) => {
        if (user === null) {
            res.status(401).json({ error: 'User not found' })
        } else {
            if (password === user.password) {
            // if (hash(password) === user.password) {
                generateToken((token) => {
                    db.setUserToken(user.id, token, () => {
                        res.json({ success: true, token: token })
                    })
                })
            } else {
                res.status(401).json({ error: 'User not found' })
            }
        }
    })
});

function generateToken (cb) {    
    crypto.randomBytes(32, (err, buf) => {
        if (err) throw err;
        cb(buf.toString('base64'))
    });
}

module.exports = router;
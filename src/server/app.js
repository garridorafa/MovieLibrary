const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 8080;

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

app.use(require('./api/routes/actors'))
app.use(require('./api/routes/movies'))
app.use(require('./api/routes/genres'))
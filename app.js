const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 8080;

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

app.use(require('./src/api/routes/actors'))
app.use(require('./src/api/routes/movies'))
app.use(require('./src/api/routes/genres'))
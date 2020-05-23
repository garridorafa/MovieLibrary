const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.listen(port, () => {
    console.log('listening on port ' + port)
});

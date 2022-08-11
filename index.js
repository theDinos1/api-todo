const express = require('express');
const bodyParser = require('body-parser');
app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(require('./routes'));

// app.use(bodyParser.json());
// Start Server
const server = app.listen(3000, () => {
    let host = 'localhost';
    let port = server.address().port;
    console.log(`Server is running at http://${host}:${port}`);
})
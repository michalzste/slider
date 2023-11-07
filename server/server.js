import express from 'express';

const SERVER_PORT = 8080;
const app = express();

app.get('/slides', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.listen(SERVER_PORT, () =>
    console.log(`Example app listening on port 8080!`),
);

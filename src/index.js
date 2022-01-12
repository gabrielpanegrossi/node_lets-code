import express from 'express';

const app = express(),
port = 3000;


app.get('/', function (req, res) {
    res.send("There's a server here");
});

app.get('/health', function (req, res) {
    res.send("Hello you're healthy!");
});

app.get('/hello', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})
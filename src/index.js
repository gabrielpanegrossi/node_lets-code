import express from 'express';

const app = express(),
port = 3000;


app.get('/', function (req, res) {
    res.send({'message':"There's a server here"});
});


//Health
app.get('/health', function (req, res) {
    res.status(200).send({'message':"Hello you're healthy!"});
});

//Items
app.get('/usuario', function (req, res) {
    res.status(200).send({'what':'Get items'});
});

app.post('/usuario', function (req, res) {
    res.status(201).send({'what':'Post item'});
});

app.delete('/usuario', function (req, res) {
    res.status(200).send({'what':'Delete item'});
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})
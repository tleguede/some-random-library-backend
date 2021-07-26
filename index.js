const express = require('express')
const app = express();
const cors = require('cors');
const port = 4000;

app.use(cors())

app.get('/authors', function (req, res) {
    res.send([
        {id: 34, name: 'Random'},
        {id: 44, name: 'Random Bis'},
    ]);
});

app.get('/books', function (req, res) {
    res.send([
        {
            id: 3345,
            name: '23452345',
            isbn: '23452345',
            uri: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
            authorId: 34,
            dateId: 44,
            movementId: 34,
        }
    ]);
});

app.get('/edition_dates', function (req, res) {
    res.send([
        {id: 34, date: '2020'},
        {id: 44, date: '2019'},
    ]);
});

app.get('/literary_movements', function (req, res) {
    res.send([
        {id: 34, name: 'Random Movement'},
        {id: 44, name: 'Random Movement Bis'},
    ]);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
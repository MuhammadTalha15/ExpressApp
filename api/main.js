import express from 'express'

const port = 3000;
const app = express();

app.use(express.static('../public'));

app.get('/', (req, res) => {
    res.sendFile('index');
});

app.get('/about', (req, res) => {
    res.send('This is About testing Route');
});

app.listen(port, () => console.log(`App listening on Port ${port}`))
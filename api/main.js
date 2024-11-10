import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const port = 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('../public'));

console.log(__dirname)
console.log(__filename)

app.get('/', (req, res) => {
    res.sendFile(path.join('/home/muhammad_talha/Software/ExpressApp/', 'public' , 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join('/home/muhammad_talha/Software/ExpressApp/', 'public' , 'about.html'));
});

app.get('/about', (req, res) => {
    res.send('This is About testing Route');
});

app.listen(port, () => console.log(`App listening on Port ${port}`))
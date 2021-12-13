import express from 'express';
import mongoose from 'mongoose';

const app = express();
const connection = mongoose.connect('mongodb://root:root@mongo:27017/docker-tut-db?authSource=admin');

connection
    .then(()=>console.log('Connected to DB 👍👍'))
    .catch(()=>console.error('Error connecting to DB 👎👎'));

app.get('/', async (req, res) => {
    const book = mongoose.model('Book', { 'title': String });
    const book1 = new book({ 'title': 'Book 1' });
    await book1.save();
    const book_data = await book.findOne({});

    res.send(`
        <head>
            <title>Helloooo 🐳!!!</title>
        </head>
        <h1>Hello Docker 🐳!!!</h1>
        <h1>Node env ➡➡➡ ${ process.env.NODE_ENV }</h1>
        <h1>Title ${book_data.title}</h1>
    `);
});
const port = process.env.PORT || 1313;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});


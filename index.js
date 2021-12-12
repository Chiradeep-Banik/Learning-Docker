import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <head>
            <title>Helloooo 🐳!!!</title>
        </head>
        <h1>Hello Docker 🐳!!!</h1>
        <h1>Node env ➡➡➡ ${ process.env.NODE_ENV }</h1>
    `);
});
const port = process.env.PORT || 1313;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});


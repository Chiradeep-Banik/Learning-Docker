import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <head>
            <title>Helloooo</title>
        </head>
        <h1>Hello Docker</h1>
    `);
});

app.listen(1313,()=>{
    console.log('Server is running on port 1313');
});


import express from 'express';
import type { Request, Response } from 'express';
// import client from './database/db';
// import { QueryResult } from 'pg';
import getAllPosts from './database/getAllPosts';
import getPostById from './database/getPostById';
import writePost from './database/writePost';

const app = express();

app.use(express.json());
app.get('/', async (_req: Request, res: Response): Promise<void> => {

    res.send(`
        <head>
            <title>Helloooo 🐳!!!</title>
        </head>
        <h1>Hello Docker 🐳!!!</h1>
        <h1>Node env ➡➡➡ ${process.env['NODE_ENV']}</h1>
        <h1>Port ➡➡➡ ${process.env['PORT']}</h1>
    `);
});

app.get('/posts', getAllPosts);
app.get('/posts/:id', getPostById);
app.post('/posts', writePost);

const port = process.env['PORT'] || 1313;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


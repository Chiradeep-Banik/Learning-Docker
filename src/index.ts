import express from 'express';
import type { Request, Response } from 'express';
import getAllPosts from './database/getAllPosts';
import getPostById from './database/getPostById';
import writePost from './database/writePost';
import signUp from './database/signUp';
import login from './database/login';

const app = express();

app.use(express.json());
app.get('/', async (_req: Request, res: Response): Promise<void> => {
    res.json({
        message: 'This is the blog API',
    });
});

app.get('/api/posts', getAllPosts);
app.get('/api/posts/:id', getPostById);
app.post('/api/posts', writePost);
app.post('/api/user/signup', signUp);
app.post('/api/user/login', login);

const port = process.env['PORT'] || 1313;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


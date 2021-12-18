import client from './db';
import type { Request, Response } from 'express';

const writePost = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, body } = req.body;
        await client.query(`insert into post (title, body) values ('${title}', '${body}')`);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(400).json({
            error: err
        });
    }
};

export default writePost;
import client from './db';
import type { Request, Response } from 'express';
import type { QueryResult } from 'pg';

const getAllPosts = async (_req: Request, res: Response): Promise<void> => {
    try {
        const data: QueryResult<JSON> = await client.query('SELECT * from post');
        res.status(200).json(data.rows);
    } catch (err) {
        console.error(err);
        res.status(400).json({
            error: err
        });
    }
};

export default getAllPosts;
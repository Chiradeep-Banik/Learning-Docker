import client from './db';
import type { Request, Response } from 'express';
import type { QueryResult } from 'pg';

const getPostById = async (req: Request, res: Response): Promise<void> => {
    try {
        if (req.params['id']) {
            const id = parseInt(req.params['id']);
            const data: QueryResult<JSON> = await client.query(`SELECT * from post where post_id=${id}`);
            res.status(200).json(data.rows);
        } else {
            await client.end();
            throw new Error('No id provided');
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({
            error: err
        });
    }
};

export default getPostById;
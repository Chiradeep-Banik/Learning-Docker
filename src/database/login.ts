import client from './db';
import type { Request, Response } from 'express';
import { createHash } from 'crypto';
import type { QueryResult } from 'pg';

const login = async (_req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = _req.body;
        const hasedPassword = createHash('sha256').update(password).digest('hex');
        const data: QueryResult = await client.query(`SELECT * from users where username='${username}' and password='${hasedPassword}'`);
        if (data.rows.length == 0) {
            res.status(404).json({
                error: 'Invalid username or password'
            });
        } else {
            res.status(200).json({
                message: 'Login success'
            });
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({
            error: err
        });
    }
};

export default login;
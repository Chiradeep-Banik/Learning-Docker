import client from './db';
import type { Request, Response } from 'express';
import { createHash } from 'crypto';

const signUp = async (_req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = _req.body;
        const hasedPassword = createHash('sha256').update(password).digest('hex');
        await client.query(`insert into users(username, password) values('${username}', '${hasedPassword}')`);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(400).json({
            error: err
        });
    }
};

export default signUp;
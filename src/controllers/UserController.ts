import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Leo Rocha', email: 'dummy@random.com'},
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },
    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: 'Leo Rocha', 
                email: 'dummy@random.com'},
            message: { 
                subject: 'Account created!', 
                body: 'Congrats, ${Leo Rocha}! Your' +
                'account has been successfully created'}
        });

        return res.send();
    }
};

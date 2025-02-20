import { Resend } from 'resend';

const resend = new Resend('re_2QFApev6_HX1A3dBu259KaiNzgnA7xc6T');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { to, html } = req.body;

        const data = await resend.emails.send({
            from: 'callcentergrupoempcerti@resend.dev',
            to: to,
            subject: 'Información importante Osman Sepulveda',
            html: html
        });

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} 
import express from 'express';
import cors from "cors";
import nodemailer from "nodemailer";
const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());

const users = [];

const transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'norma.schoen@ethereal.email', // generated ethereal user
        pass: 'PFFwytnTC6A2tdFkPW'  // generated ethereal password
    }
});

app.post('/send-email-consultation', async (req, res) => {
    try {
        console.log('Sending email');
        const body = req.body;
        users.push(body);
        await transport.sendMail({
            from: "no-reply@pulse.com",
            to: `${body.email}`,
            subject: "Application confirmation from Pulse",
            html: `
            <h1 style="font-family: Helvetica, Arial, sans-serif; color: #333333; font-size: 24px;">Welcome, ${body.name}!</h1>
            <p style="font-family: Helvetica, Arial, sans-serif; color: #555555; font-size: 16px;">Thank you for reaching out to us. We will ensure that our specialist contacts you within the next 10 minutes.</p>
            <p style="font-family: Helvetica, Arial, sans-serif; color: #555555; font-size: 16px;">For your convenience, we are repeating the information you provided:</p>
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="font-family: Helvetica, Arial, sans-serif; color: #555555; font-size: 16px;"><strong>Name:</strong> ${body.name}</li>
                <li style="font-family: Helvetica, Arial, sans-serif; color: #555555; font-size: 16px;"><strong>Phone:</strong> ${body.phone}</li>
                <li style="font-family: Helvetica, Arial, sans-serif; color: #555555; font-size: 16px;"><strong>E-mail:</strong> ${body.email}</li>
            </ul>
            <p style="font-family: Helvetica, Arial, sans-serif; color: #555555; font-size: 16px;">We look forward to the opportunity to assist you!</p>
            `
        });
        res.send('Okay');
    } catch (e) {
        console.log(e);
        res.send('error');
    }
});

app.post('/send-email-purchase', async (req, res) => {
    try {
        console.log('Sending email');
        const body = req.body;
        users.push(body);
        await transport.sendMail({
            from: "no-reply@pulse.com",
            to: `${body.email}`,
            subject: "Purchase confirmation from Pulse",
            html: `
            <h1 style="font-family: Helvetica, Arial, sans-serif; color: #333333; font-size: 24px;">Welcome, ${body.name}!</h1>
            <p style="font-family: Helvetica, Arial, sans-serif; color: #555555; font-size: 16px;">Thank you for your purchase. We are thrilled to have you as our customer and are excited to get your order to you.</p>
            <p style="font-family: Helvetica, Arial, sans-serif; color: #555555; font-size: 16px;">To ensure everything is correct, we’re providing the details you submitted with your order:</p>
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="font-family: Helvetica, Arial, sans-serif; color: #555555; font-size: 16px;"><strong>Name:</strong> ${body.name}</li>
                <li style="font-family: Helvetica, Arial, sans-serif; color: #555555; font-size: 16px;"><strong>Phone:</strong> ${body.phone}</li>
                <li style="font-family: Helvetica, Arial, sans-serif; color: #555555; font-size: 16px;"><strong>E-mail:</strong> ${body.email}</li>
            </ul>
            <p style="font-family: Helvetica, Arial, sans-serif; color: #555555; font-size: 16px;">Your order is now being processed and we will notify you with the shipping details shortly. If there are any discrepancies with the information above, or if you have any questions, please don’t hesitate to get in touch with us.</p>
            <p style="font-family: Helvetica, Arial, sans-serif; color: #555555; font-size: 16px;">We appreciate your business and look forward to serving you again in the future.</p>
            <p style="font-family: Helvetica, Arial, sans-serif; color: #555555; font-size: 16px;">Warm regards,<br>Your Pulse Team</p>
            `
        });
        res.send('Okay');
    } catch (e) {
        console.log(e);
        res.send('error');
    }
});

app.get('/users', (req, res) => {
    res.send(`
        Users:
        ${JSON.stringify(users)}
    `)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
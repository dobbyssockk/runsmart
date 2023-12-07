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
        user: '', // generated ethereal user
        pass: ''  // generated ethereal password
    }
});

app.post('/send-email', async (req, res) => {
    try {
        console.log('Sending email');
        const body = req.body;
        users.push(body);
        await transport.sendMail({
            from: "no-reply@pulse.com",
            to: "receiver@sender.com",
            subject: "Application confirmation from Pulse",
            html: `
            <h1>Welcome, ${body.name}!</h1>
            <p>Thank you for reaching out to us. We will ensure that our specialist contacts you within the next 10 minutes.</p>
            <p>For your convenience, we are repeating the information you provided:</p>
            <ul>
                <li><strong>Name:</strong> ${body.name}</li>
                <li><strong>Phone:</strong> ${body.phone}</li>
                <li><strong>E-mail:</strong> ${body.email}</li>
            </ul>
            <p>We look forward to the opportunity to assist you!</p>
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
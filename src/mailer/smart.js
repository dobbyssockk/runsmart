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
            subject: "Данные",
            html: `
            <h1>Приветствуем, ${body.name}!</h1>
            <p>Спасибо за заявку, мы свяжемся с Вами в течение 24 часов!</p>
            <p>Предоставленные Вами данные:</p>
            <p>Имя: ${body.name}</p>
            <p>Телефон: ${body.phone}</p>
            <p>E-mail: ${body.email}</p>
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
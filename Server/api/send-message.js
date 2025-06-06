import express from 'express';
import sgMail from '@sendgrid/mail';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(API_KEY);
console.log('SENDGRID_API_KEY:', API_KEY? 'Set' : 'Not Set');

// Define the POST endpoint
app.post('/send-message', async (req, res) => {
    const { name, email: userEmail, message, recaptchaToken } = req.body;

    if (!name || !userEmail || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Email options for SendGrid
    const msg = {
        to: 'mariorafat10@gmail.com',
        from: 'mariorafat10@gmail.com', // Must match the verified sender in SendGrid
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${userEmail}\nMessage: ${message}`,
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error.response ? error.response.body : error);
        res.status(500).json({ error: 'Failed to send message.' });
    }
});

export default app; // Vercel expects a default export for serverless functions
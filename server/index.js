const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

const accountSid = 'ACf230d111a9b9e90dd2081ae8585e295b';
const authToken = '4c3000698bc5d8d905a083179bb02917';
const client = require('twilio')(accountSid, authToken);

const app = express();

app.use(cors());  // blocks browser from restricting any data

app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

app.get('/send-text', (req, res) => {
    // GET variables, passed via query string
    const { senderName, senderNumber, textmessage } = req.query;
    console.log(req.query);

    // Send text
    client.messages.create({
        body: `${senderNumber}: This is ${senderName} contacting your from your portfolio website. Msg: ${textmessage}`,
        to: '+15593134060',
        from: '+16266056388'
    }).then((message) => console.log(message.body)).catch(e => { console.error('Got an error:', e.code, e.message); });
})

app.listen(4000, () => console.log("Running on Port 4000"));
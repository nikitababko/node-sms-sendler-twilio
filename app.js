const dotenv = require("dotenv");

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
    .create({
        body: "I found you...",
        from: process.env.MY_PHONE_NUMBER,
        to: process.env.PHONE_NUMBER_TO,
    })
    .then((message) => console.log(message.sid))
    .catch((err) => console.log(err));

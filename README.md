# Node SMS-sendler

Node.js app that uses [Twilio](https://www.twilio.com/) to send SMS text messages

## Install

`npm install` или `yarn install`

## Receiving SMS using Twilio

1. Registration to [Twilio](https://www.twilio.com/).
2. Enter to your account on this service.
3. Enter to dashboard.
   ![](https://image.prntscr.com/image/8NhFsqigRH6JT0ZDX-DsGA.jpg)
4. Get your information about your account-sid, auth-token, phone-number-form-twilio and phone number for departure.
   ![](https://image.prntscr.com/image/9Klbn4kGT9WPRN1QoBbpgQ.png)
5. Create .env file and replace values with yours:

```
TWILIO_ACCOUNT_SID=*******************************
TWILIO_AUTH_TOKEN=*******************************
MY_PHONE_NUMBER=+***********
PHONE_NUMBER_TO=+***********
```

6. Run the command `npm start` or `yarn start`.

## Built With

-   NodeJs
-   Twilio

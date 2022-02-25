const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const config = functions.config();
const cors = require("cors")({ origin: true });
var xoauth2 = require('xoauth2');
var smtp = require('nodemailer-smtp-transport');
admin.initializeApp();

const CLIENT_ID =
  "931630226225-h7aog7nrsgbupdo7256ujq4juqge864u.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04RVTCCY4wx2xCgYIARAAGAQSNwF-L9Ir2X9HeD2HWprMaqjPPD6sIIxBg1CLnoAFvKSEvdf6rpKna_gtt5FqNtZHQ6TAzQxaZxA";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

/*exports.sendMail = functions.https.onRequest((request, response) => {
 functions.logger.info("Hello logs!", {structuredData: true});
  cors(request, response, () => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });
  });
});*/

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "danielk14@servimatsrl.com.ar",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    let mailOptions = {
      from: "danielk14@servimatsrl.com.ar",
      to: "dkraushys@gmail.com",
      subject: "testing nodemailer",
      text: "test successful",
      html: "<h1>test successful</h1>",
    };

    const result = await transport.sendMail(mailOptions);

    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log(console.log("Email was sent", result)))
  .catch((error) => console.log(error.message));

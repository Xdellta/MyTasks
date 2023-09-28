const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

// Konfiguracja transportera e-mail
const transporter = nodemailer.createTransport({
  service: 'MyTasks',
  auth: {
    user: 'twój_adres_email@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

// Funkcja do wysyłania e-maila
function sendEmail(to, subject, text) {
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Błąd podczas wysyłania e-maila:', error);
    } else {
      console.log('E-mail został wysłany:', info.response);
    }
  });
}

module.exports = { sendEmail };
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.EMAIL_USERNAME,
      subject: `${subject} from my website`,
      text: message,
      replyTo: `${name} <${email}>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send("OK");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}

import nodemailer, { Transporter } from "nodemailer";
require("dotenv").config();

import ejs from "ejs";
import path from "path";

export interface Emailoptions {
  email: string;
  subject: string;
  html: string;
}

const sendmail = async (options: Emailoptions): Promise<void> => {
  const transporter: Transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    service: process.env.SMTP_SERVICE,

    auth: {
      user: process.env.SMTP_SERVICE,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const { email, subject, html } = options;

  const mailoptions = {
    from: process.env.SMTP_SERVICE,
    to: email,
    subject,
    html,
  };

  await transporter.sendMail(mailoptions);
};

export default sendmail;

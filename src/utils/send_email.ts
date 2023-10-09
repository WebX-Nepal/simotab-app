import nodemailer, { Transporter } from "nodemailer";
require("dotenv").config();

import ejs from "ejs";
import path from "path";

export interface Emailoptions {
  email: string;
  subject: string;
  template: string;
  data: { [key: string]: any };
}

const sendmail = async (options: Emailoptions): Promise<void> => {
  const transporter: Transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    service: process.env.SMTP_SERVICE,

    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const { email, data, subject, template } = options;

  const templetePath = path.join(__dirname, "../mails", template);

  const html = await ejs.renderFile(templetePath, data);

  const mailoptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject,
    html,
  };

  await transporter.sendMail(mailoptions);
};

export default sendmail;

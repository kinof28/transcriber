import nodemailer from "nodemailer";
import { env } from "process";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: env.EMAIL_AUTH_USER,
    pass: env.EMAIL_AUTH_PASSWORD,
  },
});
export default transporter;

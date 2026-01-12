"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

export const sendEmail = async (
  senderEmail: string,
  message: string,
  subject: string
) => {
  try {
    await transporter.sendMail({
      from: `My website <${process.env.APP_EMAIL}>'`,
      to: process.env.APP_EMAIL,
      subject,
      text: `Name: Client\nEmail: ${senderEmail}\nMessage: ${message}`,
      replyTo: senderEmail,
    });
    return { error: false, message: "Your Email Sent Successfully ! " };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    return { error: true, message: e.message };
  }
};

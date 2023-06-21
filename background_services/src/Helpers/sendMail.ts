import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '../.env') });

const configOptions = {
  host: "smtp.gmail.com",
  service: "gmail",
  port: 587,
  auth: {
    user: 'johnmwanikig2000@gmail.com',
    pass: 'eabdykjmukbonoss',
  },
};

function createTransporter(configOpts: any) {
  return nodemailer.createTransport(configOpts);
}

export async function sendMail(messageOptions: any) {
  const transporter = createTransporter(configOptions);
  try {
    const response = await transporter.sendMail(messageOptions);
    console.log(response);
  } catch (error) {
    console.error('Email not sent:', error);
  }
}

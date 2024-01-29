import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, message } = await request.json();
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });
  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${email}`,
    html: `<div style="font-family: Arial, sans-serif; max-width: 600px;">
            <p style="font-size: 16px; color: #333;">You received the following message from the contact form:</p>
            <p style="font-size: 14px; color: #666;">${message}</p>
            <hr style="border: 1px solid #ddd;">
            <p style="font-size: 14px; color: #777;">The sender's email is: ${email}</p>
          </div>`,
  };
  
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: `You've got an error ${err}` }, { status: 500 });
  }
}

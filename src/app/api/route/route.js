import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";

export async function POST(request) {
    const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
if (!serviceDomain) {
  throw new Error('NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is required');
}
    try {
        const { name, email, message } = await request.json();
        console.log("Received data:", { name, email, message });

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.verify();
        console.log("SMTP connection is ready");

        const toHostMailData = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `「お問い合わせ」${email}`,
            html: `
            <p>名前</p>
            <p>${name}</p>
            <p>メッセージ内容</p>
            <p>${message}</p>
            <p>メールアドレス</p>
            <p>${email}</p>`
        };

        await transporter.sendMail(toHostMailData);
        console.log("Email sent successfully");
        return NextResponse.json({ message: "メールが送信されました" }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: error.message || "内部サーバーエラー" }, { status: 500 });
    }
}
import { defineEventHandler, readBody} from 'h3';
import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const messageBody = Object.keys(body).map(key => {
    return `${key} : ${body[key]}`;
  }).join('\n');

  // SMTP設定と認証情報は環境変数から取得する
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // メールオプションの設定
  const mailOptions = {
    from: process.env.MAIL_FROM, // 送信元のアドレス
    to: process.env.MAIL_TO, // 宛先のメールアドレス
    subject: process.env.MAIL_SUBJECT, // メールの件名
    text: messageBody, // メールの本文
    html: `<p>${messageBody.replace(/\n/g, '<br>')}</p>`, // HTML形式のメール本文（オプション）
  };

  // メールの送信
  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    // エラーハンドリング
    event.res.statusCode = 500;
    return { success: false, error: error.message };
  }
});

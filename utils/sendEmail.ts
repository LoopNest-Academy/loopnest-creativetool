import nodemailer from "nodemailer"

async function sendEmail(
  email: string | string[],
  subject: string,
  htmlContent: string
) {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: subject,
    html: htmlContent,
  }

  await transporter.sendMail(mailOptions)
}

export default sendEmail

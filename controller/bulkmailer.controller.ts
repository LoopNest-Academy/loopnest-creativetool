import { FastifyReply, FastifyRequest } from "fastify"
import sendEmail from "../utils/sendEmail"

// Define types for the request
type mailBody = {
  email: string | string[]
  subject: string
  body: string
}

async function bulkMailer(
  req: FastifyRequest<{ Body: mailBody }>,
  rep: FastifyReply
) {
  console.log("Request Received")
  console.log(req.body)
  console.log("headers:", req.headers)

  const { email, subject, body } = req.body
  try {
    console.log("📤 Sending email...")
    await sendEmail(email, subject, body) // ⬅️ THIS IS THE KEY FIX
    console.log("✅ Email sent")
    rep.send({ success: true })
  } catch (error) {
    console.error("❌ Email failed:", error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    rep.status(500).send({ success: false, error: errorMessage })
  }
}

export default bulkMailer

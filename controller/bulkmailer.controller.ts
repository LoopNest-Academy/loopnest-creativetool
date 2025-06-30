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
  const { email, subject, body } = req.body

  sendEmail(email, subject, body)

  return rep.send({ success: true })
}

export default bulkMailer

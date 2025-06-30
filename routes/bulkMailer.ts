import { FastifyInstance } from "fastify"
import bulkMailerController from "../controller/bulkmailer.controller"

// Define the schema
import mailSchema from "../schema/mailSchema"

// Define types for the request

export default async function getMessages(app: FastifyInstance) {
  app.post("/mailer", { schema: { body: mailSchema } }, bulkMailerController)
}

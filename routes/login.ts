import { FastifyInstance } from "fastify"
import userLogin from "../controller/userLogin.controller"

// Define the schema
import userSchema from "../schema/userSchema"

// Define types for the request

export default async function getMessages(app: FastifyInstance) {
  app.post("/login", { schema: { body: userSchema } }, userLogin)
}

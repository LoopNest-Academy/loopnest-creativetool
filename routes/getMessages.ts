import { FastifyInstance } from "fastify"
import mongoSanitize = require("mongo-sanitize")
import Message from "../models/Message"

// Define the schema
const postMessageSchema = {
  body: {
    type: "object",
    required: ["sender", "body"],
    properties: {
      sender: { type: "string" },
      body: { type: "string" },
    },
  },
}

// Define types for the request
type PostMessageBody = {
  sender: string
  body: string
}

export default async function getMessages(app: FastifyInstance) {
  app.get("/", async (req, rep) => {
    const messages = await Message.find().sort({ createdAt: -1 })
    return rep.send({ messages })
  })

  app.post<{
    Body: PostMessageBody
  }>("/", { schema: postMessageSchema }, async (req, rep) => {
    const sanitizedBody = mongoSanitize(req.body)
    const newMessage = new Message(sanitizedBody)
    await newMessage.save()
    return rep.send({ status: "Message received", data: sanitizedBody })
  })
}

import mongoose from "mongoose"
import { FastifyInstance } from "fastify"
import app from "../app"

const connectDB = async (fastify: FastifyInstance) => {
  try {
    await mongoose.connect(app.config.MONGO_URL, {})
    fastify.log.info("MongoDB connected successfully")
  } catch (error) {
    fastify.log.error("MongoDB connection error:", error)
    throw error
  }
}

export default connectDB

import Fastify from "fastify"
import envSchema from "./schema/envSchema"
import env from "@fastify/env"
import cors from "@fastify/cors"
import helmet from "@fastify/helmet"
import rateLimit from "@fastify/rate-limit"
import autoLoad from "@fastify/autoload"
import path from "path"
import formBody from "@fastify/formbody"

const app = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "SYS:standard",
        ignore: "pid,hostname",
      },
    },
  },
})

app.register(env, { schema: envSchema, confKey: "config", dotenv: true })
app.register(cors, {
  origin: "*",
  credentials: true,
})
app.register(helmet)
app.register(rateLimit, {
  max: 100,
})
app.register(formBody)
// Example route
app.register(autoLoad, {
  dir: path.join(__dirname, "routes"),
  options: {
    prefix: "/api",
  },
})

app.register(autoLoad, {
  dir: path.join(__dirname, "plugins"),
})

export default app

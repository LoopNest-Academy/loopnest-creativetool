import Fastify from "fastify"
import autoLoad from "@fastify/autoload"
import path from "path"

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

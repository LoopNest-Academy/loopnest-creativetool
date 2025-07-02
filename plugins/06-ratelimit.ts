import fp from "fastify-plugin"
import rateLimit from "@fastify/rate-limit"

export default fp(async (app) => {
  app.register(rateLimit, {
    // max: 100,
    // For adding each routes indivisually req
    global: false,
  })
})

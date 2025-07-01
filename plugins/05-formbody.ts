import fp from "fastify-plugin"
import formBody from "@fastify/formbody"

export default fp(async (app) => {
  app.register(formBody)
  console.log("Formbody")
})

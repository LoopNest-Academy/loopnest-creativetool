import fp from "fastify-plugin"
import env from "@fastify/env"
import envSchema from "../schema/envSchema"

export default fp(async (app) => {
  app.register(env, { schema: envSchema, confKey: "config", dotenv: true })
})

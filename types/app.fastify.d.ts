import "@fastify/env"

declare module "fastify" {
  interface FastifyInstance {
    config: {
      PORT: string
      NODE_ENV: string
      API_KEY: string
      MONGO_URL: string
      EMAIL_ADDRESS: string
      EMAIL_PASSWORD: string
    }
  }
}

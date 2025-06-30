const envSchema = {
  type: "object",
  required: ["PORT", "API_KEY", "MONGO_URL", "EMAIL_ADDRESS", "EMAIL_PASSWORD"],
  properties: {
    PORT: { type: "string" },
    API_KEY: { type: "string" },
    MONGO_URL: { type: "string" },
    EMAIL_ADDRESS: { type: "string" },
    EMAIL_PASSWORD: { type: "string" },
    NODE_ENV: {
      type: "string",
      enum: ["development", "production"],
      default: "development",
    },
  },
}

export default envSchema

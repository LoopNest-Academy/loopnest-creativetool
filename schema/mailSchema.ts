const envSchema = {
  type: "object",
  required: ["email", "subject", "body"],
  properties: {
    email: { type: "string" },
    subject: { type: "string" },
    body: { type: "string" },
  },
}

export default envSchema

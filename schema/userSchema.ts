const envSchema = {
  type: "object",
  // required: ["name", "role", "email"],
  required: ["email"],
  properties: {
    // name: { type: "string" },
    // role: { type: "string" },
    email: { type: "string" },
  },
}

export default envSchema

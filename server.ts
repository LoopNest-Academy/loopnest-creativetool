import app from "./app"

const start = async () => {
  try {
    await app.ready()
    console.clear()
    await app.listen({ port: Number(app.config.PORT), host: "0.0.0.0" })
  } catch (err) {
    app.log.error(err)
  }
}

start()
